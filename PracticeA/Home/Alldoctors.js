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
} from "react-native";
import CardBox from "./CardBoxforalldoc";
import { useNavigation } from "@react-navigation/native";
import BottomButtons from "../Bottom/Bottombutton";
const windowWidth = Dimensions.get("window").width;

const Alldoctors = () => {
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");
  const [searchText, setSearchText] = useState("");
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.titleContainer}>
          {doctorsData.map((doctor, index) => (
            <CardBox
              key={index}
              name={doctor.name}
              specialization={doctor.specialization}
              language={doctor.language}
              location={doctor.location}
              schedule={doctor.schedule}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
      <BottomButtons/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
  searchIcon: {
    position: "absolute",
    left: 10,
    top: 15,
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  filterIconContainer: {
    marginLeft: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  titleContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 80,
  },
});

export default Alldoctors;
