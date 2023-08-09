import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

import Quiz from "./pages/Quiz";
import Dictionary from "./pages/Dictionary";
import Main from "./pages/Main";
import CameraPage from "./pages/CameraPage";
import Community from "./pages/Commuinty";
import Survey from "./pages/Survey";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 60 },
        tabBarItemStyle: { paddingTop: 6, paddingBottom: 10 },
      }}
    >
      <Tab.Screen
        name="홈"
        component={Main}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={24} color="black" />
            ) : (
              <Ionicons name="home" size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="퀴즈"
        component={Quiz}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="cards" size={24} color="black" />
            ) : (
              <MaterialCommunityIcons name="cards" size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="카메라"
        component={CameraPage}
        options={({ navigation }) => ({
          tabBarStyle: { display: "none" },
          tabBarIcon: () => (
            <Pressable
              style={styles.cameraButton}
              onPress={() => navigation.navigate("카메라")}
            >
              <Entypo name="camera" size={24} color="white" />
            </Pressable>
          ),
          tabBarLabel: () => null,
        })}
      />
      <Tab.Screen
        name="사전"
        component={Dictionary}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="book" size={24} color="black" />
            ) : (
              <FontAwesome5 name="book" size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="커뮤니티"
        component={Community}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="people-alt" size={24} color="black" />
            ) : (
              <MaterialIcons name="people-alt" size={24} color="gray" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Survey" component={Survey} />
        <Stack.Screen name="Tabs" component={BottomTabs} />
      </Stack.Navigator>
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
  cameraButton: {
    backgroundColor: "#3084F2",
    borderRadius: 50,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});
