import React from "react";
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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Cnpsuccess({ navigation }) {
  const handleVerify = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.formContainer}>
          <ImageBackground
            style={styles.background}
            source={require("../assets/checked-success.png")}
          ></ImageBackground>
          <Text style={styles.weJustSent1}>{`Success!`}</Text>
          <Text style={styles.weJustSent}>
            {`
You password has been changed
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
    marginTop: windowHeight * 0.2,
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  weJustSent: {
    fontSize: 15,
    marginTop: -10,
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
    width: 260,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Cnpsuccess;
