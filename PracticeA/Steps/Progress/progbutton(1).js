import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const YourComponent = (props) => (
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      <TouchableOpacity style={styles.smsButton} onPress={props.onPrevious}>
        <View style={styles.buttonWrapper}>{props.renderPreviousButton()}</View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.emailButton} onPress={props.onNext}>
        <View style={styles.buttonWrapper}>{props.renderNextButton()}</View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: windowWidth * 0.08,

    textAlign: "center",
    marginBottom: windowHeight * 0.1,
  },
  smsButton: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.07,
    backgroundColor: "#FFB200",
    borderRadius: 100,
    marginBottom: windowHeight * 0.05,
    justifyContent: "center",
    alignItems: "center",
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
  emailButton: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.07,
    backgroundColor: "#FFB200",
    borderRadius: 100,
    marginBottom: windowHeight * 0.05,
    justifyContent: "center",
    alignItems: "center",
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

export default YourComponent;
