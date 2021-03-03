import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import * as RN from "react-native";
import { Container, Content, List, Text, View, Button } from "native-base";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import {
  AuthTitle,
  AuthContainer,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "./styles";
import { signin } from "../../store/actions/authActions";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  //   const { register, handleSubmit, setValue } = useForm();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    dispatch(signin(user, navigation));
  };

  //   useEffect(() => {
  //     register("username");
  //     register("password");
  //   }, [register]);

  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <Text>Username</Text>
      <AuthTextInput
        autoCompleteType="username"
        type="text"
        placeholder="Username"
        placeholderTextColor="grey"
        textContentType="username"
        onChangeText={(username) => setUser({ ...user, username })}
        value={user.username}
        name="username"
        rules={{ required: true }}
      />
      <Text>Password</Text>

      <AuthTextInput
        autoCompleteType="password"
        // keyboardType="visible-password"
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
        // textContentType="password"
        value={user.password}
        name="password"
        rules={{ required: true }}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Submit</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.push("Signup")}>
        Click here to register!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signin;
