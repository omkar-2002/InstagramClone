import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Header from "../../components/home/Header";

import Colors from "../../constants/Colors";
export default Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:Colors.white
  },
});
