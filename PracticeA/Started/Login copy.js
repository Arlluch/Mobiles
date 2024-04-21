import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectUsername, setIncorrectUsername] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleLogin = () => {
    if (username === "admin" && password === "123") {
      setIncorrectUsername(false);
      setIncorrectPassword(false);
      navigation.navigate("homepage");
    } else {
      setUsername(username.trim() === "" ? "" : username);
      setPassword(password.trim() === "" ? "" : password);
      setIncorrectUsername(username.trim() === "");
      setIncorrectPassword(
        password.trim() === "" || username !== "admin" || password !== "123"
      );
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View style={styles.contentContainer}>
        <ImageBackground style={styles.background}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/Logo.png")}
          />
        </ImageBackground>
        <View style={styles.formContainer}>
          <TextInput
            style={[styles.input, incorrectUsername && styles.inputError]}
            placeholder="Phone number or Email"
            placeholderTextColor="#888"
            onChangeText={setUsername}
            value={username}
          />
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[
                styles.passwordInput,
                incorrectPassword && styles.inputError,
              ]}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry={!passwordVisible}
              onChangeText={setPassword}
              value={password}
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

          {incorrectPassword && (
            <Text style={styles.errorMessage}>
              Incorrect username or password
            </Text>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate("Fps1")}
            style={styles.forgotPasswordButton}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        {/* Register and login button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {/* Horizontal line with "or" text */}
        <View style={styles.horizontalLineContainer}>
          <View style={styles.horizontalLine} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.horizontalLine} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Loginsms")}
          style={styles.loginsmsButton}
        >
          <Text style={styles.buttonsmsText}>SMS Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={[styles.registerButton, { marginBottom: windowHeight * 0.1 }]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8 * 0.8,
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  inputError: {
    borderColor: "red",
  },
  input: {
    width: 312,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  passwordInputContainer: {
    position: "relative",
    width: 312,
  },
  passwordInput: {
    width: 312,
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  eyePasswordButton: {
    position: "absolute",
    right: 10,
    bottom: 13,
    zIndex: 1,
  },
  loginButton: {
    width: 312,
    height: 50,
    backgroundColor: "#FFB200",
    borderRadius: 100,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
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
  loginsmsButton: {
    width: 312,
    height: 50,
    backgroundColor: "#E7EDFD",
    borderRadius: 100,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
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
  registerButton: {
    width: 312,
    height: 50,
    backgroundColor: "#FFC43C",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
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
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  buttonsmsText: {
    color: "#33363F",
    fontSize: 14,
  },
  horizontalLineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  horizontalLine: {
    width: 130,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    color: "#000",
    fontSize: 16,
  },
  forgotPasswordButton: {
    alignSelf: "center",
  },
  forgotPasswordText: {
    color: "#2F89FC",
    fontSize: 14,
  },
  eyePasswordIcon: {
    position: "absolute",
    right: 10,
    bottom: 13,
    zIndex: 1,
  },
  errorMessage: {
    color: "red",
    alignSelf: "flex-start",
    marginLeft: 30,
    marginBottom: 5,
  },
});

export default Login;
