import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const InternshipDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Internship Details for {id}</Text>
      <Button
        title="Apply"
        onPress={() => navigation.navigate("ApplicationScreen", { id })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
});

export default InternshipDetailsScreen;
