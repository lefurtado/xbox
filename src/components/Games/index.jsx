import styled from "styled-components"
import games from '../../../games.json';
import GameCard from "../GameCard";

const GamesSection = styled.section`
    margin-top: 90px;
`;

export default function Games () {
    return (
        <GamesSection>
            <GameCard
                games={games}
            />
        </GamesSection>
    )
}