import React, { Component } from "react";
import * as RN from "react-native";
import { Container, Content, List, Text } from "native-base";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return (
    <Container>
      <Content>
        <Text> {productList} </Text>
      </Content>
    </Container>
  );
};

export default ProductList;
