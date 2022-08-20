import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Colors from "../../constants/Colors";
import instaBlackLogo from "../../../assets/InstaBlack.png";
import Octicons from "react-native-vector-icons/Octicons";
import Fontisto from "react-native-vector-icons/Fontisto";

export default Header = ({ onPressChat = () => {}, onPressAdd = () => {} }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={instaBlackLogo} style={styles.instaLogo} />
      </TouchableOpacity>
      <View style={styles.controls}>
        <TouchableOpacity onPress={onPressAdd}>
          <Octicons
            style={styles.icon}
            name="diff-added"
            size={26}
            color={Colors.black}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressChat}>
          <Fontisto
            style={styles.icon}
            name="messenger"
            size={26}
            color={Colors.black}
          />
          <View style={styles.unread}>
            <Text style={styles.unreadText}>12</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: "row", justifyContent: "space-between" },
  instaLogo: { width: 120, height: 50, resizeMode: "contain" },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: { marginHorizontal: 10 },
  unread: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -5,
    right: 2,
  },
  unreadText: { fontSize: 11, color: Colors.white, fontWeight: "bold" },
});
