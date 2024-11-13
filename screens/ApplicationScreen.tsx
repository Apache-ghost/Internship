import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ApplicationScreen = ({ route }) => {
  const { id } = route.params;
  const [status, setStatus] = useState("Pending");

  return (
    <View style={styles.container}>
      <Text>Application for Internship ID: {id}</Text>
      <Text>Status: {status}</Text>
      <Button
        title="Submit Application"
        onPress={() => setStatus("Submitted")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
});

export default ApplicationScreen;
