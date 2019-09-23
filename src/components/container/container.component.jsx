import React from 'react'

import Logo from '../logo/logo.component';
import PreviewText from '../previewText/previewText.component'
import Icons from '../icons/icons.component'

import { Name, Uname, Date, Text, ContainsImage, Wrapper,TopWrapper} from './container.styles';


const Container = (props) =>{

    console.log(props);
    const { title, imageUrl } = props;

    return(
    <Wrapper>
        <Logo/>
            <TopWrapper>
                <Name>The Practical Dev</Name>
                <Uname>@ThePracticalDev</Uname>
                <Date>Sept 10</Date>
            </TopWrapper>
                <Text>Learning React ? Start Small.
                {"{ author: @skrawani }"}</Text>
            
            <ContainsImage>
                <img src={`${imageUrl}`}/>
                <PreviewText title={title}/>
            </ContainsImage>
            <Icons/> 
    </Wrapper>    
    )
};
    

export default Container;