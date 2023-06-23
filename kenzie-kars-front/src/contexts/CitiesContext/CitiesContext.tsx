import { useState, createContext, useEffect } from "react";
import { statesAPI } from "../../services/statesApi";
import {
  iCitiesContext,
  iCitiesList,
  iDefaultPropsProvider,
  iStatesList,
} from "./types";

export const CitiesContext = createContext({} as iCitiesContext);

export const CitiesProvider = ({ children }: iDefaultPropsProvider) => {
  const [statesList, setStatesList] = useState<[] | iStatesList[]>([]);
  const [citiesList, setCitiesList] = useState<[] | iCitiesList[]>([]);
  const [selectedState, setSelectedState] = useState<string>("0");
  const [stateList, setStateList] = useState<string[]>([]);
  const [cityList, setCityList] = useState<string[]>([]);
  const [disable, setDisable] = useState<boolean>(true);
  const [errorApi, setErrorApi] = useState<boolean>(false);

  const getStates = async () => {
    try {
      const states = await statesAPI.get("");
      const listOfStates: string[] = [];
      states.data.map((state: iStatesList) => {
        listOfStates.push(state.sigla);
      });
      setStateList(listOfStates);
      setStatesList(states.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getStates();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getCitiesOfState = async (e: any, value: string | null) => {
    try {
      if (value !== "0" || !CSSNumericValue) {
        // if (e.target.value !== "0") {
        setDisable(false);
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${value}/distritos?orderBy=nome`
        );
        const res = await response.json();
        const listOfCities: string[] = [];
        res.map((city: iCitiesList) => {
          listOfCities.push(city.nome);
        });
        setCityList(listOfCities);
        setCitiesList(res);
      } else {
        setDisable(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        getStates,
        statesList,
        citiesList,
        getCitiesOfState,
        setSelectedState,
        disable,
        errorApi,
        setErrorApi,
        stateList,
        cityList,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};
