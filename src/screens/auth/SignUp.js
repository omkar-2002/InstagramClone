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
import { Formik } from "formik";
import * as yup from "yup";
import { auth,createUserWithEmailAndPassword } from "../../utils/firebase";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(4, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default SignUp = () => {
  const onHnadleSignIn = (values)=>{
    console.log("I am in the submit")
    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in 
      console.log('USER SUCCESSFULLY SIGNED IN =>',userCredential)
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    }); 
  }
  return (
    <LinearGradient
      colors={["#F2703F", "#E35157", "#CA1D7E"]}
      style={styles.container}
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.1, y: 0.5 }}
    >
      <Image source={instagramLogo} style={styles.logo} />
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={onHnadleSignIn}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{ width: "90%" }}>
            <CustomTextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values["email"]}
              placeholder={"Phone number email or username"}
              touched={touched["email"]}
              errors={errors["email"]}
            />

            <CustomTextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder={"Password"}
              secureTextEntry={true}
              touched={touched["password"]}
              errors={errors["password"]}
            />

            <DefaultButton onPress={handleSubmit} text="Sign In" />
          </View>
        )}
      </Formik>
      <TouchableOpacity
        style={styles.bottomBtn}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={{ color: "white" }}>
          Already have an account ?{" "}
          <Text style={{ fontWeight: "bold" }}>Log In</Text>
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
