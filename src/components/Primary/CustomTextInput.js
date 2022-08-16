import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default CustomTextInput = ({
  inputStyle,
  multiline,
  numberOfLines,
  onBlur,
  onChangeText,
  value,
  placeholder,
  placeholderTextColor,
  editable,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={[styles.textInput, inputStyle]}
      placeholder={placeholder}
      multiline={multiline}
      numberOfLines={numberOfLines}
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor={placeholderTextColor}
      editable={editable}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    width: "100%",
    height: 50,
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 10,
    marginVertical:10,
  },
});
