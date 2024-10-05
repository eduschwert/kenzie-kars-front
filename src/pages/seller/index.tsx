import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { toast } from "react-toastify";

import { StyledText } from "../../styles/tipography";
import {
  StyledDivFullPage,
  StyledMain,
  StyledDivUserInformations,
} from "./style";
import { UserAvatar } from "../../components/userAvatar";
import { DetailBox } from "../../components/detailBox";
import { Footer } from "../../components/footer";
import { Vehicles } from "../../components/vehicles";
import { Pagination } from "../../components/pagination";
import {
  iPaginationResult,
  iVehicleResponseListWithOneUser,
} from "../../interfaces";
import { api } from "../../services/api";
import { VehicleSeller } from "../../components/vehicleSeller";
import { iUserResponsePublic } from "../../contexts/userContext/interfaces";

export const SellerPage = () => {
  const [seller, setSeller] =
    useState<iPaginationResult<iVehicleResponseListWithOneUser> | null>(null);

  const [page, setPage] = useState(1);

  const { sellerId } = useParams();

  const navigate = useNavigate();

  const location = useLocation();
  const localSeller: iUserResponsePublic = location.state?.seller;

  const objLocal = {
    count: 0,
    totalPages: 0,
    previousPage: null,
    nextPage: null,
    data: {
      user: localSeller,
    },
  };

  useEffect(() => {
    if (localSeller && localSeller.id === sellerId) {
      setSeller(objLocal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getSeller = async (sellerId: string | undefined, page: number) => {
      if (!sellerId) {
        navigate("/");
        return;
      }
      try {
        const { data } = await api.get<
          iPaginationResult<iVehicleResponseListWithOneUser>
        >(`vehicles/seller/${sellerId}`, {
          params: {
            page,
          },
        });
        setSeller(data);
      } catch (error) {
        console.error(error);
        if (axios.isAxiosError(error)) {
          if (error.code === "ECONNABORTED") {
            toast.error(
              "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
            );
          } else if (error.response) {
            navigate("/");
            toast.error(error.response?.data.message);
          }
        }
      }
    };
    getSeller(sellerId, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <StyledDivFullPage>
        {!seller ? (
          <>
            <div className="headerHeight"></div>
            <main className="loading">
              <ClipLoader color="#212529" size={"5rem"} />
            </main>
          </>
        ) : (
          <StyledMain>
            <div className="background"></div>
            <div className="toTop">
              <StyledDivUserInformations>
                <div>
                  <UserAvatar
                    username={seller.data.user.name}
                    size="big"
                    color="#4529E6"
                  />
                  <div className="userInformationName">
                    <StyledText
                      tag="h2"
                      $textStyle="heading-6-600"
                      $textColor="grey1"
                    >
                      {seller.data.user.name}
                    </StyledText>
                    <DetailBox value="Anunciante" />
                  </div>
                  <StyledText
                    tag="p"
                    $textStyle="body-1-400"
                    $textColor="grey2"
                  >
                    {seller.data.user.description}
                  </StyledText>
                </div>
              </StyledDivUserInformations>
              <div className="container">
                <StyledText
                  tag="h1"
                  $textStyle="heading-5-600"
                  $textColor="grey1"
                >
                  Anúncios
                </StyledText>
                <Vehicles
                  loadingVehicle={!seller.data.vehicles}
                  length={
                    seller && seller.data.vehicles
                      ? seller.data.vehicles.length
                      : 0
                  }
                  emptyMessage="Este vendedor ainda não possui nenhum anúncio"
                >
                  {seller &&
                    seller.data.vehicles &&
                    seller.data.vehicles.length > 0 &&
                    seller.data.vehicles.map((vehicle, i) => (
                      <VehicleSeller
                        key={i}
                        vehicle={vehicle}
                        user={seller.data.user}
                      />
                    ))}
                </Vehicles>
                <Pagination
                  page={page}
                  setPage={setPage}
                  totalPages={seller ? seller.totalPages : 0}
                />
              </div>
            </div>
          </StyledMain>
        )}
        <Footer />
      </StyledDivFullPage>
    </>
  );
};
