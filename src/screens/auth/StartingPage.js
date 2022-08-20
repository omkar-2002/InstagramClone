import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import instagramLogo from "../../../assets/InstaWhite.png";
import DefaultButton from "../../components/Primary/DefaultButton";
export default StartingPage = ({navigation}) => {
  return (
    <LinearGradient
      colors={["#F2703F", "#E35157", "#CA1D7E"]}
      style={styles.container}
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.1, y: 0.5 }}
    >
      <Image source={instagramLogo} style={styles.logo} />
      <DefaultButton onPress={()=> navigation.navigate("SignUp")} text="Create a new account" />
      <DefaultButton onPress={()=> navigation.navigate("LogIn")} text="Log in" outline />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: { width: "70%", height: 70, resizeMode: "contain",marginBottom:"30%" },
});
