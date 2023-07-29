import styled from "styled-components"
import xboxLogo from '/assets/image/logo-xbox.svg'

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1110px;
    margin: 56px auto;
`;

const NavStyle = styled.nav`
    font-size: 17px;
    font-weight: 600;

    ul {
        display: flex;
        gap: 48px;
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.white};
    }
`;

const ButtonStyle = styled.button`
    background-color: ${({theme}) => theme.colors.brandColor};
    border-style: none;
    color: ${({theme}) => theme.colors.dark10};
    font-size: 15px;
    font-weight: 700;
    padding: 21px 30px;
    cursor: pointer;
`;

export default function Header () {
    return (
        <HeaderStyle>
            <div>
                <a href=""><img src={xboxLogo} alt="Logo do xbox" /></a>
            </div>
            <NavStyle>
                <ul>
                    <li><a href="">VISÃO GERAL</a></li>
                    <li><a href="">JOGOS</a></li>
                    <li><a href="">GALERIA</a></li>
                    <li><a href="">UNBOX</a></li>
                </ul>
            </NavStyle>
            <ButtonStyle>VER DISPONIBILIDADE</ButtonStyle>
        </HeaderStyle>
    )
}