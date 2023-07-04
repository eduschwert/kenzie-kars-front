import { SyntheticEvent, useEffect, useState } from "react";
import { StyledText } from "../../styles/tipography";

import { Modal } from "../modal";
import {
  Flex,
  FlexEnd,
  StyledBodyModal,
  StyledDivButton,
  StyledForm,
  StyledHeaderModal,
} from "./style";

import { iFormData, iModalAddCarProps, iVehicleFipeApi } from "./types";
import { useForm, Controller } from "react-hook-form";
import { StyledButton } from "../../styles/buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { vehicleSchema } from "./validators";
import { fipeApi } from "../../services/fipeApi";
import { AxiosResponse } from "axios";
import { CssTextField } from "../forms/muiStyle";
import { Autocomplete } from "@mui/material";
import { api } from "../../services/api";
import { AiOutlineClose } from "react-icons/ai";
import { useUser } from "../../hooks/useUser";
import { SyncLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useProduct } from "../../hooks/useProduct";

export const ModalAddCar = ({ toggleModal }: iModalAddCarProps) => {
  const [cars, setCars] = useState([] as Array<iVehicleFipeApi>);
  const [brands, setBrands] = useState([] as Array<string>);
  const [models, setModels] = useState([] as Array<string>);
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState(0);
  const [fipePrice, setFipePrice] = useState(0);

  const [imagesNumber, setImagesNumber] = useState(2);

  const { spinner, setSpinner } = useUser();

  const { setVehiclesProfileViewAdmin } = useProduct();

  const fuelsOptions = ["flex", "híbrido", "elétrico"];

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
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      brand: "",
      model: "",
      mileage: "",
      color: "",
      price: "",
      description: "",
      cover_image: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      image6: "",
    },
  });

  const handleBrandChange = async (
    _: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setValue("brand", value || "");
    setValue("model", "");
    setModels([]);
    setYear("");
    setFuel(0);
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
    setYear("");
    setFuel(0);
    setFipePrice(0);

    let car;
    if (value) {
      car = cars.find((car) => car.name === value);
    }

    if (car) {
      setYear(car.year);
      setFuel(car.fuel);
      setFipePrice(car.value);
    }
  };

  const onSubmit = async (data: iFormData) => {
    const images = Object.keys(data)
      .filter((key) => key.startsWith("image"))
      .map((key) => data[key])
      .filter((value) => value);

    const newData = {
      ...data,
      fipe_price: fipePrice,
      year: year,
      fuel: fuel,
      mileage: Number(data.mileage),
      price: Number(data.price),
      images: images,
    };
    try {
      setSpinner(true);
      const token = localStorage.getItem("@KenzieKars:token");
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const response = await api.post("vehicles", newData);
      setVehiclesProfileViewAdmin((previousVehicles) => [
        ...(previousVehicles || []),
        response.data,
      ]);
      toggleModal();
    } catch (error) {
      console.error(error);
      toast.error("Ops,algo deu errado!");
    } finally {
      setSpinner(false);
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
            <AiOutlineClose size={22} color={"#0b0d0d"} />
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
                    required
                    error={!!errors.brand}
                    helperText={errors.brand?.message}
                    variant="outlined"
                    size="medium"
                    type="text"
                  />
                )}
                onChange={(event, value) => {
                  const selectedValue = typeof value === "string" ? value : "";
                  field.onChange(selectedValue);
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
                    required
                    error={!!errors.model}
                    helperText={errors.model?.message}
                    variant="outlined"
                    size="medium"
                    type="text"
                  />
                )}
                onChange={(event, value) => {
                  const selectedValue = typeof value === "string" ? value : "";
                  field.onChange(selectedValue);
                  handleModelChange(event, value);
                }}
                disabled={!watch("brand")}
              />
            )}
          />
          <Flex>
            <CssTextField
              value={year}
              label="Ano"
              required
              variant="outlined"
              size="medium"
              type="text"
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <CssTextField
              value={fuel !== 0 ? fuelsOptions[fuel - 1] : ""}
              label="Combustível"
              required
              variant="outlined"
              size="medium"
              type="text"
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
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
                  required
                  error={!!errors.mileage}
                  helperText={errors.mileage?.message}
                  variant="outlined"
                  size="medium"
                  type="number"
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
                  required
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
              value={fipePrice === 0 ? "" : fipePrice}
              label="Preço tabela FIPE"
              required
              variant="outlined"
              size="medium"
              type="number"
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Controller
              control={control}
              name="price"
              render={({ field }) => (
                <CssTextField
                  {...field}
                  label="Preço"
                  required
                  error={!!errors.price}
                  helperText={errors.price?.message}
                  variant="outlined"
                  size="medium"
                  type="number"
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
                required
                multiline
                rows={3}
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
                required
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
                label="1° Imagem da galeria"
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
                label="2° Imagem da galeria"
                error={!!errors.image2}
                helperText={errors.image2?.message}
                variant="outlined"
                size="medium"
                type="text"
              />
            )}
          />
          {imagesNumber >= 3 && (
            <Controller
              control={control}
              name="image3"
              render={({ field }) => (
                <CssTextField
                  {...field}
                  label="3° Imagem da galeria"
                  error={!!errors.image3}
                  helperText={errors.image3?.message}
                  variant="outlined"
                  size="medium"
                  type="text"
                />
              )}
            />
          )}
          {imagesNumber >= 4 && (
            <Controller
              control={control}
              name="image4"
              render={({ field }) => (
                <CssTextField
                  {...field}
                  label="4° Imagem da galeria"
                  error={!!errors.image4}
                  helperText={errors.image4?.message}
                  variant="outlined"
                  size="medium"
                  type="text"
                />
              )}
            />
          )}
          {imagesNumber >= 5 && (
            <Controller
              control={control}
              name="image5"
              render={({ field }) => (
                <CssTextField
                  {...field}
                  label="5° Imagem da galeria"
                  error={!!errors.image5}
                  helperText={errors.image5?.message}
                  variant="outlined"
                  size="medium"
                  type="text"
                />
              )}
            />
          )}
          {imagesNumber >= 6 && (
            <Controller
              control={control}
              name="image6"
              render={({ field }) => (
                <CssTextField
                  {...field}
                  label="6° Imagem da galeria"
                  error={!!errors.image6}
                  helperText={errors.image6?.message}
                  variant="outlined"
                  size="medium"
                  type="text"
                />
              )}
            />
          )}
          <StyledDivButton>
            <StyledButton
              type="button"
              buttonStyle="sm"
              buttonColor="brandOpacity"
              disabled={imagesNumber === 6}
              onClick={() => setImagesNumber((prevNumber) => prevNumber + 1)}
            >
              Adicionar campo para imagem da galeria
            </StyledButton>
          </StyledDivButton>
          <FlexEnd>
            <StyledButton
              onClick={toggleModal}
              type="button"
              buttonStyle="bg"
              buttonColor="negative"
            >
              Cancelar
            </StyledButton>
            <StyledButton
              disabled={!isValid}
              buttonStyle="bg"
              buttonColor="brand1"
              width="162px"
            >
              {spinner ? (
                <SyncLoader color="#FFFFFF" size={8} />
              ) : (
                "Criar anúncio"
              )}
            </StyledButton>
          </FlexEnd>
        </StyledBodyModal>
      </StyledForm>
    </Modal>
  );
};
