import styled from "styled-components";
import Joystick from "../Joystick";
import MidTitle from "../MidTitle";

const ContainerStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    max-width: 312px;
    margin: auto;
    gap: 24px;
    
    @media(min-width: 1280px) {
        max-width: 1110px;
        margin: 300px auto;
        flex-direction: row;
    }
`;

export default function Mid () {
    return (
        <ContainerStyle>
            <MidTitle />
            <Joystick />
        </ContainerStyle>
    )
}