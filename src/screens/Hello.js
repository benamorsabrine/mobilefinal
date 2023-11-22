import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Hello = () => {
  const navigation = useNavigation();
  const [heurecloture, setHeureCloture] = useState(null);

  const handleCloturerPress = () => {
    const currentDate = new Date();
    const formattedTime = currentDate.toLocaleTimeString();

    // Store the time in heurecloture
    setHeureCloture(formattedTime);

    // Naviguer vers le composant ScannerQR lorsque le bouton "Cloturer" est pressé
    navigation.navigate("ScannerQR");
  };

  return (
    <View>
      <Text
        style={{ color: "red", marginTop: 340, marginLeft: 110, fontSize: 20 }}
      >
        Started Mission !
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleCloturerPress}>
        <Text style={{ color: "white" }}>Cloturer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
    width: 200,
    marginLeft: 90,
  },
});

export default Hello;
