import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;       
}
button{
  cursor: pointer;
}

a{
  color: unset;
  text-decoration: none;
  cursor: pointer;
}
ul, ol, li{
  list-style: none;
}
html {
  scroll-behavior: smooth;
}
:root {
  --color-brand1: #4529e6;
  --color-brand2: #5126ea;
  --color-brand3: #b0a6f0;
  --color-brand4: #f6f6f6;
        
  --color-grey0: #0b0d0d;
  --color-grey1: #212529;
  --color-grey2: #495057;
  --color-grey3: #868e96;
  --color-grey4: #adb5bd;
  --color-grey5: #ced4da;
  --color-grey6: #dee2e6;
  --color-grey7: #e9ecef;
  --color-grey8: #f1f3f5;
  --color-grey9: #f8f9fa;
  --color-grey10: #fdfdfd;
  --white-fixed: #ffffff;

  --color-alert1: #cd2b31;
  --color-alert2: #fdd8d8;
  --color-alert3: #ffe5e5;
  
  --color-success1: #18794e;
  --color-success2: #ccebd7;
  --color-success3: #ddf3e4;
    
  --font-size-32: 2rem;
  --font-size-30: 1.875rem;
  --font-size-28: 1.75rem;
  --font-size-24: 1.5rem;
  --font-size-20: 1.25rem;
  --font-size-18: 1.125rem;
  --font-size-16: 1rem;
  --font-size-14: .875rem;
  --font-size-12: .75rem;

  --radius-1: 8px;
  --radius-2: 4px;
  --radius-50:50%;
}
`;
