import React from "react";

import Logo from "../logo/logo.component";
import PreviewText from "../previewText/previewText.component";
// import Icons from "../icons/icons.component";

import {
  Name,
  Uname,
  Date,
  Text,
  ContainsImage,
  Wrapper,
  TopWrapper,
  Iconss
} from "./container.styles";

const Container = props => {
  console.log(props);
  const { person } = props;
  console.log(person);

  return (
    <Wrapper>
      <Logo />
      <TopWrapper>
        <Name>{person.name}</Name>
        <Uname>{`@${person.name}`}</Uname>
        <Date>{person.birth_year}</Date>
      </TopWrapper>
      <Text>
        Learning React ? Start Small.
        {"{ author: @skrawani }"}
      </Text>

      <ContainsImage>
        <img src={`https://robohash.org/${person.name}`} />
        <PreviewText title={person.gender} />
      </ContainsImage>
      <Iconss />
    </Wrapper>
  );
};

export default Container;
