import styled from 'styled-components'
import xboxLogo from '/assets/image/logo-xbox.svg'

const LogoStyle = styled.img`
    width: 70px;
    @media(min-width: 1280px) {
        width: auto;
    }
`;

export default function XboxLogo() {
    return (
        <div>
            <a href=""><LogoStyle src={xboxLogo} alt="Logo do xbox" /></a>
        </div>
    )
}