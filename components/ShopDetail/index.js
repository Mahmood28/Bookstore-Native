import React from "react";
import * as RN from "react-native";
import { Spinner } from "native-base";
import ProductList from "../ProductList";
import { useSelector } from "react-redux";
import { ShopDetailImage, ShopDetailTitle, ShopDetailWrapper } from "./styles";

const ShopDetail = ({ navigation, route }) => {
  const { shopLoading } = useSelector((state) => state.shopReducer);
  const { products, loading } = useSelector((state) => state.productReducer);
  const { shop } = route.params;

  if (loading || shopLoading) return <Spinner color="blue" />;
  const shopProducts = shop.products.map((product) =>
    products.find((_product) => _product.id === product.id)
  );
  return (
    <>
      <ShopDetailWrapper>
        <ShopDetailImage source={{ uri: shop.image }} />
        <ShopDetailTitle>{shop.name}</ShopDetailTitle>
      </ShopDetailWrapper>
      <ProductList products={shopProducts} />
    </>
  );
};

export default ShopDetail;
