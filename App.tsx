import React from "react";
import AuthNavigation from "./app/navigation/AuthNavigation";
import {NavigationContainer} from "@react-navigation/native";

export default function App({navigation}: any) {
  return (
      <NavigationContainer>
        <AuthNavigation></AuthNavigation>
      </NavigationContainer>
  );
}
