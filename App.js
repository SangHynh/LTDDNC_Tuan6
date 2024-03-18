import { StatusBar } from "expo-status-bar";
import {
  Animated,
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Balloon from "./components/Balloon";
import { useEffect, useRef } from "react";

export default function App() {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Balloon></Balloon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
