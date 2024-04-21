import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfilePage = () => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");

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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.innerContent}>
          <View style={styles.header}>
            <Image
              source={require("../assets/Doctor.png")}
              style={styles.profileImage}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john.doe@example.com</Text>
          </View>
          <Text style={styles.title}>Account</Text>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Editprofile")}
            >
              <MaterialIcons name="person" size={24} color="black" />
              <Text style={styles.itemText}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Editpass")}
            >
              <MaterialIcons name="lock" size={24} color="black" />
              <Text style={styles.itemText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <MaterialIcons name="notifications" size={24} color="black" />
              <Text style={styles.itemText}>Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <MaterialIcons name="privacy-tip" size={24} color="black" />
              <Text style={styles.itemText}>Privacy</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Support & Action</Text>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Report")}
            >
              <MaterialIcons name="report-problem" size={24} color="black" />
              <Text style={styles.itemText}>Report a Problem</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Faq")}
            >
              <MaterialIcons name="help" size={24} color="black" />
              <Text style={styles.itemText}>Help & FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <MaterialIcons name="policy" size={24} color="black" />
              <Text style={styles.itemText}>Terms and Policies</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.buttonTextt}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            activeButton === "Home" ? styles.activeButton : null,
          ]}
          onPress={() => handleButtonPress("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            activeButton1 === "AAppointmentpage" ? styles.activeButton1 : null,
          ]}
          onPress={() => handleButtonPress1("AAppointmentpage")}
        >
          <Text style={styles.buttonText}>My Appointments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  innerContent: {
    paddingBottom: 100, // Adjust as needed
  },
  header: {
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    marginTop: 5,
  },
  card: {
    marginTop: 10,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f4f4f7",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  logoutButton: {
    width: "90%",
    height: 50,
    backgroundColor: "#F4F4F7",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 30,
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
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextt: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  bottomButtonsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 3,
    borderTopColor: "rgba(0, 0, 0, 0.2)",
  },
  bottomButton: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  activeButton: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});

export default ProfilePage;
