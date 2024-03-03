import React from "react";
import User from "../User/User";

const About = () => {
  return (
    <div
      className="text-center p-4 h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <h1 className="text-3xl font-bold">About</h1>
      <User name="Sushmita-Ghosh" />
    </div>
  );
};

export default About;
