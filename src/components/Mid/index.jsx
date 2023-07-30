import styled from "styled-components";
import Joystick from "../Joystick";
import MidTitle from "../MidTitle";

const ContainerStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1110px;
    margin: 300px auto;
`;

export default function Mid () {
    return (
        <ContainerStyle>
            <MidTitle />
            <Joystick />
        </ContainerStyle>
    )
}