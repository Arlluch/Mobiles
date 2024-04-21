import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Verifylogin({ navigation }) {
  const [codes, setCodes] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [isResendClicked, setIsResendClicked] = useState(false);

  const inputRefs = useRef([]);

  useEffect(() => {
    let timerInterval;
    if (isResendDisabled) {
      timerInterval = setInterval(() => {
        setResendTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(timerInterval);
            setIsResendDisabled(false);
            setIsResendClicked(false);
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [isResendDisabled]);

  const handleVerify = () => {
    const correctCode = "123456";
    const enteredCode = codes.join("");

    if (enteredCode === correctCode) {
      setError(false);
      navigation.navigate("Login");
    } else {
      setError(true);
    }
  };

  const handleChangeText = (index, text) => {
    const newCodes = [...codes];
    newCodes[index] = text;
    setCodes(newCodes);

    if (text.length > 0) {
      setError(false);
    }

    if (text.length > 0 && index < codes.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleResend = () => {
    setIsResendDisabled(true);
    setResendTimer(60);
    setIsResendClicked(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.formContainer}>
          <View style={styles.oblongContainer}>
            {codes.map((code, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={[
                  styles.oblongInput,
                  styles.inputStyle,
                  error && code === "" && styles.errorInput,
                ]}
                maxLength={1}
                onChangeText={(text) => handleChangeText(index, text)}
              />
            ))}
          </View>

          <Text style={styles.weJustSent}>{`We just sent a SMS to [phone number]
Please enter the 6-digit code we provided to retrieve your account. If you haven't received the code, please resend again.`}</Text>
          {error && (
            <Text style={styles.errorMessage}>
              Incorrect code. Please try again.
            </Text>
          )}
          <TouchableOpacity
            onPress={handleResend}
            disabled={isResendDisabled}
            style={[
              styles.resendButtonContainer,
              isResendDisabled && styles.disabledButton,
            ]}
          >
            <Text style={styles.resendButton}>
              {isResendClicked ? `Resend (${resendTimer})` : "Send"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Card box at the bottom */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={handleVerify}
            style={styles.verifyButtonContainer}
          >
            <Text style={styles.verifyButton}>Verify</Text>
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
    marginTop: windowHeight * 0.1,
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  weJustSent: {
    fontSize: 15,
    marginTop: 60,
    textAlign: "center",
    alignSelf: "stretch",
  },
  inputStyle: {
    fontSize: 32,
    color: "black",
    textAlign: "center",
  },
  oblongContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  oblongInput: {
    width: (windowWidth * 0.8 - 5 * 10) / 6,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  errorInput: {
    borderColor: "#ccc",
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
    borderLeftColor: "rgba(0, 0,     0, 0.2)",
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
  resendButtonContainer: {
    width: 150,
    height: 50,
    backgroundColor: "#FFB200",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 14,
    marginTop: 10,
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
  disabledButton: {
    backgroundColor: "#ccc",
  },
  resendButton: {
    color: "#fff",
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
  },
});

export default Verifylogin;
