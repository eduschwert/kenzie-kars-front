import { StyledButton, StyledLinkButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { Flex, Flex2, ImageBox, StyledCar, TextBox } from "./style";
import { iCardCarAdminProps } from "./types";
import { useState } from "react";
import { ModalEditCar } from "../modalEditDeleteCar";

export const CardCarAdmin = ({ car }: iCardCarAdminProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const formatteNumber = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <>
      {isOpenModal && (
        <ModalEditCar selectedVehicle={car} toggleModal={toggleModal} />
      )}
      <StyledCar key={car.id}>
        <ImageBox is_active={car.is_active}>
          <div>{car.is_active ? "Ativo" : "Inativo"}</div>
          <img src={car.cover_image} alt="" />
        </ImageBox>
        <TextBox>
          <div>
            <StyledText tag="h4" textStyle="heading-7-600" textColor="grey1">
              {car.model}
            </StyledText>
          </div>
          <div>
            <StyledText tag="p" textStyle="body-2-400" textColor="grey2">
              {car.description}
            </StyledText>
          </div>
          <Flex>
            <div>
              <div>
                <StyledText
                  tag="p"
                  textStyle="heading-7-500"
                  textColor="brand1"
                >
                  {`${car.mileage} km`}
                </StyledText>
              </div>
              <div>
                <StyledText
                  tag="p"
                  textStyle="heading-7-500"
                  textColor="brand1"
                >
                  {car.year}
                </StyledText>
              </div>
            </div>
            <StyledText tag="p" textStyle="heading-7-500" textColor="grey1">
              {formatteNumber(car.price)}
            </StyledText>
          </Flex>
          <Flex2>
            <StyledButton
              onClick={toggleModal}
              buttonStyle="sm"
              buttonColor="outline1"
            >
              Editar
            </StyledButton>
            <StyledLinkButton
              to={`/anouncement/${car.id}`}
              buttonStyle="sm"
              buttonColor="outline1"
            >
              Ver detalhes
            </StyledLinkButton>
          </Flex2>
        </TextBox>
      </StyledCar>
    </>
  );
};
