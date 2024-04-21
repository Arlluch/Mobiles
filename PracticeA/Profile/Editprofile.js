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
  Image,
  KeyboardAvoidingView,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCalendarAlt,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const windowHeight = Dimensions.get("window").height;

function Editprofile({ navigation }) {
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Select Gender", value: null },
    { label: "Female", value: "female" },
    { label: "Male", value: "male" },
    { label: "Other", value: "other" },
  ]);
  const [profileImage, setProfileImage] = useState(
    require("../assets/Doctor.png")
  );

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
    navigation.navigate("#");
  };

  const datePickerContainerStyle = [styles.input, styles.datePickerContainer];
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

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <TouchableOpacity
            onPress={() => alert("Change profile image")}
            style={styles.profileImageContainer}
          >
            <Image source={profileImage} style={styles.profileImage} />
            <TouchableOpacity
              onPress={() => alert("Change profile image")}
              style={styles.changeImageButton}
            >
              <FontAwesomeIcon icon={faCamera} style={styles.cameraIcon} />
            </TouchableOpacity>
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Arlluch"
              onChangeText={(text) => setFirstName(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Aguinaldo"
              onChangeText={(text) => setLastName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Gender</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={(selectedValue) => {
                setValue(selectedValue);
                if (selectedValue !== null) {
                  setGender(selectedValue);
                }
              }}
              setItems={setItems}
              containerStyle={styles.dropdownContainer}
              style={styles.input}
              dropDownContainerStyle={styles.dropdown}
              textStyle={styles.dropdownText}
              dropDownStyle={styles.dropdownItem}
              placeholder="Gender"
              placeholderStyle={{ color: "#888" }}
              zIndex={1000}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Birth Date</Text>
            <View style={datePickerContainerStyle}>
              <Text style={styles.datePickerText}>{renderBirthDate()}</Text>
              <TouchableOpacity
                onPress={showDatePicker}
                style={styles.calendarIconContainer}
              >
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  style={styles.calendarIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            maximumDate={new Date(moment().subtract(1, "days"))}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="0123456789"
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="arlluchsample@gmail.com"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.createButton}
            onPress={handleRegister}
          >
            <Text style={styles.buttonTextt}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 100,
  },
  profileImageContainer: {
    borderRadius: 60,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  changeImageButton: {
    position: "absolute",
    right: 5,
    bottom: 5,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
  },
  cameraIcon: {
    color: "#2c2f65",
    fontSize: 20,
  },
  inputContainer: {
    width: 312,
    marginBottom: 10,
  },
  inputTitle: {
    color: "#888",
    fontSize: 14,

    fontWeight: "bold",
  },
  input: {
    width: 312,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
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
  createButton: {
    width: 312,
    height: 50,
    backgroundColor: "#FFB200",
    borderRadius: 100,
    marginTop: windowHeight * 0.02,
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
  buttonTextt: {
    color: "#fff",
    fontSize: 14,
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

export default Editprofile;
