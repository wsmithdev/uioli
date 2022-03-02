import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import profile from "../assets/profile.png";
// Tab ICons...
import home from "../assets/home.png";
import add from "../assets/plus.png";
import notifications from "../assets/bell.png";
import settings from "../assets/settings.png";
import logout from "../assets/logout.png";
// Menu
import menu from "../assets/menu.png";
import close from "../assets/close.png";

// Screens
import HomeScreen from "../screens/Home";
import AddCardScreen from "../screens/Add";
import NotificationScreen from "../screens/Notifications";
import SettingsScreen from "../screens/Settings";

// Imports
//import TabButton from "../components/buttons/NavBarButton";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

// Photo
import photo from "../assets/photo.jpg";

const Main = ({ route }) => {
   // Get user data
  const getUserData = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // setCards(docSnap.data().cards);
      let userInfo = docSnap.data()
      setUserInfo(userInfo)
    }
  };

  // Get user data
  useEffect(() => {
      const uid = route.params.uid
      console.warn("Call made to Firestore")
      console.log(uid)
      setUserUid(uid)
      getUserData(uid)
    
  }, [])
  
  // State
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const [userInfo, setUserInfo] = useState("")
  const [userUid, setUserUid] = useState("")

  // Animimations
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  // Navigation
  const navigation = useNavigation();

  // Log out
  const logoutUser = () => {
    navigation.navigate("Welcome");
    console.log("logging out");
  };

  // Render screens
  const RenderScreens = () => {
    // Home screen
    if (currentTab === "Home") {
      return <HomeScreen userInfo={userInfo}/>;
    }
    // Add card screen
    if (currentTab === "Add Card") {
      return <AddCardScreen userInfo={userInfo} uid={userUid}/>;
    }
    // Notification screen
    if (currentTab === "Notifications") {
      return <NotificationScreen userInfo={userInfo}/>;
    }
    // Settings screen
    if (currentTab === "Settings") {
      return <SettingsScreen userInfo={userInfo}/>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", paddingLeft: 15 }}>
      

        <View style={{ flexGrow: 1, marginTop: 180 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Add Card", add)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}
        </View>

        <View onPress={logoutUser}>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout, logoutUser)}
        </View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "#0A84FF",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            <Image
              source={showMenu ? close : menu}
              style={{
                width: 20,
                height: 20,
                tintColor: "black",
                marginTop: 40,
              }}
            ></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "black",
              paddingTop: 20,
            }}
          >
            {currentTab}
          </Text>
          {RenderScreens()}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Main;

const TabButton = (currentTab, setCurrentTab, title, image, logoutUser) => {
  return (
    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        logoutUser()
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? '#0A84FF' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "white" : "black"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "white" : "black"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}