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
import instagramLogo from "../../assets/InstaWhite.png";
import CustomTextInput from "../../components/Primary/CustomTextInput";
import DefaultButton from "../../components/Primary/DefaultButton";

export default SignUp = () => {
  return (
    <LinearGradient
      colors={["#F2703F", "#E35157", "#CA1D7E"]}
      style={styles.container}
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.1, y: 0.5 }}
    >
      <Image source={instagramLogo} style={styles.logo} />
      <View style={{ width: "90%" }}>
        <CustomTextInput placeholder={"Phone number email or username"} />
        <CustomTextInput placeholder={"Password"} secureTextEntry={true} />
        <DefaultButton text="Sign In" />
      </View>
      <TouchableOpacity
        style={styles.bottomBtn}
        onPress = {()=> navigation.navigate("LogIn")}
      >
        <Text style = {{color:"white"}}>Already have an account ? <Text style = {{fontWeight:"bold"}}>Log In</Text></Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "60%",
    height: 70,
    resizeMode: "contain",
  },
  bottomBtn:{
    position: "absolute",
    bottom: 0,
    borderTopColor: "white",
    borderTopWidth: 1,
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
  }
});
