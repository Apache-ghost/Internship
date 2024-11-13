import React from "react";
import { View } from "react-native";
import InternshipList from "../components/InternshipList";
import MainLayout from "../app/_layout";

const HomeScreen = ({ navigation }) => {
  const internships = [
    {
      id: 1,
      title: "Software Developer Intern",
      description: "Join us to develop cutting-edge software.",
    },
    // Add more internship objects as needed
  ];

  return (
    <MainLayout>
      <InternshipList
        internships={internships}
        onApply={(id) => navigation.navigate("ApplicationScreen", { id })}
      />
    </MainLayout>
  );
};

export default HomeScreen;
