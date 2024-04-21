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
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import BottomButtons from "../Bottom/Bottombutton";
const windowWidth = Dimensions.get("window").width;

const Location = () => {
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");
  const navigation = useNavigation();
  const [query1, setQuery1] = useState("");
  const [suggestions1, setSuggestions1] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
  const handleInputChange1 = (text) => {
    setQuery1(text);

    const staticSuggestions = [
      "Location",
      "Location",
      "Location",
      "Location",
      "Location",
    ];
    const filteredSuggestions = staticSuggestions.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions1(filteredSuggestions);
  };

  const hideSuggestions1 = () => {
    setSuggestions1([]);
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const locations = [
    {
      id: 1,
      name: "Hamburg",
      imageSource: require("../assets/hamburg.png"),
    },
    {
      id: 2,
      name: "Munich",
      imageSource: require("../assets/munich.png"),
    },
    {
      id: 3,
      name: "Leipzig",
      imageSource: require("../assets/noun-leipzig.png"),
    },
    {
      id: 4,
      name: "Berlin",
      imageSource: require("../assets/berlin.png"),
    },
  ];

  const handleLocationPress = (location) => {
    if (activeDropdown === null || suggestions1.length === 0) {
      navigation.navigate("Alldoctors", { location });
    } else {
      setQuery1(location.name);
      hideSuggestions1();
    }
  };

  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => handleLocationPress(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const renderLocationItem = (location) => (
    <TouchableOpacity
      key={location.id}
      style={styles.card}
      onPress={() => handleLocationPress(location)}
    >
      <Image source={location.imageSource} style={styles.image} />
      <Text style={styles.locationName}>{location.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.selectListContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search here..."
            value={query1}
            onChangeText={handleInputChange1}
            onFocus={() => toggleDropdown(1)}
          />
          {activeDropdown === 1 && suggestions1.length > 0 && (
            <>
              <FlatList
                data={suggestions1}
                renderItem={renderSuggestionItem}
                keyExtractor={(item, index) => index.toString()}
                style={styles.suggestionList}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={hideSuggestions1}
              >
                <MaterialIcons name="close" size={24} color="black" />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Select your desired location</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {locations.map((location) => renderLocationItem(location))}
        </ScrollView>
      </View>
      <BottomButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  card: {
    width: windowWidth - 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },

  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  locationName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  suggestionList: {
    position: "absolute",
    top: "70%",
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 0,
    backgroundColor: "#fff",
    zIndex: 1,
    borderTopWidth: 0,
  },
  suggestionItem: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
  },
  inputContainer: {
    width: windowWidth * 0.9,
    position: "relative",
    marginLeft: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});

export default Location;
