import React from "react";
import { View, Text } from "react-native";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../CartList";
import Home from "../Home";
import { createStackNavigator } from "@react-navigation/stack";
import CartButton from "../buttons/CartButton";

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
        options={{
          title: "Select one of our publishers",
          headerRight: () => <CartButton />,
        }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: `${shop.name} Books`,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen name="CartList" component={CartList} />
    </Navigator>
  );
};

export default RootNavigator;
