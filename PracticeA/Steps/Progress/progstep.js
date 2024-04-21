import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class ProgStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextBtnText: "Governmental",
    };
  }

  onNextStep = async () => {
    this.props.onNext && (await this.props.onNext());

    if (this.props.errors) {
      return;
    }

    this.props.setActiveStep(this.props.activeStep + 1);
    // Update the button text dynamically
    if (this.state.nextBtnText === "Yes") {
      this.setState({ nextBtnText: "Governmental" });
    } else if (this.state.nextBtnText === "Governmental") {
      this.setState({ nextBtnText: "No" });
    }
  };

  onPreviousStep = () => {
    this.props.onPrevious && this.props.onPrevious();
    this.props.setActiveStep(this.props.activeStep + 1);

    this.setState({ nextBtnText: "No" });
  };

  onSubmit = () => {
    this.props.onSubmit && this.props.onSubmit();
  };

  renderNextButton = () => {
    const btnStyle = {
      width: windowWidth * 0.8,
      height: windowHeight * 0.07,
      backgroundColor: "#FFB200",
      borderRadius: 100,
      marginBottom: windowHeight * 0.3,
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
      ...this.props.nextBtnStyle,
    };

    const btnTextStyle = {
      color: "#fff",
      fontSize: 18,
      ...this.props.nextBtnTextStyle,
    };

    const disabledBtnText = {
      color: "#cdcdcd",
    };

    let textStyle = [btnTextStyle];
    if (this.props.nextBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={
          this.props.activeStep === this.props.stepCount - 1
            ? this.onSubmit
            : this.onNextStep
        }
        disabled={this.props.nextBtnDisabled}
      >
        <Text style={textStyle}>
          {this.props.activeStep === this.props.stepCount - 1
            ? this.props.finishBtnText
            : this.state.nextBtnText}
          {""}
        </Text>
      </TouchableOpacity>
    );
  };

  renderPreviousButton = () => {
    const btnStyle = {
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
      ...this.props.previousBtnStyle,
    };

    const btnTextStyle = {
      color: "#fff",
      fontSize: 18,
      ...this.props.previousBtnTextStyle,
    };

    const disabledBtnText = {
      color: "#cdcdcd",
    };

    let textStyle = [btnTextStyle];
    if (this.props.previousBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={this.onPreviousStep}
        disabled={this.props.previousBtnDisabled}
      >
        <Text style={textStyle}>
          {this.props.activeStep === 0
            ? "Private/Self-payers"
            : this.props.activeStep === 1
            ? "Yes"
            : this.props.previousBtnText}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const scrollViewProps = this.props.scrollViewProps || {};
    const viewProps = this.props.viewProps || {};
    const isScrollable = this.props.scrollable;
    const buttonRow =
      this.props.activeStep < 2 ? (
        <View style={{ alignItems: "center" }}>
          {this.renderPreviousButton()}
          {this.renderNextButton()}
        </View>
      ) : null;

    return (
      <View style={{ flex: 1 }}>
        {isScrollable ? (
          <ScrollView {...scrollViewProps}>{this.props.children}</ScrollView>
        ) : (
          <View {...viewProps}>{this.props.children}</View>
        )}

        {buttonRow}
      </View>
    );
  }
}

ProgStep.propTypes = {
  label: PropTypes.string,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  onSubmit: PropTypes.func,
  setActiveStep: PropTypes.func,
  nextBtnText: PropTypes.string,
  previousBtnText: PropTypes.string,
  finishBtnText: PropTypes.string,
  stepCount: PropTypes.number,
  nextBtnStyle: PropTypes.object,
  nextBtnTextStyle: PropTypes.object,
  nextBtnDisabled: PropTypes.bool,
  previousBtnStyle: PropTypes.object,
  previousBtnTextStyle: PropTypes.object,
  previousBtnDisabled: PropTypes.bool,
  scrollViewProps: PropTypes.object,
  viewProps: PropTypes.object,
  errors: PropTypes.bool,
  removeBtnRow: PropTypes.bool,
  scrollable: PropTypes.bool,
};

ProgStep.defaultProps = {
  nextBtnText: "",
  previousBtnText: "",
  finishBtnText: "Submit",
  nextBtnDisabled: false,
  previousBtnDisabled: false,
  errors: false,
  removeBtnRow: false,
  scrollable: true,
};

export default ProgStep;
