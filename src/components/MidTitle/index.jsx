import styled from "styled-components"

const ArticleStyle = styled.article`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 64px;
        font-weight: 600;
        color: ${({theme}) => theme.colors.brandColor};
        line-height: 130%;
    }
    .secondary {
        color: white;
    }

    p {
        font-size: 24px;
        font-weight: 500;
        max-width: 570px;
        color: ${({theme}) => theme.colors.dark30};
        line-height: 170%;
        margin-top: 40px;
    }
`;

export default function MidTitle () {
    return (
        <ArticleStyle>
            <h2>Desempenho</h2> <h2 className="secondary">aperfeiçoado</h2>
            <p>O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.</p>
        </ArticleStyle>
    )
}