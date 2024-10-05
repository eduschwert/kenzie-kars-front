import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      brand1: string;
      brand2: string;
      brand3: string;
      brand4: string;
      grey0: string;
      grey1: string;
      grey2: string;
      grey3: string;
      grey4: string;
      grey5: string;
      grey6: string;
      grey7: string;
      grey8: string;
      grey9: string;
      grey10: string;
      whiteFixed: string;
      alert1: string;
      alert2: string;
      alert3: string;
      success1: string;
      success2: string;
      success3: string;
    };
    fonts: {
      lexend: string;
      inter: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      round: string;
    };
  }
}
