import { Image, ListItem, Text } from "native-base";
import React, { Component } from "react";
import * as RN from "react-native";
import { ShopItemStyled, ShopImageStyled } from "./styles";

const ShopItem = ({ shop, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("ShopDetail", { shop })}>
      <ShopImageStyled
        source={{
          uri: shop.image.includes("localhost")
            ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.intmath.com%2Fblog%2Fwp-content%2Fimages%2F2019%2F08%2Fhumble-pi-comedy-maths-errors2.jpg&f=1&nofb=1"
            : shop.image,
        }}
      />
      <ShopItemStyled>{shop.name} </ShopItemStyled>
    </ListItem>
  );
};

export default ShopItem;
