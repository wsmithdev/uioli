{/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddCard"
          component={AddCardScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Notifications"
          component={NotificationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Settings"
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer> */}


    import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import AddCardScreen from "./screens/AddCardScreen";
import NotificationScreen from "./screens/NotificationScreen";
import SettingsScreen from "./screens/SettingsScreen";

// Icons
import home from "./assets/home.png";

// Navigation buttons
const NavigationButtons = () => {
  return (
    <Viev>
      <Text>Home</Text>
    </Viev>
  );
};

export default function App() {
  return (
    <SafeAreaView>
      {
        // Navigation buttons...
      }
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: "#0A84FF",
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={home} style={{
          width: 25, height: 25,
          tintColor: "#0A84FF"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: "#0A84FF"
        }}>Home</Text>

      </View>
    </SafeAreaView>
  );
}
