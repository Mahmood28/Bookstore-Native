import { useForm, Controller } from "react-hook-form";
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
  Error,
} from "./styles";
import { signup } from "../../store/actions/authActions";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const { handleSubmit, control, errors } = useForm();
  const usernameInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const firstNameInputRef = React.useRef();
  const lastNameInputRef = React.useRef();
  const emailInputRef = React.useRef();

  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const onSubmit = () => {
    dispatch(signup(user, navigation));
  };

  console.log(errors);
  console.log(user);

  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>
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
      {errors.username && <Error> Username is required </Error>}

      <Text>Password</Text>
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
          minLength: 8,
        }}
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
      {errors.password && (
        <AuthOther> Please include the following in your password: </AuthOther>
      )}
      {errors.password && !user.password.match(/^(?=.*[a-z])/g) && (
        <Error> At least 1 Lower Case Letter </Error>
      )}
      {errors.password && !user.password.match(/^(?=.*[A-Z])/g) && (
        <Error> At least 1 Upper Case Letter </Error>
      )}
      {errors.password && !user.password.match(/^(?=.*\d)/g) && (
        <Error> At least 1 Number </Error>
      )}
      {errors.password && !user.password.match(/^(?=.*[@$!%*?&])/g) && (
        <Error> At least 1 Special Character </Error>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <Error> Passwords must be least 8 characters long </Error>
      )}
      {errors.password && user.password.includes(user.username) && (
        <Error> Password must not contain your username </Error>
      )}
      <Text>Email</Text>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        onFocus={() => {
          emailInputRef.current.focus();
        }}
        defaultValue=""
        render={(props) => (
          <AuthTextInput
            {...props}
            // autoCompleteType="username"
            // type="text"
            placeholder="Email"
            placeholderTextColor="grey"
            textContentType="emailAddress"
            onChangeText={(email) => setUser({ ...user, email })}
            value={user.email}
            ref={emailInputRef}
          />
        )}
      />
      {errors.email && <Error note> Email is required </Error>}

      <Text>First Name</Text>
      <Controller
        name="firstName"
        control={control}
        rules={{ required: true }}
        onFocus={() => {
          firstNameInputRef.current.focus();
        }}
        defaultValue=""
        render={(props) => (
          <AuthTextInput
            {...props}
            // autoCompleteType="firstName"
            // type="text"
            placeholder="First Name"
            placeholderTextColor="grey"
            textContentType="givenName"
            onChangeText={(firstName) => setUser({ ...user, firstName })}
            value={user.firstName}
            ref={firstNameInputRef}
          />
        )}
      />

      {errors.firstName && <Error note> First Name is required </Error>}

      <Text>Last Name</Text>
      <Controller
        name="lastName"
        control={control}
        rules={{ required: true }}
        onFocus={() => {
          lastNameInputRef.current.focus();
        }}
        defaultValue=""
        render={(props) => (
          <AuthTextInput
            {...props}
            // autoCompleteType="username"
            type="text"
            placeholder="Last Name"
            placeholderTextColor="grey"
            textContentType="familyName"
            onChangeText={(lastName) => setUser({ ...user, lastName })}
            value={user.lastName}
            ref={lastNameInputRef}
          />
        )}
      />
      {errors.lastName && <Error note> Last Name is required </Error>}

      <AuthButton onPress={handleSubmit(onSubmit)}>
        <AuthButtonText>Submit</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.replace("Signin")}>
        Already a User? Click here to sign in!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signup;
