import styled from "styled-components"
import joystick from '/assets/image/controle-xbox.svg'

const JoystickStyle = styled.div`
    img {
        max-width: 210px;

        @media(min-width: 1280px) {
            max-width: fit-content;
        }
    }
`;

export default function Joystick () {
    return (
        <JoystickStyle>
            <img src={joystick} alt="Controle do Xbox Series" />
        </JoystickStyle>
    )
}