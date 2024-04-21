import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/MaterialIcons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Reportuser({ navigation }) {
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const items = [
    { label: "What went wrong?", value: "What went wrong?" },
    { label: "Why are you canceling?", value: "Why are you canceling?" },
    {
      label: "Do you need further assistance?",
      value: "Do you need further assistance?",
    },
    {
      label: "How can we improve?",
      value: "How can we improve?",
    },
  ];

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
    navigation.navigate("homepage");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <TextInput
            style={styles.emailInput}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            itemStyle={styles.dropdownItem}
            textStyle={styles.dropdownText}
            placeholder="Select Concern"
            zIndex={1000}
            onChangeItem={(item) => {
              setValue(item.value);
              setOpen(false);
            }}
          />
          <View style={styles.addPhotoContainer}>
            <TouchableOpacity style={styles.addButton} onPress={() => {}}>
              <Icon name="add-a-photo" size={30} color="#FFB200" />
              <Text style={styles.addPhotoText}>Add Photo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addPhotoContainerr}>
            <Text style={styles.addPhotoTexts}>
              Minimum of 1 photo with total size up to 5 mb
            </Text>
            <TextInput
              style={[styles.commentsInput, { textAlignVertical: "top" }]}
              placeholder="Comments"
              multiline
              value={comment}
              onChangeText={(text) => setComment(text)}
              placeholderTextColor="#ccc"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={handleVerify}
            style={styles.verifyButtonContainer}
          >
            <Text style={styles.verifyButton}>Send</Text>
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
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingBottom: 150, // Adjust this value based on your needs
  },
  dropdownContainer: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    left: 5,
  },
  dropdown: {
    borderColor: "#ccc",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  addPhotoText: {
    fontSize: 16,
    color: "#ccc",
    marginLeft: 5,
  },
  addPhotoTexts: {
    fontSize: 16,
    color: "#ccc",
    right: 25,
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
  addPhotoContainer: {
    marginTop: 20,
    marginLeft: 25,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  addPhotoContainerr: {
    marginTop: 0,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  commentsInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    width: windowWidth - 25,
    height: 180,
    borderColor: "#ccc",
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  emailInput: {
    marginTop: 20,
    marginLeft: 25,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    width: "90%",
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default Reportuser;
