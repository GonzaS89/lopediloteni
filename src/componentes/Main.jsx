import React from "react";
import Constants from "expo-constants";
import { View, Text } from "react-native";
import RepositoriosLista from "./RepositoriosLista.jsx";
import AppBar from "./AppBar.jsx";
import { Switch, Route } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <RepositoriosLista />
    </View>
  );
};

export default Main;
