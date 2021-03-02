import React, { Component } from "react";
import * as RN from "react-native";
import { Container, Header, Content, Spinner, List } from "native-base";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";
import Loading from "../Loading";

const ShopList = ({ navigation }) => {
  const { shopLoading, shops } = useSelector((state) => state.shopReducer);

  if (shopLoading) return <Loading />;

  const shopList = shops.map((shop) => (
    <ShopItem key={shop.id} shop={shop} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{shopList}</List>
    </Content>
  );
};

export default ShopList;
