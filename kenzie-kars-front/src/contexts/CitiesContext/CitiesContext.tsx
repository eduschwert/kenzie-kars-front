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
      console.log("STATES DATA", states.data);
      const listOfStates: string[] = [];
      states.data.map((state: iStatesList) => {
        listOfStates.push(state.sigla);
      });
      console.log(listOfStates);
      setStateList(listOfStates);
      setStatesList(states.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log("NEW STATE LIST", stateList);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getCitiesOfState = async (e: any, value: string | null) => {
    console.log("estado selecionado", value);
    console.log("SELECT STATES");
    try {
      if (value !== "0" || !CSSNumericValue) {
        // if (e.target.value !== "0") {
        setDisable(false);
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${value}/distritos?orderBy=nome`
        );
        const res = await response.json();
        console.log(res);
        const listOfCities: string[] = [];
        res.map((city: iCitiesList) => {
          listOfCities.push(city.nome);
        });
        setCityList(listOfCities);
        setCitiesList(res);
        console.log(listOfCities);
      } else {
        setDisable(true);
      }
    } catch (error) {
      console.log(error);
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
