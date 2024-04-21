import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Cnp({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  const handleVerify = () => {
    if (password.trim() === "" || confirmPassword.trim() === "") {
      alert("Please enter both passwords");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      setPasswordMatchError(true);
      return;
    }

    navigation.navigate("Cnpsuccess");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.logintext}>Create New Password</Text>
        <View style={styles.formContainer}>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[
                styles.passwordInput,
                passwordMatchError && styles.errorInput,
              ]}
              placeholder="New Password"
              placeholderTextColor="#888"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={(text) => setPassword(text)}
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
          <Text style={styles.text}>Must be at least 8 characters</Text>
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
          <Text style={styles.text}>Both password must match</Text>
          {passwordMatchError && (
            <Text style={styles.errorText}>Passwords do not match</Text>
          )}
        </View>
      </View>
      {/* Card box at the bottom */}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight * 0.1,
    marginBottom: windowHeight * 0.1,
  },
  logintext: {
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: windowHeight * 0.05,
  },
  text: {
    fontSize: windowWidth * 0.03,
    textAlign: "left",
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
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default Cnp;
