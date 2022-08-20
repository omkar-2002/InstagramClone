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
  touched,
  errors,
}) => {
  const hasError = errors && touched;
  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          inputStyle,
          { borderWidth: 2, borderColor: hasError ? "red" : "white" },
        ]}
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
      {hasError && <Text style={styles.errorText}>{errors}</Text>}
    </View>
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
    marginVertical: 10,
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginTop: 5,
    marginLeft: 5,
  },
});
