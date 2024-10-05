import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { StyledText } from "../../styles/tipography";
import { StyledButton } from "../../styles/buttons";
import { Footer } from "../../components/footer";
import { Filter } from "../../components/filter";
import {
  StyledDivFilter,
  StyledDivFullPage,
  StyledDivLogo,
  StyledDivContainer,
} from "./style";
import { useModal } from "../../hooks/useContexts";
import { Pagination } from "../../components/pagination";
import { Vehicles } from "../../components/vehicles";
import { VehicleHome } from "../../components/vehicleHome";
import logoVehicle from "../../assets/logoVehicle.svg";
import { Modal } from "../../components/modal";
import {
  iFilters,
  iPaginationResult,
  iVehicleResponseWithUser,
  iVehicleResponseWithUserAndColor,
} from "../../interfaces";
import { api } from "../../services/api";
import { getRandomColor } from "./randomColor";

export const HomePage = () => {
  const [vehicles, setVehicles] = useState<iPaginationResult<
    iVehicleResponseWithUserAndColor[]
  > | null>(null);
  const [loadingVehicle, setLoadingVehicle] = useState(true);

  const { isOpenModal, openModal, modalType, setModalType } = useModal();

  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    isGoodBuy: undefined as undefined | boolean,
    color: "",
    minYear: "",
    maxYear: "",
    fuel: 0,
    minMileage: "",
    maxMileage: "",
    minPrice: "",
    maxPrice: "",
  });

  const loadUserColors = () => {
    const storedColors = sessionStorage.getItem("userColors");
    return storedColors ? JSON.parse(storedColors) : {};
  };

  const saveUserColors = (colors: Record<string, string>) => {
    sessionStorage.setItem("userColors", JSON.stringify(colors));
  };

  const location = useLocation();

  useEffect(() => {
    setPage(1);
  }, [filters]);

  useEffect(() => {
    const getVehicles = async (page: number, filters: iFilters) => {
      try {
        setLoadingVehicle(true);

        const { data } = await api.get<
          iPaginationResult<iVehicleResponseWithUser[]>
        >("vehicles", {
          params: {
            page,
            ...filters,
          },
        });

        // eslint-disable-next-line prefer-const
        let userColors = loadUserColors();

        const vehiclesWithColors: iVehicleResponseWithUserAndColor[] =
          data.data.length > 0
            ? data.data.map((vehicle) => {
                const userId = vehicle.user.id;

                if (!userColors[userId]) {
                  userColors[userId] = getRandomColor();
                }

                return {
                  ...vehicle,
                  user: {
                    ...vehicle.user,
                    color: userColors[userId],
                  },
                };
              })
            : [];

        saveUserColors(userColors);
        setVehicles({ ...data, data: vehiclesWithColors });
      } catch (error) {
        console.error(error);
        if (axios.isAxiosError(error)) {
          if (error.code === "ECONNABORTED") {
            toast.error(
              "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
            );
          } else if (error.response) {
            toast.error(error.response?.data.message);
          }
        }
      } finally {
        setLoadingVehicle(false);
      }
    };

    getVehicles(page, filters);
  }, [location, page, filters]);

  return (
    <>
      {isOpenModal && modalType === "filter" && (
        <Modal title="Filtro">
          <Filter isInModal={true} filters={filters} setFilters={setFilters} />
        </Modal>
      )}
      <StyledDivFullPage>
        <main>
          <StyledDivLogo>
            <img src={logoVehicle} alt="Logo" />
            <div className="logoText">
              <StyledText
                tag="h1"
                $textStyle="heading-1-700"
                $textColor="grey10"
              >
                Motors Shop
              </StyledText>
            </div>
          </StyledDivLogo>
          <StyledDivContainer>
            <div className="filterCards">
              <StyledDivFilter>
                <Filter
                  isInModal={true}
                  filters={filters}
                  setFilters={setFilters}
                />
              </StyledDivFilter>
              <Vehicles
                loadingVehicle={loadingVehicle}
                length={vehicles ? vehicles.data.length : 0}
                emptyMessage="Nenhum veículo encontrado"
              >
                {vehicles &&
                  vehicles.data.length > 0 &&
                  vehicles.data.map((vehicle, i) => (
                    <VehicleHome key={i} vehicle={vehicle} />
                  ))}
              </Vehicles>
            </div>
            <StyledButton
              onClick={() => {
                openModal();
                setModalType("filter");
              }}
              className="filterButton"
              $buttonStyle="big"
              $buttonColor="brand1"
            >
              Filtros
            </StyledButton>
            <Pagination
              page={page}
              setPage={setPage}
              totalPages={vehicles ? vehicles.totalPages : 0}
            />
          </StyledDivContainer>
        </main>
        <Footer />
      </StyledDivFullPage>
    </>
  );
};
