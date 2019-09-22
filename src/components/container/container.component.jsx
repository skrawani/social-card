import React from 'react'

import Logo from '../logo/logo.component';
import PreviewText from '../previewText/previewText.component'
import Icons from '../icons/icons.component'

import { Name, Uname, Date, Text, ContainsImage, Wrapper,TopWrapper} from './container.styles';


const Container = () =>(
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
                <img src="https://miro.medium.com/max/3200/0*z0WlyaPfVlWpCAS2.png" />
                <PreviewText/>
            </ContainsImage>
            <Icons/>

            
            
        
    </Wrapper>
    
);

export default Container;