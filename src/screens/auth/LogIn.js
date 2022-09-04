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
import CustomTextInput from "../../components/Primary/CustomTextInput";
import DefaultButton from "../../components/Primary/DefaultButton";
import firestore from '@react-native-firebase/firestore';
import { Formik } from "formik";
import * as yup from "yup";
const initialValues = {
  email: "",
  password: "",
};

export default LogIn = ({ navigation }) => {
  
  return (
    <LinearGradient
      colors={["#F2703F", "#E35157", "#CA1D7E"]}
      style={styles.container}
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.1, y: 0.5 }}
    >
      <Image source={instagramLogo} style={styles.logo} />
      <Formik initialValues={initialValues}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ width: "90%" }}>
            <CustomTextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder={"Phone number email or username"}
            />
            <CustomTextInput placeholder={"Password"} secureTextEntry={true} />
            <DefaultButton
              text="Log In"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        )}
      </Formik>
      <TouchableOpacity
        style={styles.bottomBtn}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={{ color: "white" }}>
          Don't have an account ?
          <Text style={{ fontWeight: "bold" }}> Sign Up</Text>
        </Text>
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
  bottomBtn: {
    position: "absolute",
    bottom: 0,
    borderTopColor: "white",
    borderTopWidth: 1,
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
  },
});
