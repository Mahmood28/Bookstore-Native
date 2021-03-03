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
import { signup } from "../../store/actions/authActions";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  //   const { register, handleSubmit, setValue } = useForm();
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstNAme: "",
    lastName: "",
    email: "",
  });
  const handleSubmit = () => {
    dispatch(signup(user, navigation));
  };

  //   useEffect(() => {
  //     register("username");
  //     register("password");
  //   }, [register]);

  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>
      <Text>Username</Text>
      <AuthTextInput
        // autoCompleteType="username"
        // type="text"
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
        // autoCompleteType="password"
        keyboardType="visible-password"
        textContentType="newPassword"
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
        textContentType="password"
        value={user.password}
        name="password"
        rules={{ required: true }}
      />
      <Text>Email</Text>
      <AuthTextInput
        // autoCompleteType="username"
        // type="text"
        placeholder="Email"
        placeholderTextColor="grey"
        textContentType="emailAddress"
        onChangeText={(email) => setUser({ ...user, email })}
        value={user.email}
        name="email"
        rules={{ required: true }}
      />
      <Text>First Name</Text>
      <AuthTextInput
        // autoCompleteType="firstName"
        // type="text"
        placeholder="First Name"
        placeholderTextColor="grey"
        textContentType="givenName"
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        value={user.firstName}
        name="firstName"
        rules={{ required: true }}
      />
      <Text>Last Name</Text>
      <AuthTextInput
        // autoCompleteType="username"
        // type="text"
        placeholder="Last Name"
        placeholderTextColor="grey"
        textContentType="familyName"
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        value={user.lastName}
        name="lastName"
        rules={{ required: true }}
      />

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Submit</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.push("Signin")}>
        Already a User? Click here to sign in!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signup;
