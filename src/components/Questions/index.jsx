import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown } from "react-icons/fa6";

const AccordionContainer = styled.div`
    max-width: 1110px;
    margin: 0 auto;
`;

const BackgroundStyle = styled.div`
    background-color: ${({theme}) => theme.colors.dark10};
    color: ${({theme}) => theme.colors.white};
`;

const TextStyle = styled.div`
    margin-left: 10px;
    color: ${({theme}) => theme.colors.dark30};
`;

const FontStyle = styled.span`
    font-family: 'Inter';
    font-size: 24px;
`

const FontStyleConteudo = styled.span`
    font-size: 18px;
`;

const BorderStyle = styled.div`
    border-bottom: 2px solid ${({theme}) => theme.colors.dark20};
`;

const TitleStyle = styled.h2`
    margin: 300px 0 60px 0;
    color: ${({theme}) => theme.colors.white};
    font-size: 48px;

    span {
        color: ${({theme}) => theme.colors.brandColor};
    }
`;

export default function Questions() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
            <AccordionContainer>
                <TitleStyle><span>Perguntas</span> frequentes</TitleStyle>
                <BorderStyle>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <BackgroundStyle>
                            <AccordionSummary
                                expandIcon={<FaChevronDown color='#9BF00B' />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0 }}>
                                    <FontStyle>
                                        Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?
                                    </FontStyle>
                                </Typography>
                            </AccordionSummary>
                        </BackgroundStyle>
                        <BackgroundStyle>
                            <AccordionDetails>
                                <TextStyle>
                                    <Typography>
                                        <FontStyleConteudo>
                                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                            Aliquam eget maximus est, id dignissim quam.
                                        </FontStyleConteudo>
                                    </Typography>
                                </TextStyle>
                            </AccordionDetails>
                        </BackgroundStyle>
                    </Accordion>
                </BorderStyle>
                <BorderStyle>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <BackgroundStyle>
                            <AccordionSummary
                                expandIcon={<FaChevronDown color='#9BF00B' />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0 }}>
                                    <FontStyle>
                                        O que está incluído no Xbox Series X?
                                    </FontStyle>
                                </Typography>
                            </AccordionSummary>
                        </BackgroundStyle>
                        <BackgroundStyle>
                            <AccordionDetails>
                                <TextStyle>
                                    <Typography>
                                        <FontStyleConteudo>
                                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                            Aliquam eget maximus est, id dignissim quam.
                                        </FontStyleConteudo>
                                    </Typography>
                                </TextStyle>
                            </AccordionDetails>
                        </BackgroundStyle>
                    </Accordion>
                </BorderStyle>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <BackgroundStyle>
                        <AccordionSummary
                            expandIcon={<FaChevronDown color='#9BF00B' />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0 }}>
                                <FontStyle>
                                    Como sei se minha TV é compatível com 4K?
                                </FontStyle>
                            </Typography>
                        </AccordionSummary>
                    </BackgroundStyle>
                    <BackgroundStyle>
                        <AccordionDetails>
                            <TextStyle>
                                <Typography>
                                    <FontStyleConteudo>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </FontStyleConteudo>
                                </Typography>
                            </TextStyle>
                        </AccordionDetails>
                    </BackgroundStyle>
                </Accordion>
            </AccordionContainer>
    )
}