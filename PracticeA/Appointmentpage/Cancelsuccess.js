import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Cancelsuccess({ navigation }) {
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "Home") {
      navigation.navigate("homepage");
    }
  };
  const handleButtonPress1 = (buttonName1) => {
    setActiveButton1(buttonName1);
    if (buttonName1 === "AAppointmentpage") {
      navigation.navigate("AAppointmentpage");
    }
  };
  const handleVerify = () => {
    navigation.navigate("homepage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.formContainer}>
          <ImageBackground
            style={styles.background}
            source={require("../assets/happy-emoji.png")}
          ></ImageBackground>
          <Text style={styles.weJustSent1}>{`Success!`}</Text>
          <Text style={styles.weJustSent}>
            {`
Your appointment has been successfully cancelled. \n We hope to have the opportunity to assist you again in the future.
`}
          </Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={handleVerify}
            style={styles.verifyButtonContainer}
          >
            <Text style={styles.verifyButton}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            activeButton === "Home" ? styles.activeButton : null,
          ]}
          onPress={() => handleButtonPress("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            activeButton1 === "AAppointmentpage" ? styles.activeButton1 : null,
          ]}
          onPress={() => handleButtonPress1("AAppointmentpage")}
        >
          <Text style={styles.buttonText}>My Appointments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: windowHeight * 0.1,
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  weJustSent: {
    fontSize: 15,
    marginTop: 20,
    textAlign: "center",
    alignSelf: "stretch",
  },
  weJustSent1: {
    fontSize: 24,
    marginTop: 20,
    textAlign: "center",
    alignSelf: "stretch",
    fontWeight: "bold",
  },
  inputStyle: {
    fontSize: 32,
    color: "black",
    textAlign: "center",
  },

  cardContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingBottom: 0,
  },
  card: {
    width: windowWidth,
    height: windowHeight * 0.22,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: {
        elevation: 5,
      },
    }),
    borderTopWidth: 3,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRightColor: "rgba(0, 0, 0, 0.2)",
    borderLeftColor: "rgba(0, 0, 0, 0.2)",
    borderTopColor: "rgba(0, 0, 0, 0.2)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  verifyButtonContainer: {
    position: "absolute",
    bottom: windowHeight * 0.125,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  verifyButton: {
    width: 293,
    height: 50,
    backgroundColor: "#FFB200",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 14,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  background: {
    width: windowWidth * 0.62,
    height: windowHeight * 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
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
  },
  buttonText: {
    fontSize: 16,
  },
  activeButton: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});

export default Cancelsuccess;
