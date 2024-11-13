import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout: React.FC = ({ children }) => (
  <View style={styles.container}>
    <Header />
    <ScrollView style={styles.content}>{children}</ScrollView>
    <Footer />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  content: { flex: 1, padding: 10 },
});

export default MainLayout;
