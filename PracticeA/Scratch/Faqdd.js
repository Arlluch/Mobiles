import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FAQItem = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAnswer} style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <AntDesign
            name={showAnswer ? "minus" : "plus"}
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>

      {showAnswer && <Text style={styles.answerText}>{answer}</Text>}

      <View style={styles.borderBottom} />
    </View>
  );
};

const FAQScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <FAQItem
        question="Can I reschedule or cancel appointments?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <FAQItem
        question="How to checked Appointments?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <FAQItem
        question="How to lorem ipsum dolor sit amet"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  container: {
    marginBottom: 10,
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  answerText: {
    marginLeft: 30,
    fontSize: 16,
    color: "gray",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
  },
});

export default FAQScreen;
