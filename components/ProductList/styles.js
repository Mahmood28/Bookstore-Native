import styled from "styled-components";
import { Button, Thumbnail } from "native-base";
export const ProductItemStyled = styled.Text`
  color: black;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const ProductImageStyled = styled.Image`
  width: 90px;
  height: 150px;
`;

export const ThumbnailStyled = styled(Thumbnail)`
  width: 60px;
  height: 90px;
`;
