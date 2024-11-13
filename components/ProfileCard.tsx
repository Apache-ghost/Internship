import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileCard = ({ profile }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{profile.name}</Text>
    <Text>{profile.email}</Text>
    <Text>{profile.matricule}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileCard;
