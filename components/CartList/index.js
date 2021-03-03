import React, { Component } from "react";
import * as RN from "react-native";
import {
  Container,
  Header,
  Content,
  Spinner,
  List,
  View,
  Text,
} from "native-base";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Loading from "../Loading";
import { CheckOutButton } from "./styles";
import { checkout } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";

const CartList = ({ navigation }) => {
  const { items } = useSelector((state) => state.cartReducer);
  const { user } = useSelector((state) => state.authReducer);
  const { products, loading } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  if (loading) return <Loading />;
  const handlePress = () => {
    user
      ? dispatch(checkout())
      : alert("Please log in to proceed with your order.");
    navigation.push(user ? "Home" : "Signin");
  };

  if (items.length === 0)
    return (
      <View>
        <Text>Your cart is empty.</Text>
      </View>
    );
  const cartList = items
    .map((item) => ({
      ...products.find((product) => item.id === product.id),
      quantity: item.quantity,
    }))
    .map((product) => <CartItem key={product.id} product={product} />);
  return (
    <Content>
      <Container>
        <List>{cartList}</List>
        <CheckOutButton onPress={handlePress}>
          <Text>CheckOut</Text>
        </CheckOutButton>
      </Container>
    </Content>
  );
};

export default CartList;
