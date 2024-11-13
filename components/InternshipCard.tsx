import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const InternshipCard = ({ internship, onApply }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{internship.title}</Text>
    <Text>{internship.description}</Text>
    <Button title="Apply" onPress={() => onApply(internship.id)} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default InternshipCard;
