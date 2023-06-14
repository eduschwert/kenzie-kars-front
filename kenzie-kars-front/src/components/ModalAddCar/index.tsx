import { SyntheticEvent, useEffect, useState } from "react";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../Modal";
import { Flex, StyledBodyModal, StyledForm, StyledHeaderModal } from "./style";
import { iModalAddCarProps, iVehicleFipeApi } from "./types";
import X from "../../assets/x.svg";
import { useForm, Controller } from "react-hook-form";
import { StyledButton } from "../../styles/buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { vehicleSchema } from "./validators";
import { fipeApi } from "../../services/fipeApi";
import { AxiosResponse } from "axios";
import { CssTextField } from "../forms/muiStyle";
import { Autocomplete } from "@mui/material";
import { api } from "../../services";

export const ModalAddCar = ({ toggleModal }: iModalAddCarProps) => {
  const [cars, setCars] = useState([] as Array<iVehicleFipeApi>);
  const [brands, setBrands] = useState([] as Array<string>);
  const [models, setModels] = useState([] as Array<string>);
  const [years, setYears] = useState([] as Array<string>);
  const [fuels, setFuels] = useState([] as Array<string>);
  const [fipePrice, setFipePrice] = useState(0);

  const fuelsOptions = ["gasolina", "álcool", "híbrido"];

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fipeApi.get("/cars");
        const brands = Object.keys(response.data);
        setBrands(brands);
      } catch (error) {
        console.error("Error fetching car database", error);
      }
    };
    fetchBrands();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      brand: "",
      model: "",
      year: "",
      fuel: "",
      mileage: "",
      color: "",
      price: "",
      description: "",
      cover_image: "",
      image1: "",
      image2: "",
    },
  });

  const handleBrandChange = async (
    _: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setValue("brand", value || "");
    setValue("model", "");
    setValue("year", "");
    setValue("fuel", "");
    setModels([]);
    setYears([]);
    setFuels([]);
    setFipePrice(0);

    if (value) {
      try {
        const { data }: AxiosResponse<Array<iVehicleFipeApi>> =
          await fipeApi.get(`/cars?brand=${value}`);
        setCars(data);
        const models = data.map((car) => car.name);
        setModels([...models, ""]);
      } catch (error) {
        console.error("Error fetching models", error);
      }
    }
  };

  const handleModelChange = (
    _: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setValue("model", value || "");
    setValue("year", "");
    setValue("fuel", "");
    setYears([]);
    setFuels([]);
    setFipePrice(0);

    if (value) {
      const filteredYears = [
        ...new Set(
          cars.filter((car) => car.name === value).map((car) => car.year)
        ),
      ];
      setYears([...filteredYears, ""]);
    }
  };

  const handleYearChange = (
    _: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setValue("year", value || "");
    setValue("fuel", "");
    setFuels([]);
    setFipePrice(0);

    if (value) {
      const filteredFuels = [
        ...new Set(
          cars
            .filter((car) => car.name === watch("model") && car.year === value)
            .map((car) => fuelsOptions[car.fuel - 1])
        ),
      ];
      setFuels([...filteredFuels, ""]);
    }
  };

  const handleFuelChange = (
    _: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setValue("fuel", value || "");
    const selectedCar = cars.find(
      (car) =>
        car.name === watch("model") &&
        car.year === watch("year") &&
        fuelsOptions[car.fuel - 1] === value
    );

    if (selectedCar) {
      setFipePrice(selectedCar.value);
    }
  };

  const onSubmit = async (data) => {
    const fuelNumber = fuelsOptions.findIndex((fuel) => fuel === data.fuel);
    data = {
      ...data,
      fipe_price: fipePrice,
      fuel: fuelNumber + 1,
      mileage: Number(data.mileage),
      price: Number(data.price),
      images: [data.image1, data.image2],
    };
    try {
      const response = await api.post("vehicles", data);
      toggleModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledHeaderModal>
          <StyledText tag="h3" textStyle="heading-7-500" textColor="grey1">
            Criar anúncio
          </StyledText>
          <button onClick={toggleModal} type="button">
            <img src={X} alt="Fechar modal" />
          </button>
        </StyledHeaderModal>
        <StyledBodyModal>
          <StyledText tag="h4" textStyle="body-2-500" textColor="grey1">
            Informações do veículo
          </StyledText>
          <Controller
            control={control}
            name="brand"
            render={({ field }) => (
              <Autocomplete
                options={brands}
                noOptionsText="Sem carros com essa marca no momento"
                renderInput={(params) => (
                  <CssTextField
                    {...params}
                    label="Marca"
                    error={!!errors.brand}
                    helperText={errors.brand?.message}
                    variant="outlined"
                    size="medium"
                    type="text"
                  />
                )}
                onChange={(event, value) => {
                  field.onChange(value);
                  handleBrandChange(event, value);
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="model"
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={models}
                renderInput={(params) => (
                  <CssTextField
                    {...params}
                    label="Modelo"
                    error={!!errors.model}
                    helperText={errors.model?.message}
                    variant="outlined"
                    size="medium"
                    type="text"
                  />
                )}
                onChange={(event, value) => {
                  field.onChange(value);
                  handleModelChange(event, value);
                }}
                disabled={!watch("brand")}
              />
            )}
          />
          <Flex>
            <Controller
              control={control}
              name="year"
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={years}
                  renderInput={(params) => (
                    <CssTextField
                      {...params}
                      label="Ano"
                      error={!!errors.year}
                      helperText={errors.year?.message}
                      variant="outlined"
                      size="medium"
                      type="text"
                    />
                  )}
                  onChange={(event, value) => {
                    field.onChange(value);
                    handleYearChange(event, value);
                  }}
                  disabled={!watch("brand") || !watch("model")}
                />
              )}
            />
            <Controller
              control={control}
              name="fuel"
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={fuels}
                  renderInput={(params) => (
                    <CssTextField
                      {...params}
                      label="Combustível"
                      error={!!errors.fuel}
                      helperText={errors.fuel?.message}
                      variant="outlined"
                      size="medium"
                      type="text"
                    />
                  )}
                  onChange={(event, value) => {
                    field.onChange(value);
                    handleFuelChange(event, value);
                  }}
                  disabled={
                    !watch("brand") || !watch("model") || !watch("year")
                  }
                />
              )}
            />
          </Flex>
          <Flex>
            <Controller
              control={control}
              name="mileage"
              render={({ field }) => (
                <CssTextField
                  {...field}
                  label="Quilometragem"
                  error={!!errors.mileage}
                  helperText={errors.mileage?.message}
                  variant="outlined"
                  size="medium"
                  type="text"
                />
              )}
            />
            <Controller
              control={control}
              name="color"
              render={({ field }) => (
                <CssTextField
                  {...field}
                  label="Cor"
                  error={!!errors.color}
                  helperText={errors.color?.message}
                  variant="outlined"
                  size="medium"
                  type="text"
                />
              )}
            />
          </Flex>
          <Flex>
            <CssTextField
              value={fipePrice}
              label="Preço tabela FIPE"
              variant="outlined"
              size="medium"
              type="text"
              InputProps={{
                readOnly: true,
              }}
            />
            <Controller
              control={control}
              name="price"
              render={({ field }) => (
                <CssTextField
                  {...field}
                  label="Preço"
                  error={!!errors.price}
                  helperText={errors.price?.message}
                  variant="outlined"
                  size="medium"
                  type="text"
                />
              )}
            />
          </Flex>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <CssTextField
                {...field}
                label="Descrição"
                error={!!errors.description}
                helperText={errors.description?.message}
                variant="outlined"
                size="medium"
                type="text"
              />
            )}
          />
          <Controller
            control={control}
            name="cover_image"
            render={({ field }) => (
              <CssTextField
                {...field}
                label="Imagem de capa"
                error={!!errors.cover_image}
                helperText={errors.cover_image?.message}
                variant="outlined"
                size="medium"
                type="text"
              />
            )}
          />
          <Controller
            control={control}
            name="image1"
            render={({ field }) => (
              <CssTextField
                {...field}
                label="Primeira imagem da galeria"
                error={!!errors.image1}
                helperText={errors.image1?.message}
                variant="outlined"
                size="medium"
                type="text"
              />
            )}
          />
          <Controller
            control={control}
            name="image2"
            render={({ field }) => (
              <CssTextField
                {...field}
                label="Segunda imagem da galeria"
                error={!!errors.image2}
                helperText={errors.image2?.message}
                variant="outlined"
                size="medium"
                type="text"
              />
            )}
          />
          <StyledButton tag="button" buttonStyle="bg" buttonColor="brand1">
            Criar anúncio
          </StyledButton>
        </StyledBodyModal>
      </StyledForm>
    </Modal>
  );
};
