import React from "react";
import { FlatList } from "react-native";
import InternshipCard from "./InternshipCard";

const InternshipList = ({ internships, onApply }) => (
  <FlatList
    data={internships}
    renderItem={({ item }) => (
      <InternshipCard internship={item} onApply={onApply} />
    )}
    keyExtractor={(item) => item.id.toString()}
  />
);

export default InternshipList;
