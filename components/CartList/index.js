import React, { Component } from "react";
import * as RN from "react-native";
import { Container, Header, Content, Spinner, List } from "native-base";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Loading from "../Loading";

const CartList = ({ navigation }) => {
  const { cart, cartLoading } = useSelector((state) => state.cartReducer);
  const { products, loading } = useSelector((state) => state.productReducer);

  if (loading || cartLoading) return <Loading />;

  const cartProducts = cart.map((item) => ({
    ...products.find((product) => item.id === product.id),
    quantity: item.quantity,
  }));

  const cartList = cartProducts.map((product) => (
    <CartItem key={product.id} product={product} quantity={product.quantity} />
  ));
  return (
    <Content>
      <List>{cartList}</List>
    </Content>
  );
};

export default CartList;
