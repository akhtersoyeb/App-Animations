import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BasicLoop from "./src/screens/BasicLoop";
import BasicPanGesture from "./src/screens/BasicPanGesture";
import Menu from "./src/screens/Menu";

const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <GestureHandlerRootView style={{flex:1}}>
      <BasicPanGesture />
    </GestureHandlerRootView>
    
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Menu} />
    //     <Stack.Screen name="Basic Loop" component={BasicLoop} />
    //     <Stack.Screen name="Basic Pan Gesture" component={BasicPanGesture} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
  );
}
