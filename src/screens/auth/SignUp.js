import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useEffect } from "react";
import LinearGradient from "react-native-linear-gradient";
import instagramLogo from "../../../assets/InstaWhite.png";
import CustomTextInput from "../../components/Primary/CustomTextInput";
import DefaultButton from "../../components/Primary/DefaultButton";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import Toast from "react-native-root-toast";
import { signup } from "../../store/auth/operation";
import { isAuthLoadingSelector,authStatusSelector } from "../../store/auth/selector";
import { removeauthStatus } from "../../store/auth/slice";

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
  const dispatch = useDispatch();
  const isAuthLoading = useSelector(isAuthLoadingSelector);
  const authStatus = useSelector(isAuthLoadingSelector);

  useEffect(() => {
    if (authStatus !== '') {
      Toast.show(authStatus, {
        duration: Toast.durations.SHORT,
        shadow: true,
        animation: true,
      });
      dispatch(removeauthStatus())
    }
  }, [authStatus]);

  const onSubmit = (values) => {
    dispatch(signup({ email: values.email, password: values.password }));
  };

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
        onSubmit={onSubmit}
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

            {isAuthLoading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <DefaultButton onPress={handleSubmit} text="Sign In" />
            )}
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
