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

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import BottomButtons from "../Bottom/Bottombutton";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AAppointmentpage = () => {
  const [activeButton2, setActiveButton2] = useState("All");
 
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState(true);

 

  const navigateToFilter = () => {
    navigation.navigate("Filter");
  };

  const handleButtonPress2 = (buttonName2) => {
    setActiveButton2(buttonName2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <TouchableOpacity
          style={styles.filterIconContainer}
          onPress={navigateToFilter}
        ></TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            { backgroundColor: activeButton ? "#FFB200" : "#E7EDFD" },
          ]}
          onPress={() => setActiveButton(true)}
        >
          <Text style={styles.filterButtonText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            { backgroundColor: !activeButton ? "#FFB200" : "#E7EDFD" },
          ]}
          onPress={() => {
            setActiveButton(false);
            navigation.navigate("Reportuser");
          }}
        >
          <Text style={styles.filterButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.smallButtonsContainer}
      >
        <TouchableOpacity
          style={[
            styles.smallButton,
            {
              backgroundColor: activeButton2 === "All" ? "#FFB200" : "#E7EDFD",
            },
          ]}
          onPress={() => handleButtonPress2("All")}
        >
          <Text
            style={[
              styles.smallButtonText,
              { color: activeButton2 === "All" ? "#FFF" : "#000" },
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.smallButton,
            {
              backgroundColor:
                activeButton2 === "General" ? "#FFB200" : "#E7EDFD",
            },
          ]}
          onPress={() => handleButtonPress2("General")}
        >
          <Text
            style={[
              styles.smallButtonText,
              { color: activeButton2 === "General" ? "#FFF" : "#000" },
            ]}
          >
            General
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.smallButton,
            {
              backgroundColor:
                activeButton2 === "Services" ? "#FFB200" : "#E7EDFD",
            },
          ]}
          onPress={() => handleButtonPress2("Services")}
        >
          <Text
            style={[
              styles.smallButtonText,
              { color: activeButton2 === "Services" ? "#FFF" : "#000" },
            ]}
          >
            Services
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.smallButton,
            {
              backgroundColor:
                activeButton2 === "Account" ? "#FFB200" : "#E7EDFD",
            },
          ]}
          onPress={() => handleButtonPress2("Account")}
        >
          <Text
            style={[
              styles.smallButtonText,
              { color: activeButton2 === "Account" ? "#FFF" : "#000" },
            ]}
          >
            Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.smallButton,
            {
              backgroundColor:
                activeButton2 === "Account" ? "#FFB200" : "#E7EDFD",
            },
          ]}
          onPress={() => handleButtonPress2("Account")}
        >
          <Text
            style={[
              styles.smallButtonText,
              { color: activeButton2 === "Account" ? "#FFF" : "#000" },
            ]}
          >
            Account
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <FAQScreen />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Report");
        }}
        style={styles.AppointmentButton}
      >
        <Text style={[styles.buttonText, { color: "#FFF" }]}>Message Us</Text>
      </TouchableOpacity>
      <BottomButtons/>
    </View>
  );
};

const FAQItem = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <View style={styles.containerr}>
      <TouchableOpacity onPress={toggleAnswer} style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <AntDesign
            name={showAnswer ? "minus" : "plus"}
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>

      {showAnswer && <Text style={styles.answerText}>{answer}</Text>}

      <View style={styles.borderBottom} />
    </View>
  );
};

const FAQScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <FAQItem
        question="Can I reschedule or cancel appointments?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <FAQItem
        question="How to checked Appointments?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <FAQItem
        question="How to lorem ipsum dolor sit amet"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  containerr: {
    marginBottom: 20,
  },
  title: {
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
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
    paddingHorizontal: "5%",
    marginTop: "3%",
    marginBottom: "3%",
    marginLeft: "5%",
    marginRight: "5%",
  },

  searchInput: {
    flex: 1,
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
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
    width: "58%",
    marginHorizontal: 5,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFB200",
    borderRadius: 10,
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
  filterButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
 
  smallButtonsContainer: {
    marginLeft: 0,
    marginRight: 10,
  },
  smallButton: {
    backgroundColor: "#E7EDFD",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  smallButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  screenContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    marginBottom: 200,
  },

  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  answerText: {
    marginLeft: 30,
    fontSize: 16,
    color: "gray",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
  },
  AppointmentButton: {
    width: "90%",
    height: 50,
    backgroundColor: "#FFB200",
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 100,
    marginBottom: 100,
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
});

export default AAppointmentpage;
