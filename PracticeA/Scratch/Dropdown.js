import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = () => {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);

  const items = [
    { label: "Monday - 10:00 - 11:00", value: "Monday 10:00 - 11:00" },
    { label: "Tuesday - 11:00 - 12:00", value: "Tuesday 11:00 - 12:00" },
    { label: "Wednesday - 13:00 - 14:00", value: "Wednesday 13:00 - 14:00" },
    { label: "Thursday - 14:00 - 15:00", value: "Thursday 14:00 - 15:00" },
    { label: "Friday - 15:00 - 16:00", value: "Friday 15:00 - 16:00" },
    { label: "Saturday - 16:00 - 17:00", value: "Saturday 16:00 - 17:00" },
    { label: "Sunday - 17:00 - 18:00", value: "Sunday 17:00 - 18:00" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          itemStyle={styles.dropdownItem}
          textStyle={styles.dropdownText}
          placeholder="Select Day and Time"
          zIndex={1000}
          onChangeItem={(item) => {
            setValue(item.value);
            setOpen(false);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentBox: {
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    width: 292,
    height: 300,
    marginTop: 10,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dropdownItem: {
    justifyContent: "center",
    paddingVertical: 15,
  },
  dropdownText: {
    color: "#000",
  },
});

export default Dropdown;
