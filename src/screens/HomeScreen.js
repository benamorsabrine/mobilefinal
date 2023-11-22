import React, { useRef, useState, useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors, parameters } from "../global/styles";
import { Button, Icon } from "react-native-elements";
const SCREEN_WIDTH = Dimensions.get("window").width;
import * as Location from "expo-location";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  const { userToken, userInfo } = useContext(AuthContext);
  //console.log("token",userToken)

  const [latlng, setLatLng] = useState({});

  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.status === "granted") {
      const permission = await askPermission();
      return permission;
    }
    return true;
  };

  const askPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    return permission.status === "granted";
  };

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLatLng({ latitude: latitude, longitude: longitude });
    } catch (err) {}
  };
  const _map = useRef(1);
  useEffect(() => {
    checkPermission();
    getLocation(),
      //console.log(latlng)
      [];
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Poppins-Light",
            marginTop: 270,
            marginLeft: 80,
            marginBottom: 15,
          }}
        >
          Welcome {userInfo.role}
        </Text>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon type="material-community" name="menu" size={40} />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 150,
            height: 35,
            padding: 8,
            paddingLeft: 45,
            backgroundColor: "#cc1d45",
            borderRadius: 15,
            flexDirection: "row", // Add flexDirection to align icon and text horizontally
          }}
          onPress={() => navigation.navigate("Notification")}
        >
          <Text style={{ color: "white", marginRight: 5, fontSize: 17 }}>
            Start{" "}
          </Text>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 50,
    padding: 9,
    paddingTop: parameters.statusBarHeight,
  },
  map: {
    height: 150,
    marginVertical: 0,
    width: SCREEN_WIDTH * 0.92,
  },
  location: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
});
