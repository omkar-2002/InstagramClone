import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default DefaultButton = ({
  text = "",
  containerStyle = {},
  textStyle = {},
  outline = false,
  isDisabled = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.DefaultButton,
        containerStyle,
        {
          backgroundColor: outline ? "transparent" : "#2196F3",
          borderWidth: outline ? 1 : 0,
          borderColor: "white",
        },
      ]}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  DefaultButton: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: { fontSize: 15, fontWeight: "bold", color: "white" },
});
