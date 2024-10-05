import { FaSearch } from "react-icons/fa";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import { toast } from "react-toastify";
import { Checkbox } from "@mui/material";

import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { StyledButtonFilter, StyledDivFilter, StyledDivGoodBuy } from "./style";
import {
  colors,
  formatNumberBRNoPrefix,
  fuelOptions,
  removeMask,
} from "../../utils";
import { iFilterInput, iFilters, iVehicleFipeApi } from "../../interfaces";
import { useFipeApi, useModal } from "../../hooks/useContexts";
import { fipeApi } from "../../services/fipeApi";

export const Filter = ({
  isInModal,
  filters,
  setFilters,
}: {
  isInModal: boolean;
  filters: iFilters;
  setFilters: React.Dispatch<React.SetStateAction<iFilters>>;
}) => {
  const { closeModal } = useModal();

  const { brands, loading } = useFipeApi();

  const [models, setModels] = useState([] as Array<string>);
  const [loadingModel, setLoadingModel] = useState(false);

  const { minMileage, maxMileage, minPrice, maxPrice, minYear, maxYear } =
    filters;

  const handleBrandChange = async (value: string) => {
    if (value === filters.brand) {
      setFilters({ ...filters, brand: "", model: "" });
      setModels([]);
    } else {
      setFilters({ ...filters, brand: value, model: "" });
      try {
        setLoadingModel(true);
        const { data } = await fipeApi.get<iVehicleFipeApi[]>(
          `/cars?brand=${value}`
        );
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

  const { handleSubmit, control, setValue, register } = useForm<iFilterInput>({
    mode: "onSubmit",
    defaultValues: {
      minYear: minYear,
      maxYear: maxYear,
      minMileage: minMileage,
      maxMileage: maxMileage,
      minPrice: minPrice,
      maxPrice: maxPrice,
    },
  });

  const submitYear: SubmitHandler<iFilterInput> = (data) => {
    const cleanedData = {
      minYear: data.minYear,
      maxYear: data.maxYear,
    };
    setFilters({ ...filters, ...cleanedData });
  };

  const submitMileage: SubmitHandler<iFilterInput> = (data) => {
    const cleanedData = {
      minMileage: removeMask(data.minMileage),
      maxMileage: removeMask(data.maxMileage),
    };
    setFilters({ ...filters, ...cleanedData });
  };

  const submitPrice: SubmitHandler<iFilterInput> = (data) => {
    const cleanedData = {
      minPrice: removeMask(data.minPrice),
      maxPrice: removeMask(data.maxPrice),
    };
    setFilters({ ...filters, ...cleanedData });
  };

  return (
    <StyledDivFilter className="filter">
      <div className="filterField">
        <StyledText tag="h6" $textStyle="heading-4-600" $textColor="grey0">
          Marca
        </StyledText>
        <div className="filterFieldButtons">
          {loading ? (
            <ClipLoader color="#212529" size={"3rem"} />
          ) : (
            <>
              {brands.map((brand, i) => (
                <StyledButtonFilter
                  key={i}
                  $clicked={filters.brand === brand}
                  onClick={() => handleBrandChange(brand)}
                >
                  {brand}
                </StyledButtonFilter>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="filterField">
        {filters.brand && (
          <>
            <StyledText tag="h6" $textStyle="heading-4-600" $textColor="grey0">
              Modelo
            </StyledText>
            <div className="filterFieldButtons">
              {loadingModel ? (
                <ClipLoader color="#212529" size={"3rem"} />
              ) : (
                models.map((model, i) => (
                  <StyledButtonFilter
                    $clicked={filters.model === model}
                    onClick={() => {
                      if (filters.model === model) {
                        setFilters({ ...filters, model: "" });
                      } else {
                        setFilters({ ...filters, model });
                      }
                    }}
                    key={i}
                  >
                    {model}
                  </StyledButtonFilter>
                ))
              )}
            </div>
          </>
        )}
      </div>
      <div className="filterField">
        <StyledText tag="h6" $textStyle="heading-4-600" $textColor="grey0">
          Abaixo da FIPE
        </StyledText>
        <div className="filterFieldButtons">
          <Checkbox
            checked={filters.isGoodBuy ?? false}
            onChange={(e) =>
              setFilters({ ...filters, isGoodBuy: e.target.checked })
            }
            icon={<StyledDivGoodBuy $isGoodBuy={false}>$</StyledDivGoodBuy>}
            checkedIcon={
              <StyledDivGoodBuy $isGoodBuy={true}>$</StyledDivGoodBuy>
            }
          />
        </div>
      </div>
      <div className="filterField">
        <StyledText tag="h6" $textStyle="heading-4-600" $textColor="grey0">
          Cor
        </StyledText>
        <div className="filterFieldButtons">
          {colors.map((color, i) => (
            <StyledButtonFilter
              $clicked={filters.color === color}
              key={i}
              onClick={() => {
                if (filters.color === color) {
                  setFilters({ ...filters, color: "" });
                } else {
                  setFilters({ ...filters, color });
                }
              }}
            >
              {color}
            </StyledButtonFilter>
          ))}
        </div>
      </div>
      <div className="filterField">
        <StyledText tag="h6" $textStyle="heading-4-600" $textColor="grey0">
          Ano
        </StyledText>
        <form onSubmit={handleSubmit(submitYear)} className="filterFieldRange">
          <input
            type="number"
            placeholder="min"
            maxLength={4}
            {...register("minYear")}
          />
          <input
            type="number"
            placeholder="max"
            maxLength={4}
            {...register("maxYear")}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="filterField">
        <StyledText tag="h6" $textStyle="heading-4-600" $textColor="grey0">
          Combustível
        </StyledText>
        <div className="filterFieldButtons">
          {fuelOptions.map((fuel, i) => (
            <StyledButtonFilter
              $clicked={filters.fuel === fuelOptions.indexOf(fuel) + 1}
              key={i}
              onClick={() => {
                if (filters.fuel === fuelOptions.indexOf(fuel) + 1) {
                  setFilters({ ...filters, fuel: 0 });
                } else {
                  setFilters({
                    ...filters,
                    fuel: fuelOptions.indexOf(fuel) + 1,
                  });
                }
              }}
            >
              {fuel}
            </StyledButtonFilter>
          ))}
        </div>
      </div>
      <div className="filterField">
        <StyledText tag="h6" $textStyle="heading-4-600" $textColor="grey0">
          Km
        </StyledText>
        <form
          onSubmit={handleSubmit(submitMileage)}
          className="filterFieldRange"
        >
          <Controller
            name="minMileage"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <input
                {...field}
                value={value || ""}
                onChange={(e) => {
                  const rawValue = removeMask(e.target.value);
                  const formattedValue = formatNumberBRNoPrefix(
                    Number(rawValue)
                  );
                  onChange(formattedValue);
                }}
                type="text"
                placeholder="min"
              />
            )}
          />
          <Controller
            name="maxMileage"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <input
                {...field}
                value={value || ""}
                onChange={(e) => {
                  const rawValue = removeMask(e.target.value);
                  const formattedValue = formatNumberBRNoPrefix(
                    Number(rawValue)
                  );
                  onChange(formattedValue);
                }}
                type="text"
                placeholder="max"
              />
            )}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="filterField">
        <StyledText tag="h6" $textStyle="heading-4-600" $textColor="grey0">
          Preço
        </StyledText>
        <form onSubmit={handleSubmit(submitPrice)} className="filterFieldRange">
          <Controller
            name="minPrice"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <input
                {...field}
                value={value || ""}
                onChange={(e) => {
                  const rawValue = removeMask(e.target.value);
                  const formattedValue = formatNumberBRNoPrefix(
                    Number(rawValue)
                  );
                  onChange(formattedValue);
                }}
                type="text"
                placeholder="min"
              />
            )}
          />
          <Controller
            name="maxPrice"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <input
                {...field}
                value={value || ""}
                onChange={(e) => {
                  const rawValue = removeMask(e.target.value);
                  const formattedValue = formatNumberBRNoPrefix(
                    Number(rawValue)
                  );
                  onChange(formattedValue);
                }}
                type="text"
                placeholder="max"
              />
            )}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="filterButton">
        <StyledButton
          onClick={() => {
            setFilters({
              brand: "",
              model: "",
              isGoodBuy: undefined,
              color: "",
              minYear: "",
              maxYear: "",
              fuel: 0,
              minMileage: "",
              maxMileage: "",
              minPrice: "",
              maxPrice: "",
            });
            setModels([]);
            setValue("minYear", "");
            setValue("maxYear", "");
            setValue("minMileage", "");
            setValue("maxMileage", "");
            setValue("minPrice", "");
            setValue("maxPrice", "");
          }}
          $buttonStyle="big"
          $buttonColor={isInModal ? "outline1" : "brand1"}
        >
          Limpar filtros
        </StyledButton>
        {isInModal && (
          <StyledButton
            onClick={closeModal}
            $buttonStyle="big"
            $buttonColor="brand1"
          >
            Ver anúncios
          </StyledButton>
        )}
      </div>
    </StyledDivFilter>
  );
};
