import { StyledText } from "../../styles/tipography";
import { CardCar } from "../cardCar";
import { StyledCarList, StyledNoCarsFound } from "./style";
import { iCardCarProps } from "./types";

export const CarList = ({ cars }: iCardCarProps) => {
  const isNotEmpty = cars?.length;

  return (
    <>
      {isNotEmpty ? (
        <StyledCarList>
          {cars.map((car) => (
            <CardCar
              key={car.id}
              id={car.id}
              brand={car.brand}
              model={car.model}
              price={car.price}
              year={car.year}
              fuel={car.fuel}
              description={car.description}
              mileage={car.mileage}
              cover_image={car.cover_image}
              color={car.color}
              fipe_price={car.fipe_price}
              is_good_buy={car.is_good_buy}
              seller={car.seller}
              is_active={car.is_active}
              images={car.images}
            />
          ))}
        </StyledCarList>
      ) : (
        <StyledNoCarsFound>
          <StyledText tag="span" textStyle={"heading-5-500"} textColor="black">
            Nenhum veículo encontrado para essa seleção
          </StyledText>
        </StyledNoCarsFound>
      )}
    </>
  );
};
