import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");
const LENGTH = width * 0.7;

interface PageProps {
  emoji: string;
  index: number;
  translateX: Animated.SharedValue<number>;
}

const Page = ({ emoji, index, translateX }: PageProps) => {
  const animatedSquareStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    const borderRadius = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, LENGTH / 2, 0],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{ scale }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const moveY = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [width, 0, -width],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-1, 1, -1],
      Extrapolate.CLAMP,
    );
    return {
      opacity,
      transform: [{ translateY: moveY }],
    };
  });
  return (
    <View
      style={[styles.pageContainer, {
        backgroundColor: `rgba(256,0,0,0.${index + 2})`,
      }]}
    >
      <Animated.View style={[styles.square, animatedSquareStyle]} />
      <Animated.Text style={[styles.emoji, animatedTextStyle]}>
        {emoji}
      </Animated.Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  pageContainer: {
    height,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    height: LENGTH,
    width: LENGTH,
    backgroundColor: "rgba(256,0,0,0.4)",
  },
  emoji: {
    position: "absolute",
    fontSize: 70,
  },
});
