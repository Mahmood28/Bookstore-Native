import {
  Body,
  Card,
  CardItem,
  Image,
  ListItem,
  Text,
  Right,
  Left,
} from "native-base";
import React, { Component } from "react";
import * as RN from "react-native";
import { ProductItemStyled, ProductImageStyled } from "../ProductList/styles";

const CartItem = ({ product, quantity }) => {
  return (
    <ListItem>
      <Card>
        <CardItem>
          <ProductItemStyled>{product.name}</ProductItemStyled>
        </CardItem>
        <CardItem cardBody>
          <Right>
            <ProductImageStyled
              source={{
                uri: product.image.includes("localhost")
                  ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.intmath.com%2Fblog%2Fwp-content%2Fimages%2F2019%2F08%2Fhumble-pi-comedy-maths-errors2.jpg&f=1&nofb=1"
                  : product.image,
              }}
            />
          </Right>
        </CardItem>
        <ProductItemStyled> Price: {product.price} BD </ProductItemStyled>
        <ProductItemStyled> Quantity: {quantity} </ProductItemStyled>
        <ProductItemStyled>
          Total Price: {product.price * quantity} BD
        </ProductItemStyled>
      </Card>
    </ListItem>
  );
};

export default CartItem;