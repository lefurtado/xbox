import styled from "styled-components";
import XboxLogo from "../XboxLogo";

const FooterStyle = styled.footer`
    padding: 84px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1110px;
    margin: 300px auto 0;
`;

const Copyright = styled.div`
    display: flex;
    gap: 56px;
    color: ${({theme}) => theme.colors.dark20};
`;

export default function Footer() {
    return (
        <FooterStyle>
            <XboxLogo />
            <Copyright>
                <span>
                    © Microsoft 2022
                </span>
                <span>
                    Todos os direitos reservados
                </span>
            </Copyright>
        </FooterStyle>
    )
}