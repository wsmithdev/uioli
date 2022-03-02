import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";

// Screens
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/Home";
import AddCardScreen from "./screens/AddCardScreen";
import NotificationScreen from "./screens/Notifications";
import SettingsScreen from "./screens/SettingsScreen";
import { useState, useContext } from "react";
import Home from "./screens/Home";
import Main from "./screens/Main"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}























// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image, logout) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          // Do your Stuff...
          logout();
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? "#5359D1" : "white",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const RenderScreens = (currentTab) => {
  // Home screen
  if (currentTab === "Home") {
    return <Home />;
  }

  // Add card screen
  if (currentTab === "Add Card") {
    return <Add />;
  }

  // Notification screen
  if (currentTab === "Notifications") {
    return <Notifications />;
  }

  // Settings screen
  if (currentTab === "Settings") {
    return <Settings />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5359D1",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
