import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ScrollView,
  Platform,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Register({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [gender, setGender] = useState(null);
  const [genderError, setGenderError] = useState(false);
  const [birthDate, setBirthDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthDateError, setBirthDateError] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Select Gender", value: null },
    { label: "Female", value: "female" },
    { label: "Male", value: "male" },
    { label: "Other", value: "other" },
  ]);
  const togglePasswordVisibility = () => {
    // Function to toggle password visibility
    setPasswordVisible(!passwordVisible);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setBirthDate(date);
    hideDatePicker();
  };

  const renderBirthDate = () => {
    return birthDate
      ? moment(birthDate).format("DD MMMM, YYYY")
      : "Select Birthdate";
  };

  const handleRegister = () => {
    const fields = [
      { value: firstName, setError: setFirstNameError },
      { value: lastName, setError: setLastNameError },
      { value: phoneNumber, setError: setPhoneNumberError },
      { value: email, setError: setEmailError },
      { value: password, setError: setPasswordError },
    ];

    let isError = false;

    fields.forEach(({ value, setError }) => {
      const isEmpty = !value.trim();
      setError(isEmpty);
      if (isEmpty) isError = true;
    });

    if (!gender) {
      setGenderError(true);
      isError = true;
    } else {
      setGenderError(false);
    }

    if (!birthDate) {
      setBirthDateError(true);
      isError = true;
    } else {
      setBirthDateError(false);
    }

    if (isError) {
      Alert.alert("Error", "Please fill out all required fields.");
      return;
    }

    navigation.navigate("Verify");
  };

  const datePickerContainerStyle = [
    styles.input,
    styles.datePickerContainer,
    !birthDate && birthDateError && styles.errorInput,
  ];

  return (
    <ScrollView contentContainerStyle={styles.container} behavior="padding">
      <View style={styles.formContainer}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={[styles.input, firstNameError && styles.errorInput]}
          placeholder="First Name"
          placeholderTextColor="#888"
          onChangeText={(text) => {
            setFirstName(text);
            setFirstNameError(false);
          }}
        />
        <TextInput
          style={[styles.input, lastNameError && styles.errorInput]}
          placeholder="Last Name"
          placeholderTextColor="#888"
          onChangeText={(text) => {
            setLastName(text);
            setLastNameError(false);
          }}
        />

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={(selectedValue) => {
            setValue(selectedValue);
            if (selectedValue !== null) {
              setGender(selectedValue);
              setGenderError(false);
            }
          }}
          setItems={setItems}
          containerStyle={styles.dropdownContainer}
          style={[styles.input, genderError && styles.errorInput]}
          dropDownContainerStyle={styles.dropdown}
          textStyle={styles.dropdownText}
          dropDownStyle={styles.dropdownItem}
          placeholder="Gender"
          placeholderStyle={{ color: "#888" }}
          zIndex={1000}
        />
        <View style={datePickerContainerStyle}>
          <Text style={styles.datePickerText}>{renderBirthDate()}</Text>
          <TouchableOpacity
            onPress={showDatePicker}
            style={styles.calendarIconContainer}
          >
            <FontAwesomeIcon icon={faCalendarAlt} style={styles.calendarIcon} />
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          maximumDate={new Date(moment().subtract(1, "days"))}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <TextInput
          style={[styles.input, phoneNumberError && styles.errorInput]}
          placeholder="Phone Number"
          placeholderTextColor="#888"
          onChangeText={(text) => {
            setPhoneNumber(text);
            setPhoneNumberError(false);
          }}
        />
        <TextInput
          style={[styles.input, emailError && styles.errorInput]}
          placeholder="Email"
          placeholderTextColor="#888"
          onChangeText={(text) => {
            setEmail(text);
            setEmailError(false);
          }}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={[styles.input, passwordError && styles.errorInput]}
            placeholder="Password"
            placeholderTextColor="#888"
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError(false);
            }}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.eyePasswordButton}
            onPress={togglePasswordVisibility} // Call togglePasswordVisibility function when eye icon is pressed
          >
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye} // Change icon based on password visibility state
              style={styles.eyePasswordIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.createButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLineContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.login1Text}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: windowWidth * 0.08,
    textAlign: "center",
    marginBottom: windowHeight * 0.1,
  },
  input: {
    width: 312,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dropdownContainer: {
    width: 312,
  },
  dropdown: {
    width: 312,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderTopWidth: 0,
  },
  dropdownItem: {
    justifyContent: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
  },
  dropdownText: {
    color: "#000",
  },
  inputContainer: {
    width: 312,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  createButton: {
    width: 312,
    height: 50,
    backgroundColor: "#FFB200",
    borderRadius: 100,
    marginTop: windowHeight * 0.1,
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
  loginText: {
    marginTop: 20,
    color: "#000",
    fontSize: 14,
  },
  login1Text: {
    marginTop: 20,
    color: "#2F89FC",
    fontSize: 14,
  },
  horizontalLineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
    marginBottom: windowHeight * 0.025,
  },
  passwordInputContainer: {
    position: "relative",
    width: 312,
  },
  eyePasswordButton: {
    position: "absolute",
    right: 10,
    bottom: 35,
  },
  errorInput: {
    borderColor: "red",
  },
  eyePasswordIcon: {
    color: "#888",
  },
  datePickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  datePickerText: {
    flex: 1,
    fontSize: 16,
    color: "#888",
  },
  calendarIcon: {
    color: "#888",
    fontSize: 20,
  },
});

export default Register;
