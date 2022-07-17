import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import BasicLoop from "./src/screens/BasicLoop";
import BasicPanGesture from "./src/screens/BasicPanGesture";
import InterpolateScrollView from "./src/screens/InterpolateScrollView/InterpolateScrollView";
import Menu from "./src/screens/Menu";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={gestureHandlerRootHOC(Menu)}
        />
        <Stack.Screen
          name="Basic Loop"
          component={gestureHandlerRootHOC(BasicLoop)}
        />
        <Stack.Screen
          name="Basic Pan Gesture"
          component={gestureHandlerRootHOC(BasicPanGesture)}
        />
        <Stack.Screen
          name="Interpolate Scroll View"
          component={gestureHandlerRootHOC(InterpolateScrollView)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
