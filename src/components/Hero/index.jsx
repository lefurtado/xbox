import styled from 'styled-components'
import xbox from '/assets/image/xbox.svg'

const HeroStyle = styled.section`
    max-width: 312px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    @media(min-width: 1280px) {
        max-width: fit-content;
        gap: 48px;
    }
`;

const TitleStyle = styled.h1`
    color: ${({theme}) => theme.colors.white};
    font-weight: 600;
    font-size: 36px;

    @media(min-width: 1280px){
        font-size: 72px;
    }
`;

const SubtitleStyle = styled.h2`
    color: ${({theme}) => theme.colors.brandColor};
    font-weight: 700;

    @media(min-width: 1280px) {
        font-size: 24px;
    }
`;

const XboxContainer = styled.div`
    background-image: linear-gradient(0deg, #0D0D0D 0%, rgba(13, 13, 13, 0.00) 100%), url(${xbox});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 165px;
    width: 268px;

    @media(min-width: 1280px) {
        min-width: 1110px;
        height: 597px;
    }
`;

const GreenLight = styled.div`
    max-width: 268px;
    height: 165px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(134, 207, 9, 0.26) 20.31%, rgba(155, 240, 11, 0.30) 23.53%, rgba(0, 219, 0, 0.30) 35.42%, rgba(0, 123, 0, 0.30) 40.63%, rgba(0, 132, 0, 0.30) 49.51%);
    opacity: 0.6;
    filter: blur(130px);
    
    @media(min-width: 1280px) {
        max-width: 1110px;
        height: 300px;
    }
`;


export default function Hero () {
    return (
        <HeroStyle>
            <TitleStyle>Xbox Series X</TitleStyle>
            <SubtitleStyle>PEDIDO ANTECIPADO</SubtitleStyle>
            <XboxContainer>
                <GreenLight>
                </GreenLight>
            </XboxContainer>
        </HeroStyle>
    )
}