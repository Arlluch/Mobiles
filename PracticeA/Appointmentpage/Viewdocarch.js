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
import CardBox from "./CardBoxforviewarch";
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

const Viewdocarch = () => {
  const navigation = useNavigation();
 
  const handleVerify = () => {
    navigation.navigate("homepage");
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

 
});

export default Viewdocarch;
