import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

import { Modal } from "../modal";
import { iVehicleFipeApi } from "../../interfaces";
import { StyledFormFlexCol, StyledDivFlex } from "./style";
import { StyledText } from "../../styles/tipography";
import { StyledButton } from "../../styles/buttons";
import { iVehicleRequest, vehicleSchema } from "./schema";
import { fipeApi } from "../../services/fipeApi";
import { useFipeApi, useModal, useSeller } from "../../hooks/useContexts";
import { Input } from "../input";
import {
  colors,
  formatNumberBRNoPrefix,
  fuelOptions,
  removeMask,
} from "../../utils";
import { CssAutoComplete, CssTextField } from "../../styles/muiStyles";

export const ModalCreateVehicle = () => {
  const [vehicles, setVehicles] = useState<iVehicleFipeApi[] | null>(null);
  const [models, setModels] = useState([] as Array<string>);

  const [imagesNumber, setImagesNumber] = useState(2);

  const { createVehicle, loading } = useSeller();
  const { closeModal } = useModal();
  const { brands, loading: loadingFipeApi } = useFipeApi();

  const [loadingModel, setLoadingModel] = useState(false);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm<iVehicleRequest>({
    mode: "onTouched",
    resolver: zodResolver(vehicleSchema),
  });

  const handleBrandChange = async (value: string | null) => {
    setValue("model", "");
    setModels([]);
    setValue("year", "");
    setValue("fuel", "");
    setValue("fipePrice", "");

    if (value) {
      try {
        setLoadingModel(true);
        const { data } = await fipeApi.get<iVehicleFipeApi[]>(
          `/cars?brand=${value}`
        );
        setVehicles(data);
        const models = data.map((vehicle) => vehicle.name);
        setModels(models);
      } catch (error) {
        toast.error("Erro ao consultar os modelos");
        console.error("Error fetching models", error);
      } finally {
        setLoadingModel(false);
      }
    }
  };

  const handleModelChange = (value: string | null) => {
    setValue("model", value || "");
    setValue("year", "");
    setValue("fuel", "");
    setValue("fipePrice", "");

    let vehicle;

    if (value) {
      vehicle = vehicles?.find((vehicle) => vehicle.name === value);
    }

    if (vehicle) {
      setValue("year", vehicle.year);
      setValue("fuel", fuelOptions[vehicle.fuel - 1]);
      setValue("fipePrice", formatNumberBRNoPrefix(vehicle.value));
    }
  };

  const submit: SubmitHandler<iVehicleRequest> = async (data) => {
    const images = Object.keys(data)
      .filter((key) => key.startsWith("image") && key in data)
      .map((key) => data[key as keyof typeof data])
      .filter((value) => value);

    const cleanedData = {
      ...data,
      fuel: fuelOptions.indexOf(data.fuel) + 1,
      mileage: Number(removeMask(data.mileage)),
      price: Number(removeMask(data.price)),
      fipePrice: Number(removeMask(data.fipePrice)),
      images: images,
    };

    createVehicle(cleanedData);
  };

  return (
    <Modal title="Criar anúncio">
      <StyledFormFlexCol onSubmit={handleSubmit(submit)}>
        <StyledText tag="h4" $textStyle="body-2-500" $textColor="grey1">
          Informações do veículo
        </StyledText>
        <Controller
          control={control}
          name="brand"
          render={({ field }) => (
            <CssAutoComplete
              {...field}
              value={field.value || null}
              disablePortal
              noOptionsText="Sem carros com essa marca no momento"
              options={brands}
              loading={loadingFipeApi}
              loadingText={
                <StyledDivFlex>
                  <ClipLoader color="#212529" size={"3rem"} />
                  <StyledText
                    tag="span"
                    $textStyle="body-1-400"
                    $textColor="grey0"
                  >
                    Carregando...
                  </StyledText>
                </StyledDivFlex>
              }
              onChange={(_, value) => {
                const newValue = value
                  ? typeof value === "string"
                    ? value
                    : null
                  : null;
                handleBrandChange(newValue);
                field.onChange(newValue);
              }}
              renderInput={(params) => (
                <CssTextField
                  {...params}
                  label="Marca"
                  error={!!errors.brand}
                  helperText={errors.brand?.message}
                  type="text"
                />
              )}
            />
          )}
        />
        <Controller
          control={control}
          name="model"
          render={({ field }) => (
            <CssAutoComplete
              {...field}
              noOptionsText="Sem carros com esse modelo no momento"
              value={field.value || null}
              disablePortal
              loading={loadingModel}
              loadingText={
                <StyledDivFlex>
                  <ClipLoader color="#212529" size={"3rem"} />
                  <StyledText
                    tag="span"
                    $textStyle="body-1-400"
                    $textColor="grey0"
                  >
                    Carregando...
                  </StyledText>
                </StyledDivFlex>
              }
              options={models}
              disabled={!watch("brand")}
              onChange={(_, value) => {
                const newValue = value
                  ? typeof value === "string"
                    ? value
                    : null
                  : null;
                handleModelChange(newValue);
                field.onChange(newValue);
              }}
              renderInput={(params) => (
                <CssTextField
                  {...params}
                  label="Modelo"
                  error={!!errors.model}
                  helperText={errors.model?.message}
                  type="text"
                />
              )}
            />
          )}
        />
        {watch("brand") && watch("model") && (
          <>
            <div className="flexRow">
              <Input
                id="year"
                label="Ano"
                type="number"
                readOnly={true}
                register={register("year")}
              />
              <Input
                id="fuel"
                label="Combustível"
                type="text"
                readOnly={true}
                register={register("fuel")}
              />
            </div>
            <Controller
              name="mileage"
              control={control}
              render={({ field: { onChange, value, ...field } }) => (
                <Input
                  id="mileage"
                  label="Quilometragem"
                  field={field}
                  value={value || ""}
                  error={errors.mileage}
                  onChange={(e) => {
                    const rawValue = removeMask(e.target.value);
                    const formattedValue = formatNumberBRNoPrefix(
                      Number(rawValue)
                    );
                    onChange(formattedValue);
                  }}
                  type="text"
                  placeHolder="Digitar quilometragem"
                />
              )}
            />
            <Controller
              control={control}
              name="color"
              render={({ field }) => (
                <CssAutoComplete
                  {...field}
                  value={field.value || null}
                  onChange={(_, value) => {
                    const newValue = value
                      ? typeof value === "string"
                        ? value
                        : null
                      : null;
                    field.onChange(newValue);
                  }}
                  disablePortal
                  options={colors}
                  renderInput={(params) => (
                    <CssTextField
                      {...params}
                      label="Cor"
                      error={!!errors.color}
                      helperText={errors.color?.message}
                      type="text"
                    />
                  )}
                />
              )}
            />
            <div className="flexRow">
              <Input
                id="fipePrice"
                label="Preço tabela FIPE"
                type="text"
                readOnly={true}
                register={register("fipePrice")}
              />
              <Controller
                name="price"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  <Input
                    id="price"
                    label="Preço"
                    field={field}
                    value={value || ""}
                    error={errors.price}
                    onChange={(e) => {
                      const rawValue = removeMask(e.target.value);
                      const formattedValue = formatNumberBRNoPrefix(
                        Number(rawValue)
                      );
                      onChange(formattedValue);
                    }}
                    type="text"
                    placeHolder="Digitar preço"
                  />
                )}
              />
            </div>
            <Input
              id="description"
              label="Descrição"
              error={errors.description}
              textarea={true}
              register={register("description")}
              placeHolder="Digitar descrição"
            />
            <Input
              id="coverImage"
              label="Imagem de capa"
              type="text"
              error={errors.coverImage}
              register={register("coverImage")}
              placeHolder="Link da imagem"
            />
            {[...Array(imagesNumber)].map((_, i) => {
              const imageField = `image${i + 1}` as keyof iVehicleRequest;
              return (
                <Input
                  key={i}
                  id={imageField}
                  label={`${i + 1}° Imagem da galeria`}
                  type="text"
                  error={errors[imageField]}
                  register={register(imageField)}
                  placeHolder="Link da imagem"
                />
              );
            })}
            <StyledButton
              type="button"
              $buttonStyle="big"
              $buttonColor="brandOpacity"
              style={{ textWrap: "wrap" }}
              disabled={imagesNumber === 6}
              onClick={() => setImagesNumber((prevNumber) => prevNumber + 1)}
            >
              Adicionar campo para imagem da galeria
            </StyledButton>

            <div className="flexEnd">
              <StyledButton
                onClick={closeModal}
                type="button"
                $buttonStyle="big"
                $buttonColor="negative"
              >
                Cancelar
              </StyledButton>
              <StyledButton
                $buttonStyle="big"
                $buttonColor="brand1"
                $minWidth="16.2rem"
              >
                {loading ? (
                  <ClipLoader color="#F8F9FA" size={"3rem"} />
                ) : (
                  "Criar anúncio"
                )}
              </StyledButton>
            </div>
          </>
        )}
      </StyledFormFlexCol>
    </Modal>
  );
};
