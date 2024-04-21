import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBars,
  faBell,
  faArrowLeft,
  faHome,
  faUser,
  faCalendar,
  faComments,
  faSignOutAlt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import Login from "./PracticeA/Started/Login";
import Loginsms from "./PracticeA/Started/Loginsms";
import Register from "./PracticeA/Started/Register";
import Verify from "./PracticeA/Started/Verify";
import Verifysuccess from "./PracticeA/Started/Verifysuccess";
import Cnpsuccess from "./PracticeA/Started/Cnpsuccess";
import Verifylogin from "./PracticeA/Started/Verifylogin";
import VerifyFPsms from "./PracticeA/Started/VerifyFPsms";
import Notification from "./PracticeA/Started/Notification";
import Faq from "./PracticeA/Started/Faq";
import VerifyFPemail from "./PracticeA/Started/VerifyFPemail";
import Fps1 from "./PracticeA/Started/Fps1";
import Fps1sms from "./PracticeA/Started/Fps1sms";
import Fps1email from "./PracticeA/Started/Fps1email";
import Cnp from "./PracticeA/Started/Cnp";
import Homepage from "./PracticeA/Home/homepage";
import AppointmentList from "./PracticeA/Home/AppointmentList";
import Symptoms from "./PracticeA/Home/Symptoms";
import Alldoctors from "./PracticeA/Home/Alldoctors";
import Ourdoctors from "./PracticeA/Home/Ourdoctors";
import Docprofile from "./PracticeA/Home/Docprofile";
import Filter from "./PracticeA/Home/Filter";
import Doctoroffice from "./PracticeA/Home/Doctoroffice";
import Location from "./PracticeA/Home/Location";
import AAppointmentpage from "./PracticeA/Appointmentpage/AAppointmentpage";
import Viewdoc from "./PracticeA/Appointmentpage/Viewdoc";
import Viewdocarch from "./PracticeA/Appointmentpage/Viewdocarch";
import Cancelsuccess from "./PracticeA/Appointmentpage/Cancelsuccess";
import Cancelschedule from "./PracticeA/Appointmentpage/Cancelschedule";
import Profilepage from "./PracticeA/Profile/Profilepage";
import Editpass from "./PracticeA/Profile/Editpass";
import Editprofile from "./PracticeA/Profile/Editprofile";
import Selectdoc from "./PracticeA/Steps/ProgressStep/Selectdoc";
import Ongoing from "./PracticeA/Steps/ProgressStep/Ongoing";
import Report from "./PracticeA/Profile/Report";
import Reportuser from "./PracticeA/Profile/Reportuser";

import logoImage from "./PracticeA/assets/Logo.png";
import doctorsImage from "./PracticeA/assets/Doctor.png";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    navigation.closeDrawer();
  };
  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: "#63b4ff",
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <View style={{ alignItems: "flex-start", marginBottom: 50 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: -10 }}
          >
            <View style={styles.iconContainer}>
              <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
            </View>
          </TouchableOpacity>

          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
              fontSize: 24,
              color: "white",
            }}
          >
            Sidebar Title
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          <Image
            source={doctorsImage}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              Dr. John Doe
            </Text>
            <Text style={{ color: "white" }}>(123) 456-7890</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("homepage")}
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
          marginBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ffb200",
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          padding: 10,
          borderWidth: 2,
          borderColor: "#ffb200",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginLeft: 20,
            color: "white",
          }}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("MyAppointments")}
        style={{
          marginLeft: 10,
          marginTop: 20,
          marginBottom: 25,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor:
            navigation.state && navigation.state.index === 1
              ? "#ffb200"
              : "#63b4ff",
          borderRadius: 5,
          padding: 10,
        }}
      >
        <Text
          style={{
            marginLeft: 20,
            fontSize: 20,
            color:
              navigation.state && navigation.state.index === 1
                ? "#63b4ff"
                : "white",
          }}
        >
          My Appointments
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profilepage")}
        style={{
          marginLeft: 10,
          marginTop: 20,
          marginBottom: 25,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#63b4ff",
          borderRadius: 5,
          padding: 10,
        }}
      >
        <Text style={{ marginLeft: 20, fontSize: 20, color: "white" }}>
          My Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("#")}
        style={{
          marginLeft: 10,
          marginTop: 20,
          marginBottom: 25,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#63b4ff",
          borderRadius: 5,
          padding: 10,
        }}
      >
        <Text style={{ marginLeft: 20, fontSize: 20, color: "white" }}>
          About Us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Faq")}
        style={{
          marginLeft: 10,
          marginTop: 20,
          marginBottom: 25,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#63b4ff",
          borderRadius: 5,
          padding: 10,
        }}
      >
        <Text style={{ marginLeft: 20, fontSize: 20, color: "white" }}>
          FAQ/Help
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "white",
          width: "100%",
          marginTop: 20,
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Faq")}
        style={{
          marginLeft: 0,
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#63b4ff",
          borderRadius: 5,
          padding: 10,
        }}
      >
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            size={24}
            color="black"
            style={{ transform: [{ rotate: "180deg" }] }}
          />
        </View>
        <Text
          style={{
            marginLeft: 5,
            color: "white",
            fontWeight: "500",
          }}
        >
          Logout
        </Text>
        <Text
          style={{
            marginLeft: 10,
            color: "white",
            position: "absolute",
            right: 20,
          }}
        >
          App Version 1.0
        </Text>
      </TouchableOpacity>

      <Text style={{ color: "white", textAlign: "center", marginTop: 20 }}>
        © 2024 Artificy GmbH
      </Text>
    </DrawerContentScrollView>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: "", headerShown: false }}
        />
        <Drawer.Screen
          name="homepage"
          component={Homepage}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faBars} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "Welcome",
            headerTransparent: false,
            headerStyle: {
              height: 100,
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "homepage",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />

        <Drawer.Screen
          name="AAppointmentpage"
          component={AAppointmentpage}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faBars} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "My Appointments",
            headerTransparent: false,
            headerStyle: {
              height: 100,
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "AAppointmentpage",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Drawer.Screen
          name="Location"
          component={Location}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faBars} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "Location",
            headerTransparent: false,
            headerStyle: {
              height: 100,
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Location",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />

        <Drawer.Screen
          name="Alldoctors"
          component={Alldoctors}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faBars} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "All doctors",
            headerTransparent: false,
            headerStyle: {
              height: 100,
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Alldoctors",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Drawer.Screen
          name="AppointmentList"
          component={AppointmentList}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faBars} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "Appointment List",
            headerTransparent: false,
            headerStyle: {
              height: 100,
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "AppointmentList",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />

        <Drawer.Screen
          name="Symptoms"
          component={Symptoms}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faBars} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "Symptoms",
            headerTransparent: false,
            headerStyle: {
              height: 100,
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Symptoms",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Ourdoctors"
          component={Ourdoctors}
          options={({ navigation }) => ({
            headerTitle: "Our doctors",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Doctoroffice", {
                    goBackTo: "Doctoroffice",
                  })
                }
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Ourdoctors",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={({ navigation, route }) => ({
            headerTitle: "Filter",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(route.params?.goBackTo || "Alldoctors")
                }
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={({ navigation }) => ({
            headerTitle: "Activation",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    navigation.canGoBack() ? null : "Homepage"
                  )
                }
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Docprofile"
          component={Docprofile}
          options={({ navigation }) => ({
            headerTitle: "Doctor's Profile",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Doctoroffice", {
                    goBackTo: "Ourdoctors",
                  })
                }
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Docprofile",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="Viewdoc"
          component={Viewdoc}
          options={({ navigation }) => ({
            headerTitle: "View",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("AAppointmentpage")}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Viewdoc",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Viewdocarch"
          component={Viewdocarch}
          options={({ navigation }) => ({
            headerTitle: "View",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("AAppointmentpage")}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Viewdocarch",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="Cancelschedule"
          component={Cancelschedule}
          options={({ navigation }) => ({
            headerTitle: "Cancel",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    navigation.canGoBack() ? null : "Homepage"
                  )
                }
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Cancelschedule",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="Editpass"
          component={Editpass}
          options={({ navigation }) => ({
            headerTitle: "Change Password",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Profilepage", {
                    goBackTo: "Editprofile",
                  })
                }
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Editpass",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Editprofile"
          component={Editprofile}
          options={({ navigation }) => ({
            headerTitle: "Edit Profile",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Profilepage", {
                    goBackTo: "Editprofile",
                  })
                }
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Editprofile",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="Report"
          component={Report}
          options={({ navigation }) => ({
            headerTitle: "Report a problem",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("homepage")}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Report",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Reportuser"
          component={Reportuser}
          options={({ navigation }) => ({
            headerTitle: "Report a problem",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    navigation.canGoBack() ? null : "Homepage"
                  )
                }
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Reportuser",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Profilepage"
          component={Profilepage}
          options={({ navigation }) => ({
            headerTitle: "My Profile",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("homepage")}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Profilepage",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="Faq"
          component={Faq}
          options={({ navigation }) => ({
            headerTitle: "FAQ/Help",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("homepage")}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Faq",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Ongoing"
          component={Ongoing}
          options={({ navigation }) => ({
            headerTitle: "Appointment",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Faq",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Cancelsuccess"
          component={Cancelsuccess}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Verifysuccess"
          component={Verifysuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cnp"
          component={Cnp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cnpsuccess"
          component={Cnpsuccess}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Fps1email"
          component={Fps1email}
          options={({ navigation }) => ({
            headerTitle: "Forgot password",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Fps1sms"
          component={Fps1sms}
          options={({ navigation }) => ({
            headerTitle: "Forgot password",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Doctoroffice"
          component={Doctoroffice}
          options={({ navigation }) => ({
            headerTitle: "Doctor's Office",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Ourdoctors")}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Doctoroffice",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="Selectdoc"
          component={Selectdoc}
          options={({ navigation }) => ({
            headerTitle: "Doctor's Office",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Notification", {
                      goBackTo: "Selectdoc",
                    })
                  }
                  style={{ marginRight: 10, marginTop: 0 }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    source={logoImage}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Drawer.Screen
          name="Notification"
          component={Notification}
          options={({ navigation, route }) => ({
            headerTitle: "Notification",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate(route.params.goBackTo)}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Fps1"
          component={Fps1}
          options={({ navigation }) => ({
            headerTitle: "Forgot password",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Loginsms"
          component={Loginsms}
          options={({ navigation }) => ({
            headerTitle: "",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Verifylogin"
          component={Verifylogin}
          options={{ headerTitle: "", headerShown: false }}
        />

        <Stack.Screen
          name="VerifyFPemail"
          component={VerifyFPemail}
          options={({ navigation }) => ({
            headerTitle: "Forgot password",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="VerifyFPsms"
          component={VerifyFPsms}
          options={({ navigation }) => ({
            headerTitle: "Forgot password",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  iconContainer: {
    borderWidth: 2,
    borderColor: "white",
    padding: 8,
    borderRadius: 10,
  },
});
