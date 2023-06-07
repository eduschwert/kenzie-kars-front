import { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
import { StyledText } from "../../styles/tipography";
import { CardCar } from "../cardCar";
import { StyledCarList, StyledNoCarsFound } from "./style";

export const CarList = () => {
  const { filteredProducts, setFilteredProducts } = useContext(ProductContext);
  //   const isNotEmpty = filteredProducts.length;

  console.log("%BBBBB", filteredProducts);

  const isNotEmpty = true;

  return (
    <>
      {isNotEmpty ? (
        <StyledCarList>
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          {/* {filteredProducts.map((car, index) => (
            <CardCar
              key={index}
              //   id={car.id}
              //   brand={car.brand}
              //   model={car.model}
              //   price={car.price}
              //   year={car.year}
              //   fuel={car.fuel}
              //   description{car.description}
              //   image={car.img}
            ></CardCar>
          ))} */}
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
