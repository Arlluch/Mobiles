import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

function Bottombutton() {
  const navigation = useNavigation();
  const route = useRoute();

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const isHomeActive = route.name === "homepage";
  const isAppointmentActive = route.name === "AAppointmentpage";

  return (
    <View style={styles.bottomButtonsContainer}>
      <TouchableOpacity
        style={[styles.bottomButton, isHomeActive ? styles.activeButton : null]}
        onPress={() => handleButtonPress("homepage")}
      >
        <Image
          source={require("../assets/homebottom.png")}
          style={styles.icon}
        />
        <Text
          style={[styles.buttonText, isHomeActive ? styles.activeText : null]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.bottomButton,
          isAppointmentActive ? styles.activeButton : null,
        ]}
        onPress={() => handleButtonPress("AAppointmentpage")}
      >
        <Image
          source={require("../assets/myappointment.png")}
          style={styles.icon}
        />
        <Text
          style={[
            styles.buttonText,
            isAppointmentActive ? styles.activeText : null,
          ]}
        >
          My Appointments
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomButtonsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 3,
    borderTopColor: "rgba(0, 0, 0, 0.2)",
  },
  bottomButton: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 16,
  },
  activeButton: {
    backgroundColor: "#FFB200",
  },
  activeText: {
    color: "#fff",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default Bottombutton;
