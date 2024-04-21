import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Platform,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import BottomButtons from "../Bottom/Bottombutton";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Doctoroffice({ navigation }) {
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");
  const [visible, setVisible] = useState(true);
  const [tableHeight, setTableHeight] = useState(new Animated.Value(0));
  const data = [
    { day: "Monday", time: "10:00 - 11:00" },
    { day: "Tuesday", time: "11:00 - 12:00" },
    { day: "Wednesday", time: "13:00 - 14:00" },
    { day: "Thursday", time: "14:00 - 15:00" },
    { day: "Friday", time: "15:00 - 16:00" },
    { day: "Saturday", time: "16:00 - 17:00" },
    { day: "Sunday", time: "17:00 - 18:00" },
  ];

  const toggleVisibility = () => {
    if (visible) {
      const expandedHeight = data.length * 50;
      Animated.timing(tableHeight, {
        toValue: expandedHeight,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(tableHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setVisible(!visible);
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.day}</Text>
      <Text style={styles.cell}>{item.time}</Text>
    </View>
  );

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "Home") {
      navigation.navigate("homepage");
    }
  };
  const handleBoxPress = (item) => {
    navigation.navigate("Docprofile");
  };
  const handleButtonPress1 = (buttonName1) => {
    setActiveButton1(buttonName1);
    if (buttonName1 === "AAppointmentpage") {
      navigation.navigate("AAppointmentpage");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <ImageBackground
          style={styles.background}
          source={require("../assets/Doctor.png")}
        >
          <TouchableOpacity style={styles.boxcard}>
            <Text style={styles.officeName}>Doctor Office</Text>
            <Text style={styles.specialization}>Dental Specialist</Text>
            <Text style={styles.address}>
              Im Obergarten 8, Hofheim am Taunus Taunus
            </Text>
          </TouchableOpacity>
        </ImageBackground>
        <TouchableOpacity
          style={styles.AppointmentButton}
          onPress={() => navigation.navigate("Ongoing")}
        >
          <Text style={[styles.buttonText, { color: "#FFF" }]}>
            Make an Appointment
          </Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>About Doctor office</Text>
          </View>
          <Text style={styles.subtitle}>
            [Doctor office name] is a top specialist at London Bridge Hospital
            at London. They have achieved several awards and recognition for is
            contribution and service in his own field.
          </Text>
        </View>
        <View style={styles.titleRows}>
          <Text style={styles.title}>Our Doctors</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Ourdoctors")}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardsContainer}
        >
          <TouchableOpacity onPress={() => handleBoxPress(data[0])}>
            <View style={styles.card}>
              <Image
                source={require("../assets/Doctor.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardName}>Dr. John Doe</Text>
              <Text style={styles.cardSpecialization}>Cardiologist</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleBoxPress(data[1])}>
            <View style={styles.card}>
              <Image
                source={require("../assets/Doctor.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardName}>Dr. John Doe</Text>
              <Text style={styles.cardSpecialization}>Cardiologist</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleBoxPress(data[2])}>
            <View style={styles.card}>
              <Image
                source={require("../assets/Doctor.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardName}>Dr. Jane Smith</Text>
              <Text style={styles.cardSpecialization}>Dermatologist</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleBoxPress(data[3])}>
            <View style={styles.card}>
              <Image
                source={require("../assets/Doctor.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardName}>Dr. Michael Brown</Text>
              <Text style={styles.cardSpecialization}>Pediatrician</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.titles}>Opening Hours</Text>
        <TouchableOpacity style={styles.hideButton} onPress={toggleVisibility}>
          <Text style={styles.hideButtonText}>
            {visible ? `${data[0].day} - ${data[0].time}` : "Hide Table"}
          </Text>
        </TouchableOpacity>

        <Animated.View style={[styles.tableContainer, { height: tableHeight }]}>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.headerText]}>Day</Text>
            <Text style={[styles.cell, styles.headerText]}>Time</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.day}
            contentContainerStyle={styles.tableContent}
          />
        </Animated.View>

        <View style={styles.titleRows}>
          <Text style={styles.title}>Contact Us</Text>
        </View>
        <View style={styles.contactInfo}>
          <View style={styles.contactRow}>
            <MaterialIcons name="phone" size={24} color="black" />
            <Text style={styles.contactText}>
              Phone Number of the doctor’s office
            </Text>
          </View>
          <View style={styles.contactRow}>
            <MaterialIcons name="email" size={24} color="black" />
            <Text style={styles.contactText}>Email of the doctor’s office</Text>
          </View>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Impressum and Datenschutz</Text>
        </View>
      </ScrollView>
      <BottomButtons/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  background: {
    width: windowWidth,
    height: windowHeight * 0.5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  boxcard: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 250,
  },
  officeName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  specialization: {
    fontSize: 16,
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    flexWrap: "wrap",
  },
  AppointmentButton: {
    width: "90%",
    height: 50,
    backgroundColor: "#FFB200",
    marginLeft: 20,
    marginTop: 10,
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

  viewAll: {
    fontSize: 18,
    color: "black",
    marginLeft: 10,
    marginRight: 20,
  },
  titleContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  titleRows: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 20,
  },
  title: {
    fontSize: 20,

    marginBottom: 20,
    marginTop: 20,
  },
  titles: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
  },
  cardsContainer: {
    flexDirection: "row",
    padding: 10,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    marginRight: 10,
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
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  cardSpecialization: {
    fontSize: 14,
    textAlign: "center",
  },

  contactInfo: {
    marginHorizontal: 20,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#6B779A",
  },
  hideButton: {
    padding: 10,
    width: "90%",
    backgroundColor: "#FFB200",
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 20,
  },
  hideButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  tableContainer: {
    width: "90%",
    borderRadius: 10,
    overflow: "hidden",
    marginLeft: 20,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#FFB200",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableContent: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  headerText: {
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#F3F3F3",
  },
  footerText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
  },
});

export default Doctoroffice;
