import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Quiz from "./pages/Quiz";
import Dictionary from "./pages/Dictionary";
import Camera from "pages/Camera";
import Main from "./pages/main";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Main">
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Quiz" component={Quiz} />
          <Tab.Screen name="Camera" component={Camera} />
          <Tab.Screen name="Dictionary" component={Dictionary} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
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
