import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Editpass({ navigation }) {
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);

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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const handleVerify = () => {
    if (
      currentPassword.trim() === "" ||
      newPassword.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("Please enter all passwords");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      setPasswordMatchError(true);
      return;
    }

    navigation.navigate("Cnpsuccess");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.logintext}>
            At least 8 characters with uppercase and lowercase letter
          </Text>
          <View style={styles.formContainer}>
            <Text style={styles.text}>Current Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={[
                  styles.passwordInput,
                  passwordMatchError && styles.errorInput,
                ]}
                placeholder="Current Password"
                placeholderTextColor="#888"
                secureTextEntry={!passwordVisible}
                value={currentPassword}
                onChangeText={(text) => setCurrentPassword(text)}
              />
              <TouchableOpacity
                style={styles.eyePasswordButton}
                onPress={togglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={passwordVisible ? faEyeSlash : faEye}
                  style={styles.eyePasswordIcon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>New Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={[
                  styles.passwordInput,
                  passwordMatchError && styles.errorInput,
                ]}
                placeholder="New Password"
                placeholderTextColor="#888"
                secureTextEntry={!passwordVisible1}
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
              />
              <TouchableOpacity
                style={styles.eyePasswordButton}
                onPress={togglePasswordVisibility1}
              >
                <FontAwesomeIcon
                  icon={passwordVisible1 ? faEyeSlash : faEye}
                  style={styles.eyePasswordIcon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>Confirm Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={[
                  styles.passwordInput,
                  passwordMatchError && styles.errorInput,
                ]}
                placeholder="Confirm New Password"
                placeholderTextColor="#888"
                secureTextEntry={!passwordVisible1}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
              <TouchableOpacity
                style={styles.eyePasswordButton}
                onPress={togglePasswordVisibility1}
              >
                <FontAwesomeIcon
                  icon={passwordVisible1 ? faEyeSlash : faEye}
                  style={styles.eyePasswordIcon}
                />
              </TouchableOpacity>
            </View>
            {passwordMatchError && (
              <Text style={styles.errorText}>
                New password and confirm password do not match
              </Text>
            )}
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.verifyButtonContainer}
              onPress={handleVerify}
            >
              <Text style={styles.verifyButton}>Save Changes</Text>
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
              activeButton1 === "AAppointmentpage"
                ? styles.activeButton1
                : null,
            ]}
            onPress={() => handleButtonPress1("AAppointmentpage")}
          >
            <Text style={styles.buttonText}>My Appointments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: windowHeight * 0.4,
  },
  logintext: {
    fontSize: windowWidth * 0.03,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: windowHeight * 0.05,
  },
  text: {
    fontSize: windowWidth * 0.05,
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: windowHeight * 0.02,
  },
  formContainer: {
    width: 312,
    alignItems: "left",
    marginBottom: 20,
  },
  passwordInputContainer: {
    position: "relative",
    width: 312,
  },
  passwordInput: {
    width: 312,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  eyePasswordButton: {
    position: "absolute",
    right: 10,
    bottom: 25,
    zIndex: 1,
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

export default Editpass;
