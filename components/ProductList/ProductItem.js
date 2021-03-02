import { ListItem, Text, Right, Button, Image, Body } from "native-base";
import React, { Component } from "react";
import * as RN from "react-native";
import { ProductItemStyled, ProductImageStyled } from "./styles";

const ProductItem = ({ product }) => {
  return (
    <ListItem>
      <ProductImageStyled
        source={{
          uri: product.image.includes("localhost")
            ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.intmath.com%2Fblog%2Fwp-content%2Fimages%2F2019%2F08%2Fhumble-pi-comedy-maths-errors2.jpg&f=1&nofb=1"
            : product.image,
        }}
      />
      <Body>
        <Text> {product.name} </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default ProductItem;
