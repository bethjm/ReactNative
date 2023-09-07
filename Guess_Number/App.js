import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  let pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  //this has use start on start game screen
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  //if the user enters a number then we switch to the game screen
  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        ResizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb52f",
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
