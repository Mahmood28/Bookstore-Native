import React from "react";
import { Button, Icon, Text, View } from "native-base";
import { useNavigation } from "@react-navigation/native";

const CartButton = () => {
  const navigation = useNavigation();
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
      <Icon name="cart" />
    </Button>
  );
};

export default CartButton;
