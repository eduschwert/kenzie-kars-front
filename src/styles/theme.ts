import { DefaultTheme } from "styled-components";

export const mainTheme: DefaultTheme = {
  colors: {
    brand1: "#4529e6",
    brand2: "#5126ea",
    brand3: "#b0a6f0",
    brand4: "#edeafd",

    grey0: "#0b0d0d",
    grey1: "#212529",
    grey2: "#495057",
    grey3: "#868e96",
    grey4: "#adb5bd",
    grey5: "#ced4da",
    grey6: "#dee2e6",
    grey7: "#e9ecef",
    grey8: "#f1f3f5",
    grey9: "#f8f9fa",
    grey10: "#fdfdfd",

    whiteFixed: "#ffffff",

    alert1: "#cd2b31",
    alert2: "#fdd8d8",
    alert3: "#ffe5e5",

    success1: "#18794e",
    success2: "#ccebd7",
    success3: "#ddf3e4",
  },
  fonts: {
    lexend: "'Lexend', sans-serif",
    inter: "'Inter', sans-serif",
  },
  borderRadius: {
    small: ".4rem",
    medium: ".8rem",
    round: "50%",
  },
};

export type Theme = typeof mainTheme;
