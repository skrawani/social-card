import React from 'react'
import { faComment,faRetweet, faHeart, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {IconsContainer } from './icons.styles';

const Icons = () => (
    <IconsContainer>
    <FontAwesomeIcon className="i" icon={faComment} /> 2
    <FontAwesomeIcon className="i" icon={faRetweet} />54
    <FontAwesomeIcon className="i" icon={faHeart} />6
    <FontAwesomeIcon className="i" icon={faEnvelope} />
    </IconsContainer>
)

export default Icons;