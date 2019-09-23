import React from 'react'
import {  PrevieTexContainer, Span} from "./previewText.styles";

const PreviewText = ({title}) => (
    <PrevieTexContainer>
        <h2>Learning React? Start Small.</h2>
        <p>{`${title}`}</p>
        <Span>skr.xyz</Span>
    </PrevieTexContainer>

) 


export default PreviewText;