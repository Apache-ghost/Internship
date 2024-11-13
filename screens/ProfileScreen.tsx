import React from "react";
import ProfileCard from "../components/ProfileCard";

const ProfileScreen = () => {
  const profile = {
    name: "John Doe",
    email: "john.doe@ictuniversity.edu.cm",
    matricule: "ICTU20222020",
  };

  return <ProfileCard profile={profile} />;
};

export default ProfileScreen;
