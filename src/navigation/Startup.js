import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartingPage from "../screens/auth/StartingPage";
import LogIn from "../screens/auth/LogIn";
import SignUp from "../screens/auth/SignUp";
import Home from "../screens/home/Home";
import { useSelector } from "react-redux";
import {
  isAuthLoadingSelector,
  isAuthenticatedSelector,
  authStatusSelector,
  authUserSelector,
} from "../../src/store/auth/selector";

const Stack = createNativeStackNavigator();

export default Startup = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  console.log("IsAuthenticated =>", isAuthenticated);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <>
            <Stack.Screen
              name="StartingPage"
              component={StartingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
