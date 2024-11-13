import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const SignupScreen = ({ navigation }) => (
  <View style={styles.container}>
    <TextInput placeholder="Full Name" style={styles.input} />
    <TextInput
      placeholder="Email"
      style={styles.input}
      keyboardType="email-address"
    />
    <TextInput placeholder="Password" style={styles.input} secureTextEntry />
    <Button
      title="Sign Up"
      onPress={() => navigation.navigate("DashboardScreen")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  input: { borderBottomWidth: 1, marginBottom: 12, padding: 8 },
});

export default SignupScreen;
