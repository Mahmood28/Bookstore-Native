import React, { Component } from "react";
import * as RN from "react-native";
import { Container, Content, List, Text, View } from "native-base";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return (
    <Content>
      <Container>
        <List>{productList}</List>
      </Container>
    </Content>
  );
};

export default ProductList;
