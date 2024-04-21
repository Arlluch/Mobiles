import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CardBox from "./CardBoxforcancel";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const InfoBox = ({ title, content }) => (
  <View style={styles.infoBox}>
    <Text style={styles.infoTitle}>{title}</Text>
    <FlatList
      data={content}
      renderItem={({ item }) => (
        <View style={styles.bulletItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.infoContent}>{item}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

const Cancelschedule = () => {
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Select Reason", value: null },
    { label: "Reason 1", value: "reason1" },
    { label: "Reason 2", value: "reason2" },
    { label: "Others", value: "others" },
  ]);
  const [otherReason, setOtherReason] = useState("");
  const navigation = useNavigation();

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

  const handleVerify = () => {
    navigation.navigate("Cancelsuccess");
  };

  const handleInputChange = (text) => {
    setOtherReason(text);
  };

  const doctorsData = [
    {
      name: "John Doe",
      specialization: "Internal Medicine",
      language: "English, German",
      location: "Im Obergarten 8, Hofheim am Taunus Taunus",
      schedule: "Sunday, June 24 11:00 - 13:00",
      type: "Covid-19 Vaccination",
      types: "Private/Self-payer",
    },
  ];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
    >
      <View style={styles.container}>
        <View>
          {doctorsData.map((doctor, index) => (
            <CardBox
              key={index}
              name={doctor.name}
              specialization={doctor.specialization}
              language={doctor.language}
              location={doctor.location}
              type={doctor.type}
              types={doctor.types}
              schedule={doctor.schedule}
            />
          ))}
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.inputTitles}>
              Do you really want to cancel this appointment?
            </Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              containerStyle={styles.dropdownContainer}
              style={styles.dropdown}
              itemStyle={styles.dropdownItem}
              textStyle={styles.dropdownText}
              placeholder="Select Reason"
              zIndex={1000}
              onChangeItem={(item) => {
                setValue(item.value);
                if (item.value === "others") {
                  setOtherReason("");
                }
              }}
            />
            {value === "others" && (
              <TextInput
                style={[styles.otherReasonInput, { textAlignVertical: "top" }]}
                placeholder="Enter Other Reason"
                value={otherReason}
                onChangeText={handleInputChange}
                multiline
              />
            )}
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <TouchableOpacity
              onPress={handleVerify}
              style={styles.verifyButtonContainer}
            >
              <Text style={styles.verifyButton}>Send Request</Text>
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
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
  dropdownContainer: {
    width: "100%",
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: "#fafafa",
    borderColor: "#ccc",
    width: "100%",
    zIndex: 0,
  },
  dropdownItem: {
    justifyContent: "flex-start",
  },
  dropdownText: {
    fontSize: 16,
  },
  otherReasonInput: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  inputTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputTitles: {
    fontSize: 15,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: "bold",
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
});

export default Cancelschedule;
