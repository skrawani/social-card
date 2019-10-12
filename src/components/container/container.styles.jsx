import styled, { css } from "styled-components";
import Icons from "../icons/icons.component";

const same = css`
  text-align: left;
  margin-left: 10px;
  font-size: 15px;
  margin-bottom: 5px;
  margin-top: 5px;
  position: relative;
`;

export const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  padding: 10px;
`;
export const TopWrapper = styled.div`
  display: flex;
  float: left;
  padding: 0;
`;

export const Name = styled.p`
  font-weight: bold;
  ${same}
  padding-bottom: 8px;
`;

export const Uname = styled.p`
  font-weight: lighter;
  ${same}
`;
export const Date = styled.p`
  font-weight: lighter;
  ${same}
`;

export const Text = styled.p`
  float: left;
  ${same}
`;

export const ContainsImage = styled.div`
  position: relative;
  width: 500px;
  display: inline-block;
  border: 1px solid #cbcbcb;
  img {
    width: 100%;
    max-height: 100%;
  }
  width: 100%;
  /* max-height: 100%; */
`;

export const Iconss = styled(Icons)`
  width: 100%;
  max-height: 100%;
  background-color: red;
`;
