import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CardBoxforviewdoc = ({
  name,
  specialization,
  language,
  location,
  type,
  types,
  schedule,
  scheduleFontSize,
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

      <View style={styles.typeContainer}>
        <Text style={styles.type}>
          Appointment Type: <Text style={styles.typetext}>{type}</Text>
        </Text>
        <Text style={styles.types}>
          Insurance: <Text style={styles.typestext}>{types}</Text>
        </Text>
      </View>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleText}>
          Schedule:{" "}
          <Text style={[styles.schedule, { fontSize: scheduleFontSize }]}>
            {schedule}
          </Text>
        </Text>
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
  type: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  typetext: {
    fontSize: 15,
    color: "#000",
  },
  types: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  typestext: {
    fontSize: 15,
    color: "#000",
  },
  scheduleContainer: {
    position: "absolute",
    marginTop: 50,
    bottom: 30,
    left: "5%",
    right: "5%",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  typeContainer: {
    position: "absolute",
    marginTop: 50,
    bottom: 70,
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
});

export default CardBoxforviewdoc;
