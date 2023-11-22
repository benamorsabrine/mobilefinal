import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfilScreen";
import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";

import ReclamationScreen from "../screens/ReclamationScreen";
import Fiche from "../screens/FicheScreen";
import MapScreen from "../screens/MapScreen";
import Rapports from "../screens/Rapports";
import ModalContent from "../screens/ModalContent";
import FormContent from "../screens/FormContent";
// import ScannerQR from "../screens/ScannerQR";
import ScannerQR from "../screens/ScannerQR";
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="Reclamations" component={ReclamationScreen} />
      <Stack.Screen name="Fiche" component={Fiche} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Modal" component={ModalContent} />
      <Stack.Screen name="Form" component={FormContent} />
      <Stack.Screen name="ScannerQr" component={ScannerQR} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#fee2e2" },
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name="Home1"
        component={HomeStack}
        options={({ route }) => ({
          //tabBarStyle :{display:'none'},
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={"white"} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={"white"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={"white"} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
