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

const windowWidth = Dimensions.get("window").width;

const Filter = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const handleSelectItemPress = (item) => {
    const updatedItems = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];
    setSelectedItems(updatedItems);
  };

  const handleSelectLanguagePress = (language) => {
    const updatedLanguages = selectedLanguages.includes(language)
      ? selectedLanguages.filter((l) => l !== language)
      : [...selectedLanguages, language];
    setSelectedLanguages(updatedLanguages);
  };

  const renderCategoryButton = (category) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        {
          backgroundColor:
            selectedCategory === category ? "#FFB200" : "#E7EDFD",
        },
      ]}
      onPress={() => handleCategoryPress(category)}
    >
      <Text style={styles.categoryButtonText}>{category}</Text>
    </TouchableOpacity>
  );

  const renderSelectCircle = (value, onPress) => (
    <TouchableOpacity
      style={[
        styles.selectCircle,
        {
          borderColor:
            selectedItems.includes(value) || selectedLanguages.includes(value)
              ? "#FFB200"
              : "#3B5998",
        },
        {
          backgroundColor:
            selectedItems.includes(value) || selectedLanguages.includes(value)
              ? "#FFB200"
              : "transparent",
        },
      ]}
      onPress={onPress}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Specialization</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderCategoryButton("All")}
        {renderCategoryButton("General")}
        {renderCategoryButton("Neurology")}
        {renderCategoryButton("Dentist")}
      </ScrollView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.selectedItemsContainer}>
          <Text style={styles.itemTitle}>Selected Items</Text>
          <View style={styles.selectedItem}>
            <Text style={styles.itemName}>Whole Week</Text>
            {renderSelectCircle("Whole Week", () =>
              handleSelectItemPress("Whole Week")
            )}
          </View>
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <View key={day} style={styles.selectedItem}>
              <Text style={styles.itemName}>{day}</Text>
              {renderSelectCircle(day, () => handleSelectItemPress(day))}
            </View>
          ))}
        </View>
        <View style={styles.selectedItemsContainer}>
          <Text style={styles.itemTitle}>Selected Language</Text>
          <View style={styles.selectedItem}>
            <Text style={styles.itemName}>All Languages</Text>
            {renderSelectCircle("All Languages", () =>
              handleSelectLanguagePress("All Languages")
            )}
          </View>
          {["German", "English"].map((language) => (
            <View key={language} style={styles.selectedItem}>
              <Text style={styles.itemName}>{language}</Text>
              {renderSelectCircle(language, () =>
                handleSelectLanguagePress(language)
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#ffb200",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button1: {
    backgroundColor: "#E7EDFD",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  buttonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
  categoryButton: {
    borderRadius: 10,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  categoryButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  selectedItemsContainer: {
    marginTop: 10,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectedItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 18,
    marginRight: 10,
  },
  selectCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3B5998",
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default Filter;
