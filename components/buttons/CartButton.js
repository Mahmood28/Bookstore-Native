import React from "react";
import { Button, Icon, Text, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { StyledIcon } from "../../styles";
import { useSelector } from "react-redux";
import { CartTextStyled } from "./styles";
import { useState } from "react";
const CartButton = () => {
  const navigation = useNavigation();
  const { items } = useSelector((state) => state.cartReducer);

  let totalQuantity =
    items.length === 0
      ? ""
      : items.map((item) => item.quantity).reduce((a, b) => a + b);

  return (
    <Button
      iconLeft
      bordered
      transparent
      dark
      onPress={() => {
        navigation.navigate("CartList");
      }}
    >
      <StyledIcon name="cart" />
      <CartTextStyled>{totalQuantity}</CartTextStyled>
    </Button>
  );
};

export default CartButton;
