import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  Platform,
} from "react-native";
import CardBox from "./Archivebutton";
import CardBox1 from "./Appointmentbutton";
import { useNavigation } from "@react-navigation/native";
import BottomButtons from "../Bottom/Bottombutton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AAppointmentpage = () => {
  const [activeButton2, setActiveButton2] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState(true);

  const handleButtonPress = (buttonName) => {
    setActiveButton2(buttonName);
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

  const navigateToFilter = () => {
    navigation.navigate("Filter");
  };

  const doctorsData = [
    {
      name: "John Doe",
      specialization: "Internal Medicine",
      language: "English, German",
      location: "Im Obergarten 8, Hofheim am Taunus Taunus",
      schedule: "Sunday, June 24 11:00 - 13:00",
    },
    {
      name: "John Doe",
      specialization: "Internal Medicine",
      language: "English, German",
      location: "Im Obergarten 8, Hofheim am Taunus Taunus",
      schedule: "Sunday, June 24 11:00 - 12:00",
    },
    {
      name: "John Doe",
      specialization: "Medicine",
      language: "German",
      location: "Im Obergarten 8, Hofheim am Taunus Taunus",
      schedule: "Sunday, June 24 12:00 - 13:00",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          prefix={
            <Image
              source={require("../assets/search_icon.png")}
              style={styles.searchIcon}
            />
          }
        />

        <TouchableOpacity
          style={styles.filterIconContainer}
          onPress={navigateToFilter}
        >
          <Image
            source={require("../assets/filter_icon.png")}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            { backgroundColor: activeButton ? "#FFB200" : "#E7EDFD" },
          ]}
          onPress={() => setActiveButton(true)}
        >
          <Text style={styles.filterButtonText}>Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            { backgroundColor: !activeButton ? "#FFB200" : "#E7EDFD" },
          ]}
          onPress={() => setActiveButton(false)}
        >
          <Text style={styles.filterButtonText}>Archive</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.titleContainer}>
          {activeButton ? (
            <>
              {doctorsData.slice(0, 5).map((doctor, index) => (
                <CardBox1
                  key={index}
                  name={doctor.name}
                  specialization={doctor.specialization}
                  language={doctor.language}
                  schedule={doctor.schedule}
                />
              ))}
            </>
          ) : (
            <>
              {doctorsData.slice(0, 3).map((doctor, index) => (
                <CardBox
                  key={index}
                  name={doctor.name}
                  specialization={doctor.specialization}
                  language={doctor.language}
                  schedule={doctor.schedule}
                />
              ))}
            </>
          )}
        </View> 
      </ScrollView>
      <BottomButtons/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingLeft: 30,
    backgroundColor: "#ECECEC",
  },
  filterIconContainer: {
    marginLeft: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  filterButton: {
    flex: 1,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFB200",
    marginLeft: 5,
    marginRight: 5,
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
  filterButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  titleContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default AAppointmentpage;
