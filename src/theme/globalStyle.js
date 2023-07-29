import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Inter', sans-serif;
        background-color: ${({theme}) => theme.colors.dark10};
    }
`;

export default GlobalStyle;