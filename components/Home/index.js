import React, { Component } from "react";
import * as RN from "react-native/";
import {
  HomeBackground,
  Title,
  TopStyling,
  BottomStyling,
  ButtonStyled,
} from "./styles";
import { Button, Icon, Text, View } from "native-base";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={{
        uri:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-photo%2Fplanks-with-blurred-store-background_1253-39.jpg&f=1&nofb=1",
      }}
    >
      <TopStyling>
        <Title> Welcome to the bookstore </Title>
      </TopStyling>
      <BottomStyling>
        <Button
          iconLeft
          bordered
          transparent
          dark
          onPress={() => navigation.navigate("ShopList")}
        >
          <Icon name="book" />
          <Text>Take a look at our publishers</Text>
        </Button>
      </BottomStyling>
    </HomeBackground>
  );
};

export default Home;
