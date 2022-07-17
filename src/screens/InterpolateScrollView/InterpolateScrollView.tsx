import { StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Page from "./Page";

const EMOJIS = ["🍔", "🍕", "🍤", "🥗"];

const InterpolateScrollView = () => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    // console.log(event.contentOffset.x);
    translateX.value = event.contentOffset.x;
  });
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      style={styles.container}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {EMOJIS.map((emoji, index) => {
        return (
          <Page
            key={index.toString()}
            emoji={emoji}
            index={index}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

export default InterpolateScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
});
