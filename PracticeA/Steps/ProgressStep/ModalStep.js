import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ModalStep() {
  const [modalVisible, setModalVisible] = useState(false);
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleUnderstood = () => {
    setModalVisible(false);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
    setStep(1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpenModal}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {step > 1 && (
              <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <Image
                  source={require("../assets/back-icon.png")} // Replace with the correct path to your icon
                  style={styles.backIcon}
                />
              </TouchableOpacity>
            )}
            <View>
              {step === 1 && (
                <View>
                  <Text style={styles.title}>
                    COME PREPARED, Bring with you:
                  </Text>
                  <View style={styles.subtitle}>
                    <Text>&#8226; Please bring your insurance card</Text>
                    <Text>&#8226; A valid ID</Text>
                    <Text>
                      &#8226; Your list of medicine you are taking now
                    </Text>
                  </View>
                </View>
              )}

              {step === 2 && (
                <View style={styles.stepContainer}>
                  <View>
                    <Text style={styles.title}>
                      COME EARLY to your appointment
                    </Text>
                    <View style={styles.subtitles}>
                      <Text>
                        &#8226; Come about 15 minutes before your appointment
                        time
                      </Text>
                      <Text>
                        &#8226; If you are late, you may lose your appointment
                      </Text>
                      <Text>
                        &#8226; If you miss your appointment, call to make
                        another one
                      </Text>
                    </View>
                  </View>
                </View>
              )}

              {step === 3 && (
                <View style={styles.stepContainer}>
                  <Text style={styles.title}>
                    When you cannot attend this appointment please inform us at
                    least 24 hours before your schedule
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.stepIndicatorContainer}>
              <View
                style={[styles.stepIndicator, step >= 1 && styles.activeStep]}
              />
              <View
                style={[styles.stepIndicator, step >= 2 && styles.activeStep]}
              />
              <View
                style={[styles.stepIndicator, step >= 3 && styles.activeStep]}
              />
            </View>

            <View style={styles.buttonRow}>
              {step < 3 ? (
                <TouchableOpacity
                  onPress={handleNext}
                  style={[styles.button, styles.nextButton]}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={handleUnderstood}
                  style={[styles.button, styles.verifyButton]}
                >
                  <Text style={styles.buttonText}>Understood</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  nextButton: {
    backgroundColor: "#FFB200",
  },
  verifyButton: {
    backgroundColor: "#FFB200",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  stepIndicator: {
    width: 30,
    height: 10,
    backgroundColor: "#E7EDFD",
    marginHorizontal: 5,
  },
  activeStep: {
    backgroundColor: "#9EB9FF",
  },
  title: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    marginLeft: 10,
    marginTop: 10,
  },
  subtitles: {
    marginLeft: 10,
    marginTop: 10,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

export default ModalStep;
