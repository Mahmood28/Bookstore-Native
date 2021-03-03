import instance from "./instance";
import decode from "jwt-decode";
import { SET_USER } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setUser = (token) => {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      console.log("user set");
      dispatch({
        type: SET_USER,
        payload: decode(token),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const signup = (newUser, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("signup", newUser);
      if (res) {
        console.log("AuthStore -> signin -> res.data.token", res.data.token);
        alert("signed up");
        navigation.push("CartList");
      }
      dispatch(setUser(res.data.token));
    } catch (error) {
      console.error(error);
    }
  };
};

export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("signin", userData);
      if (res) {
        console.log("AuthStore -> signin -> res.data.token", res.data.token);
        alert("signed in");
        navigation.push("CartList");
      }
      dispatch(setUser(res.data.token));
    } catch (error) {
      console.error(error);
    }
  };
};

export const signout = async () => {
  try {
    await AsyncStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
    dispatch({
      type: SET_USER,
      payload: null,
    });
  } catch (error) {
    console.log(error);
  }
};

export const checkForToken = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("myToken");
    console.log("saved token", token);
    if (token) {
      console.log(token);
      const user = decode(token);
      dispatch(user.exp > Date.now() ? setUser(token) : signout());
    }
  } catch (error) {
    console.log(error);
  }
};
