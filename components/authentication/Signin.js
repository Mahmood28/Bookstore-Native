import { useForm, Controller } from "react-hook-form";
import React, { useEffect } from "react";
import * as rn from "react-native";
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
  Error,
} from "./styles";
import { signin } from "../../store/actions/authActions";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const { handleSubmit, control, errors } = useForm();
  const usernameInputRef = React.useRef();
  const passwordInputRef = React.useRef();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const onSubmit = () => {
    dispatch(signin(user, navigation));
  };

  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <Text>Username</Text>
      <Controller
        name="username"
        control={control}
        rules={{ required: true }}
        onFocus={() => {
          usernameInputRef.current.focus();
        }}
        defaultValue=""
        render={(props) => (
          <AuthTextInput
            {...props}
            autoCompleteType="username"
            autoCapitalize="none"
            type="text"
            placeholder="Username"
            placeholderTextColor="grey"
            textContentType="username"
            onChangeText={(username) => setUser({ ...user, username })}
            value={user.username}
            ref={usernameInputRef}
          />
        )}
      />
      {errors.username && <Error note> Username is required </Error>}

      <Text>Password</Text>

      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        onFocus={() => {
          passwordInputRef.current.focus();
        }}
        render={(props) => (
          <AuthTextInput
            {...props}
            autoCompleteType="password"
            keyboardType="visible-password"
            autoCapitalize="none"
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
            textContentType="password"
            value={user.password}
            ref={passwordInputRef}
          />
        )}
        defaultValue=""
      />
      {errors.password && <Error note> Password is required </Error>}

      <AuthButton onPress={handleSubmit(onSubmit)}>
        <AuthButtonText>Submit</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.replace("Signup")}>
        Click here to register!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signin;
