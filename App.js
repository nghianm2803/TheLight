import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Image, Switch } from "react-native";
import Constants from "expo-constants";
import lightOff from "./assets/lightoff.jpg";
import lightUp from "./assets/lightup.jpg";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Image source={isEnabled ? lightUp : lightOff} style={styles.image} />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    resizeMode: "contain",
    maxWidth: "100%",
    maxHeight: windowHeight - 100,
  },
});
