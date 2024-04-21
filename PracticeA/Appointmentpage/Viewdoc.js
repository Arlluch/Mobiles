import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CardBox from "./CardBoxforviewdoc";
import { useNavigation } from "@react-navigation/native";
import BottomButtons from "../Bottom/Bottombutton";
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

const Viewdoc = () => {
  const navigation = useNavigation();
  
  const handleVerify = () => {
    navigation.navigate("Cancelschedule");
  };
  const handleVerify1 = () => {
    navigation.navigate("Cancelschedule");
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
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.infoBoxContainer}
        >
          <InfoBox
            title="Hint"
            content={[
              "Come about 15 minutes before your appointment time",
              "If you are late, you may lose your appointment",
              "If you miss your appointment, call to make another one",
            ]}
          />
          <InfoBox
            title="Hint"
            content={[
              "Come about 15 minutes before your appointment time",
              "If you are late, you may lose your appointment",
              "If you miss your appointment, call to make another one",
            ]}
          />
          <InfoBox
            title="Hint"
            content={[
              "Come about 15 minutes before your appointment time",
              "If you are late, you may lose your appointment",
              "If you miss your appointment, call to make another one",
            ]}
          />
        </ScrollView>
      </ScrollView>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={handleVerify}
            style={styles.verifyButtonContainer}
          >
            <Text style={styles.verifyButton}>Re-schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleVerify1}
            style={styles.verify1ButtonContainer}
          >
            <Text style={styles.verify1Button}>Cancel Schedule</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  scrollContainer: {
    paddingHorizontal: 10,
  },
  infoBoxContainer: {
    flexDirection: "row",
    paddingBottom: 20,
  },
  infoBox: {
    width: windowWidth * 0.8,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoContent: {
    fontSize: 16,
    marginLeft: 10,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 16,
    marginRight: 5,
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
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: 10,
  },
  verifyButton: {
    width: 190,
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
  verify1ButtonContainer: {
    position: "absolute",
    bottom: windowHeight * 0.125,
    width: windowWidth,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 10,
  },

  verify1Button: {
    width: 190,
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

export default Viewdoc;
