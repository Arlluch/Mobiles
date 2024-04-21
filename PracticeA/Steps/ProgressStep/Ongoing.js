import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import ProgSteps from "../Progress/progsteps";
import ProgStep from "../Progress/progstep";
import Insurance from "../ProgressStep/Insurance";
import Visit from "../ProgressStep/Visit";
import Loginsignup from "../ProgressStep/Loginsignup";
import FileList from "../ProgressStep/FileList";

class Steps extends Component {
  static navigationOptions = {
    header: null,
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      flex: 1,
      justifyContent: "center",
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <ProgSteps>
          <ProgStep
            label="Insurance"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Insurance />
          </ProgStep>

          <ProgStep
            label="Visit"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Visit />
          </ProgStep>
          <ProgStep
            label="Appointment"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <FileList />
          </ProgStep>

          <ProgStep
            label="Schedule"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          />
          <ProgStep
            label="Information"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Loginsignup />
          </ProgStep>

          <ProgStep
            label="Finished"
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}
          />
        </ProgSteps>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Steps;
