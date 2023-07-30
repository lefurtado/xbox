/* eslint-disable react/prop-types */
import styled from "styled-components"

const CardStyle = styled.div`
    display: flex;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        width: 100%;
        height: 800px;
        background-color: white;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        img {
            margin-bottom: 40px;
        }
    }
`;

export default function GameCard ({ games }) {
    return (
        <CardStyle>
            {games.map(game => (
                <div style={{backgroundImage: `url(${game.image})`}} key={game.id}>
                    <img src={game.logo} alt={game.alt} />
                </div>
            ))}
        </CardStyle>
    )
}