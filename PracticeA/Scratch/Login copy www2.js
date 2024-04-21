import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

const Table = () => {
  const [visible, setVisible] = useState(true);
  const [tableHeight, setTableHeight] = useState(new Animated.Value(0));

  const data = [
    { day: "Monday", time: "10:00 - 11:00" },
    { day: "Tuesday", time: "11:00 - 12:00" },
    { day: "Wednesday", time: "13:00 - 14:00" },
    { day: "Thursday", time: "14:00 - 15:00" },
    { day: "Friday", time: "15:00 - 16:00" },
    { day: "Saturday", time: "16:00 - 17:00" },
    { day: "Sunday", time: "17:00 - 18:00" },
  ];

  const toggleVisibility = () => {
    if (visible) {
      Animated.timing(tableHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(tableHeight, {
        toValue: 200,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setVisible(!visible);
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.day}</Text>
      <Text style={styles.cell}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.hideButton} onPress={toggleVisibility}>
        <Text style={styles.hideButtonText}>
          {visible ? "Hide" : "Show"} Table
        </Text>
      </TouchableOpacity>
      <Animated.View style={[styles.tableContainer, { height: tableHeight }]}>
        <View style={styles.tableHeader}>
          <Text style={[styles.cell, styles.headerText]}>Day</Text>
          <Text style={[styles.cell, styles.headerText]}>Time</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.day}
          contentContainerStyle={styles.tableContent}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  hideButton: {
    padding: 10,
    backgroundColor: "#FFB200",
    borderRadius: 5,
    marginBottom: 10,
  },
  hideButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  tableContainer: {
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#EDEDED",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableContent: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  headerText: {
    fontWeight: "bold",
  },
});

export default Table;
