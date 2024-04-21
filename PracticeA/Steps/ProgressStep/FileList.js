import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FolderListItem = ({ name, isFolder, itemsCount, onPress }) => {
  const icon = isFolder
    ? require("../../assets/Folder.png")
    : require("../../assets/File.png");

  return (
    <TouchableOpacity onPress={onPress} style={styles.folderContainer}>
      <View style={styles.card}>
        <Image source={icon} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.folderName}>{name}</Text>
          {isFolder && <Text style={styles.subtitle}>{itemsCount} items</Text>}
        </View>
        {isFolder && (
          <MaterialIcons name="chevron-right" size={24} color="black" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const FolderList = () => {
  const folders = [
    {
      name: "Folder 1",
      files: ["File 1", "File 2", "File 3"],
    },
    {
      name: "Folder 2",
      files: ["File 4", "File 5"],
    },
  ];

  const [currentFolder, setCurrentFolder] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const navigation = useNavigation();

  const handlePress = (fileName) => {
    navigation.navigate("Selectdoc", { fileName });
  };

  const handleBackButtonPress = () => {
    setCurrentFolder(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {currentFolder
          ? "Please choose the right appointment type"
          : "Please choose the right appointment type"}
      </Text>
      <View style={styles.topRow}>
        {currentFolder && (
          <TouchableOpacity
            onPress={handleBackButtonPress}
            style={styles.backButton}
          >
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        )}
        <Text style={styles.path}>{currentFolder ? currentFolder : ""}</Text>
        <TouchableOpacity
          onPress={() => setSearchVisible(!searchVisible)}
          style={styles.searchIcon}
        >
          <MaterialIcons
            name="search"
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {searchVisible && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={(text) => console.log(text)}
        />
      )}
      {currentFolder
        ? folders
            .find((folder) => folder.name === currentFolder)
            .files.map((file, index) => (
              <FolderListItem
                key={index}
                name={file}
                isFolder={false}
                onPress={() => handlePress(file)}
              />
            ))
        : folders.map((folder, index) => (
            <FolderListItem
              key={index}
              name={folder.name}
              itemsCount={folder.files.length}
              isFolder={true}
              onPress={() => setCurrentFolder(folder.name)}
            />
          ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 20, 
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between", 
    marginBottom: 20,
    paddingHorizontal: 20, 
  },
  backButton: {
    marginRight: 10,
  },
  path: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    
  },
  searchIcon: {
    marginLeft: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  folderContainer: {
    width: " 95%",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  folderName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#A6A6A6",
  },
  searchInput: {
    width: "95%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});




export default FolderList;
