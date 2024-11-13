// LoginScreen.tsx
import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <TextInput placeholder="Email" style={styles.input} />
    <TextInput placeholder="Password" style={styles.input} secureTextEntry />
    <Button
      title="Login"
      onPress={() => navigation.navigate("DashboardScreen")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderBottomWidth: 1, marginBottom: 12 },
});

export default LoginScreen;
