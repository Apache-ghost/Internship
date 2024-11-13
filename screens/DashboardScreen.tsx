import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MainLayout from "../app/_layout";

const DashboardScreen = ({ navigation }) => (
  <MainLayout>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Dashboard</Text>
      <Text style={styles.message}>
        Here you can view and manage your internship applications.
      </Text>
      <Button
        title="View Internships"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  </MainLayout>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  message: { fontSize: 16, textAlign: "center", marginBottom: 20 },
});

export default DashboardScreen;
