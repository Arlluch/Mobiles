import React, { useState } from "react";
import {
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height; //To fit in any device

function Loginsms({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hasText, setHasText] = useState(false);

  const handleVerify = () => {
    if (phoneNumber.trim() !== "") {
      navigation.navigate("Verifylogin");
    } else {
      alert("Please enter a valid phone number");
    }
  };

  const handleChangeText = (text) => {
    setPhoneNumber(text);
    setHasText(text.trim() !== "");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <ImageBackground style={styles.background}>
            <Image
              style={styles.logo}
              source={require("../assets/Logo.png")}
              resizeMode="contain"
            />
          </ImageBackground>

          <Text style={styles.weJustSent}>
            {`We just sent a SMS to [phone number]. Please enter the 6-digit code we provided to activate your account.`}
          </Text>
          <View style={[styles.formContainer, hasText && styles.hasText]}>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile number"
              placeholderTextColor="#888"
              onChangeText={handleChangeText}
            />
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.verifyButtonContainer}
              onPress={handleVerify}
            >
              <Text style={styles.verifyButton}>Send OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: windowHeight * 0.05,
  },
  background: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8 * 0.5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weJustSent: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 200,
    borderColor: "#ccc",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  hasText: {
    borderBottomColor: "#ccc",
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
});

export default Loginsms;
