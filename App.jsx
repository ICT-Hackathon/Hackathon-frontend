import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Quiz from "./pages/Quiz";
import Dictionary from "./pages/Dictionary";
import Main from "./pages/Main";
import CameraPage from "./pages/CameraPage";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{headerShown: false}}>
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Quiz" component={Quiz} />
        <Tab.Screen name="Camera" component={CameraPage} options={{tabBarStyle: {display: 'none'}}}/>
        <Tab.Screen name="Dictionary" component={Dictionary} />
      </Tab.Navigator>
    </NavigationContainer>
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
