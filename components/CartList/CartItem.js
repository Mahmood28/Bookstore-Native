import {
  Body,
  Card,
  CardItem,
  Image,
  ListItem,
  Text,
  Right,
  Left,
  Button,
} from "native-base";
import React, { Component } from "react";
import * as RN from "react-native";
import {
  ProductItemStyled,
  ProductImageStyled,
  ThumbnailStyled,
} from "../ProductList/styles";
import { deleteItemFromCart } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";
import { DeleteIcon } from "./styles";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <ListItem thumbnail>
      <Right>
        <ThumbnailStyled
          square
          source={{
            uri: product.image.includes("localhost")
              ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.intmath.com%2Fblog%2Fwp-content%2Fimages%2F2019%2F08%2Fhumble-pi-comedy-maths-errors2.jpg&f=1&nofb=1"
              : product.image,
          }}
        />
      </Right>
      <Body>
        <Text>{product.name}</Text>
        <Text note>Price: {product.price} BD </Text>
        <Text note>Quantity: {product.quantity} </Text>
        <Text note>Total Price: {product.price * product.quantity} BD</Text>
      </Body>
      <Right>
        <Button
          danger
          transparent
          bordered
          onPress={() => dispatch(deleteItemFromCart(product.id))}
        >
          <DeleteIcon name="trash" />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
