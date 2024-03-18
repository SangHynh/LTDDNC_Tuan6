import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState, useRef } from "react";

export default function Screen1() {
  const fly = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "5deg"],
  });

  const translateXInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: [50, -100],
  });

  const handleRotate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotate, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(rotate, {
          toValue: -1,
          duration: 2000,
          useNativeDriver: false,
        })
      ])
    ).start();
  };

  const handleTranslateX = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(translateX, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
        })
      ])
    ).start();
  };

  const handleFly = () => {
    Animated.loop(
      Animated.timing(fly, {
        toValue: -900,
        duration: 7000,
        useNativeDriver: false,
      })
    ).start();
  };
  const handleParallel = () => {
    Animated.parallel([handleFly(), handleRotate()]).start();
  };

  useEffect(() => {
    // handleFly();
    // handleRotate();
    handleParallel();
  }, []);

  return (
    <SafeAreaView style={{ justifyContent: "space-around" }}>
      <Animated.View
        style={{
          transform: [{ translateY: fly }, { rotate: rotateInterpolate }],
        }}
      >
        <Image
          source={{uri:'https://t4.ftcdn.net/jpg/05/42/44/71/360_F_542447189_xsrfExX7cPRRqCKx1SkkCDWIAByqsozd.jpg'}}
          style={{
            height: 100,
            width: 100,
          }}
        ></Image>
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateY: fly }, { rotate: rotateInterpolate }],
        }}
      >
        <Image
          source={{uri:'https://t4.ftcdn.net/jpg/05/42/44/71/360_F_542447189_xsrfExX7cPRRqCKx1SkkCDWIAByqsozd.jpg'}}
          style={{
            height: 100,
            width: 100,
          }}
        ></Image>
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateY: fly }, { rotate: rotateInterpolate }],
        }}
      >
        <Image
          source={{uri:'https://t4.ftcdn.net/jpg/05/42/44/71/360_F_542447189_xsrfExX7cPRRqCKx1SkkCDWIAByqsozd.jpg'}}
          style={{
            height: 100,
            width: 100,
          }}
        ></Image>
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateY: fly }, { rotate: rotateInterpolate }],
        }}
      >
        <Image
          source={{uri:'https://t4.ftcdn.net/jpg/05/42/44/71/360_F_542447189_xsrfExX7cPRRqCKx1SkkCDWIAByqsozd.jpg'}}
          style={{
            height: 100,
            width: 100,
          }}
        ></Image>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});