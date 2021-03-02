import React from "react";
import { View, Text } from "react-native";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import Home from "../Home";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "orange",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="ShopList"
        component={ShopList}
        options={{ title: "Select one of our publishers" }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: `${shop.name} Books`,
          };
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
