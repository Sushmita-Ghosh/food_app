import React from "react";
import User from "../User/User";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="text-center py-16  h-screen bg-cover bg-center bg-gray-50">
      <h1 className="text-3xl font-bold bg-gradient-to-t from-green-500 to-green-900 bg-clip-text text-transparent">
        Profile
      </h1>
      <User name={user.name} avatar={user.avatar} email={user.email} />
    </div>
  );
};

export default Profile;
