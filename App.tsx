import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

// import { Button as RNButton } from "react-native-elements";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>O</Text>
      <Button></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
