import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import BottomButtons from "../Bottom/Bottombutton";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Reschedulesuccess({ navigation }) {
 
  const handleVerify = () => {
    navigation.navigate("homepage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.formContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/Doctor.png")}
            />
          </View>
          <Text style={styles.doctorName}>Doctor's Name</Text>
          <Text style={styles.specialization}>Specialization</Text>

          <Text style={styles.weJustSent1}>{`THANK YOU!`}</Text>
          <Text style={styles.weJustSent}>
            {`
Your appointment has been successfully re-scheduled. \n We look forward to seeing you at the new date and time.
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
            <Text style={styles.verifyButton}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomButtons/>
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
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  imageContainer: {
    borderRadius: windowWidth * 0.325,
    overflow: "hidden",
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#242760",
    marginBottom: 5,
  },
  specialization: {
    fontSize: 18,
    color: "#544C4C",
    marginBottom: 10,
  },

  weJustSent: {
    fontSize: 15,
    marginTop: 20,
    textAlign: "center",
    alignSelf: "stretch",
  },
  weJustSent1: {
    fontSize: 36,
    marginTop: 20,
    textAlign: "center",
    alignSelf: "stretch",
    fontWeight: "bold",
  },

  blueText: {
    color: "#4894FE",
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
    width: windowWidth * 0.65,
    height: windowHeight * 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: windowWidth * 0.65,
    height: windowWidth * 0.65,
  },
  
});

export default Reschedulesuccess;
