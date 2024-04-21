import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Successappointment({ navigation }) {
  const handleVerify = () => {
    navigation.navigate("Login");
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
          <View style={styles.horizontalLine} />
          <View style={styles.detailsContainer}>
            <Text style={styles.details3}>Appointment type: </Text>
            <Text style={styles.details}>Covid-19 Vaccination</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.details2}>Insurance: </Text>
            <Text style={styles.details1}>Private/Self-payer</Text>
          </View>
          <View style={styles.horizontalLine} />
          <Text style={styles.schedule}>
            Schedule:{" "}
            <Text style={styles.blueText}>Sunday, 12 June 11:00 - 12:00</Text>
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
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
    width: "100%",
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  details3: {
    fontSize: 15,
    fontWeight: "bold",
  },
  details2: {
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 35,
  },
  details1: {
    fontSize: 15,
    paddingHorizontal: 45,
  },
  details: {
    fontSize: 15,
    paddingHorizontal: 25,
  },
  schedule: {
    fontSize: 15,
    textAlign: "center",
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
    height: windowHeight * 0.13,
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
    bottom: windowHeight * 0.04,
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

export default Successappointment;
