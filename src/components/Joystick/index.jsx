import styled from "styled-components"
import joystick from '/assets/image/controle-xbox.svg'

const JoystickStyle = styled.div`

`;

export default function Joystick () {
    return (
        <JoystickStyle>
            <img src={joystick} alt="Controle do Xbox Series" />
        </JoystickStyle>
    )
}