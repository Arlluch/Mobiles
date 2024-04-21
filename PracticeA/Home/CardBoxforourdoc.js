import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CardBoxforourdoc = ({
  name,
  specialization,
  language,
  location,
  schedule,
  scheduleFontSize,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/Doctor.png")} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialization}>{specialization}</Text>
        <Text style={styles.language}>{language}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleText}>
          Next Schedule:{" "}
          <Text style={[styles.schedule, { fontSize: scheduleFontSize }]}>
            {schedule}
          </Text>
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { width: "35%" }, { height: "100%" }]}
            onPress={() => navigation.navigate("Docprofile")}
          >
            <Text style={styles.buttonText}>Know More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonn, { width: "65%" }, { height: "100%" }]}
            onPress={() => navigation.navigate("Ongoing")}
          >
            <Text style={styles.buttonText}>Make an Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  imageContainer: {
    marginRight: "5%",
    marginBottom: "35%",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  textContainer: {
    flex: 1,
    marginBottom: 120,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
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
    bottom: 40,
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
  },
  button: {
    backgroundColor: "#63b4ff",
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    justifyContent: "center",
  },
  buttonn: {
    backgroundColor: "#ffb200",
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default CardBoxforourdoc;
