import { StyleSheet, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const LENGTH = 75.0;
const CIRCLE_RADIUS = LENGTH * 2;

type ContextType = {
  translateX: number;
  translateY: number;
};

const BasicPanGesture = () => {
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = positionX.value;
      context.translateY = positionY.value;
    },
    onActive: (event, context) => {
      positionX.value = event.translationX + context.translateX;
      positionY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      const distance = Math.sqrt(positionX.value ** 2 + positionY.value ** 2);
      if (distance < CIRCLE_RADIUS + LENGTH / 2) {
        positionX.value = withSpring(0);
        positionY.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, animatedStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default BasicPanGesture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: LENGTH,
    height: LENGTH,
    backgroundColor: "rgba(256, 0, 0, 0.5)",
    borderRadius: 20,
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: CIRCLE_RADIUS,
    borderWidth: 1,
    borderColor: "rgba(256, 0, 0, 0.5)",
  },
});
