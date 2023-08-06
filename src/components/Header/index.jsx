import styled from "styled-components"
import XboxLogo from "../XboxLogo";

const HeaderStyle = styled.header`
    max-width: 312px;
    margin: 24px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media(min-width: 1280px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        max-width: 1110px;
        margin: 56px auto;
    }
`;

const NavStyle = styled.nav`
    font-size: 8px;
    font-weight: 600;

    ul {
        display: flex;
        gap: 25px;
    }

    a {
        background-color: ${({theme}) => theme.colors.dark20};
        border-radius: 50px;
        padding: 6px 10px;
        text-decoration: none;
        color: ${({theme}) => theme.colors.white};
    }

    @media(min-width: 1280px) {
        font-size: 17px;
    
        ul {
            gap: 48px;
        }
    
        a {
            background: none;
        }
    }
`;

const ButtonStyle = styled.button`
    background-color: ${({theme}) => theme.colors.brandColor};
    border-style: none;
    color: ${({theme}) => theme.colors.dark10};
    padding: 21px 30px;
    cursor: pointer;
    font-weight: 700;
    width: 100%;
    margin-top: 50px;
    
    @media(min-width: 1280px) {
        font-size: 15px;
        width: auto;
        margin-top: 0;
    }
`;

export default function Header () {
    return (
        <HeaderStyle>
            <XboxLogo />
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