// import { SelectChangeEvent } from "@mui/material";

export interface iDefaultPropsProvider {
  children: React.ReactNode;
}

// export interface iCitiesContext {
//   getStates: () => void;
//   statesList: [] | iStatesList[];
//   citiesList: [] | iCitiesList[];
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   selectState: (e: any) => void;
//   disable: boolean;
//   errorApi: boolean;
//   setErrorApi: React.Dispatch<React.SetStateAction<boolean>>;
//   // servicesCategories: iCategoriesList[];
// }

export interface iStatesList {
  id: number;
  nome: string;
  sigla: string;
  região: {
    id: number;
    nome: string;
    sigla: string;
  };
}

export interface iCitiesList {
  id: number;
  nome: string;
  municipio: {
    id: number;
    nome: string;
    microrregiao: {
      id: number;
      nome: string;
      mesorregiao: {
        id: number;
        nome: string;
        UF: {
          id: number;
          nome: string;
          sigla: string;
          regiao: {
            id: number;
            nome: string;
            sigla: string;
          };
        };
      };
    };
    regiaoImediata: {
      id: number;
      nome: string;
      regiaoIntermediaria: {
        id: number;
        nome: string;
        UF: {
          id: number;
          nome: string;
          sigla: string;
          regiao: {
            id: number;
            nome: string;
            sigla: string;
          };
        };
      };
    };
  };
}

// interface iCategoriesList {
//   image: string;
//   name: string;
// }
export interface iCitiesContext {
  getStates: () => void;
  statesList: [] | iStatesList[];
  citiesList: [] | iCitiesList[];
  getCitiesOfState: (e: any, value: string | null) => void;
  setSelectedState: React.Dispatch<React.SetStateAction<string>>;
  disable: boolean;
  errorApi: boolean;
  setErrorApi: React.Dispatch<React.SetStateAction<boolean>>;
  stateList: string[];
  cityList: string[];
}
