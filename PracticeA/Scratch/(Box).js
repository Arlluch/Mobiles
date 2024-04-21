import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const DATA = [
  {
    id: "1",
    color: "#F7F8FA",
    image: require("../assets/dna.png"),
    text1: "Genetics",
    text2: "2,029 Doctors",
  },
  {
    id: "2",
    color: "#F7F8FA",
    image: require("../assets/neurology.png"),
    text1: "Neurology",
    text2: "2,029 Doctors",
  },
  {
    id: "3",
    color: "#F7F8FA",
    image: require("../assets/dentist.png"),
    text1: "Dentist",
    text2: "2,029 Doctors",
  },
  {
    id: "4",
    color: "#F7F8FA",
    image: require("../assets/dna.png"),
    text1: "Genetics",
    text2: "2,029 Doctors",
  },
  {
    id: "5",
    color: "#F7F8FA",
    image: require("../assets/neurology.png"),
    text1: "Neurology",
    text2: "2,029 Doctors",
  },
];

const Box = ({ color, image, text1, text2 }) => (
  <View style={[styles.box, { backgroundColor: color }]}>
    <Image source={image} style={styles.image} />
    <Text style={styles.text}>{text1}</Text>
    <Text style={styles.textt}>{text2}</Text>
  </View>
);

const Homepage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Featured Items</Text>
        <TouchableOpacity onPress={() => console.log("View All clicked")}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.boxContainer}>
          {DATA.map((item) => (
            <Box
              key={item.id}
              color={item.color}
              image={item.image}
              text1={item.text1}
              text2={item.text2}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAll: {
    fontSize: 16,
    color: "blue",
  },
  boxContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  box: {
    width: windowWidth / 3 - 20,
    height: 150,
    borderRadius: 20,
    marginHorizontal: 5,
    marginBottom: 10,
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
    fontWeight: "thin",
    textAlign: "center",
  },
});

export default Homepage;
