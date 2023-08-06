import styled from "styled-components";
import XboxLogo from "../XboxLogo";

const FooterStyle = styled.footer`
    max-width: 312px;
    margin: 70px auto 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media(min-width: 1280px) {
        max-width: 1110px;
        margin: 300px auto 0;
        padding: 84px 0;
    }
`;

const Copyright = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
    color: ${({theme}) => theme.colors.dark20};
    font-size: 12px;
    
    @media(min-width: 1280px) {
        gap: 56px;
        flex-direction: row;
        font-size: unset;
    }
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