import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomButtons from "../Bottom/Bottombutton";
const windowWidth = Dimensions.get("window").width;

const DATA = Array.from({ length: 8 }, (_, index) => ({
  id: `${index + 1}`,
  color: "#F7F8FA",
  image:
    index % 3 === 0
      ? require("../assets/dna.png")
      : require("../assets/neurology.png"),
  text1: index % 3 === 0 ? "Genetics" : "Neurology",
  text2: "2,029 Doctors",
}));

const Box = ({ color, image, text1, text2 }) => (
  <View style={[styles.box, { backgroundColor: color }]}>
    <Image source={image} style={styles.image} />
    <Text style={styles.text}>{text1}</Text>
    <Text style={styles.textt}>{text2}</Text>
  </View>
);

const AppointmentList = () => {
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");
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
  const handleBoxPress = (item) => {
    navigation.navigate("Location");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Select the Doctor Specialization</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>our specialized doctors are below</Text>
        </View>

        <View style={styles.boxContainer}>
          {DATA.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleBoxPress(item)}
            >
              <Box
                color={item.color}
                image={item.image}
                text1={item.text1}
                text2={item.text2}
              />
            </TouchableOpacity>
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
    alignItems: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    width: windowWidth / 2.2 - 20,
    height: 220,
    borderRadius: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: "50%",
    resizeMode: "contain",
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "semibold",
    textAlign: "center",
  },
  textt: {
    fontSize: 10,
    fontWeight: "200",
    textAlign: "center",
  },
});

export default AppointmentList;
