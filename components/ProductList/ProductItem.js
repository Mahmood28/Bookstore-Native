import {
  ListItem,
  Text,
  Right,
  Button,
  Image,
  Body,
  Left,
  Thumbnail,
} from "native-base";
import React, { Component } from "react";
import * as RN from "react-native";
import {
  ProductItemStyled,
  ProductImageStyled,
  ButtonStyled,
  ThumbnailStyled,
} from "./styles";
import { addItemToCart } from "../../store/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    const newItem = { quantity, id: product.id };
    dispatch(addItemToCart(newItem));
  };

  return (
    <ListItem thumbnail>
      <Left>
        <ThumbnailStyled
          square
          source={{
            uri: product.image.includes("localhost")
              ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.intmath.com%2Fblog%2Fwp-content%2Fimages%2F2019%2F08%2Fhumble-pi-comedy-maths-errors2.jpg&f=1&nofb=1"
              : product.image,
          }}
        />
      </Left>
      <Body>
        <ProductItemStyled>{product.name}</ProductItemStyled>
      </Body>
      <Right>
        <NumericInput
          rounded
          totalHeight={30}
          totalWidth={60}
          initValue={1}
          value={quantity}
          onChange={setQuantity}
        />
        <Button primary onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default ProductItem;
