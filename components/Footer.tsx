import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2024 ICT University</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    backgroundColor: "#2a9df4",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 12,
  },
});

export default Footer;
