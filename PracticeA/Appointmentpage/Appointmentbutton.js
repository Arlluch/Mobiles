import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Appointmentbutton = ({
  name,
  specialization,
  language,
  location,
  schedule,
  scheduleFontSize,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigation = useNavigation();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDelete = () => {
    console.log("pressed");
  };

  const handleView = () => {
    navigation.navigate("Viewdoc");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/Doctor.png")} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialization}>{specialization}</Text>
        <Text style={styles.language}>{language}</Text>
      </View>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleText}>
          Next Schedule:{" "}
          <Text style={[styles.schedule, { fontSize: scheduleFontSize }]}>
            {schedule}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleView}>
          <View style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleDropdown}>
          <View style={styles.verticalIcons}>
            <View style={styles.icon}></View>
            <View style={styles.icon}></View>
            <View style={styles.icon}></View>
          </View>
        </TouchableOpacity>
        {showDropdown && (
          <View style={styles.dropdown}>
            <TouchableOpacity onPress={handleDelete}>
              <Text style={styles.dropdownOption}>Re-schedule Appointment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Text style={styles.dropdownOption}>Cancel Appointment</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  horizontalLine: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  upperRightText: {
    textAlign: "right",
    fontSize: 16,
    color: "#58E481",
  },
  imageContainer: {
    marginRight: "5%",
    marginBottom: "10%",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  textContainer: {
    flex: 1,
    marginBottom: 55,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  specialization: {
    fontSize: 16,
    marginBottom: 3,
    color: "#8696BB",
  },
  language: {
    fontSize: 14,
    marginBottom: 3,
    color: "#8696BB",
  },
  location: {
    fontSize: 14,
    marginBottom: 3,
    color: "#8696BB",
  },
  scheduleContainer: {
    position: "absolute",
    marginTop: 50,
    bottom: 20,
    left: "5%",
    right: "5%",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  scheduleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  schedule: {
    color: "#4894FE",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    position: "absolute",
    right: 20,
  },
  viewButton: {
    backgroundColor: "#FFB200",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  viewButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  verticalIcons: {
    marginLeft: 10,
    flexDirection: "column",
  },
  icon: {
    width: 5,
    height: 5,
    backgroundColor: "#000",
    marginVertical: 2,
    borderRadius: 2.5,
  },
  dropdown: {
    position: "absolute",
    top: 30,
    right: 0,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownOption: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 5,
  },
});

export default Appointmentbutton;
