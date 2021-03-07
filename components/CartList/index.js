import React, { Component } from "react";
import { Alert } from "react-native";
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
      ? dispatch(checkout(items))
      : Alert.alert(
          "Checkout Request",
          "Please log in to proceed with your order.",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "Sign In", onPress: () => navigation.navigate("Signin") },
          ],
          { cancelable: false }
        );
  };

  if (items.length === 0)
    return (
      <View>
        <Text>Your cart is empty.</Text>
      </View>
    );
  const cartList = items
    .map((item) => ({
      ...products.find((product) => item.productId === product.id),
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
