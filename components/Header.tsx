import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>ICTU Internship Finder</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: "#2a9df4",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
