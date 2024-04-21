import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [showAvailableTime, setShowAvailableTime] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();
    const grid = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      grid.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      grid.push(i);
    }

    return grid;
  };

  const goToPreviousMonth = () => {
    setSelectedMonth(selectedMonth === 0 ? 11 : selectedMonth - 1);
    setSelectedYear(selectedMonth === 0 ? selectedYear - 1 : selectedYear);
    setSelectedDay(null);
    setShowAvailableTime(false);
  };

  const goToNextMonth = () => {
    setSelectedMonth(selectedMonth === 11 ? 0 : selectedMonth + 1);
    setSelectedYear(selectedMonth === 11 ? selectedYear + 1 : selectedYear);
    setSelectedDay(null);
    setShowAvailableTime(false);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowAvailableTime([14, 15, 16, 17, 25, 26, 27].includes(day));
  };

  const renderCalendarGrid = () => {
    const grid = generateCalendarGrid();
    return grid.map((day, index) => {
      let style = styles.dayContainer;
      let isActive = false;

      if (day) {
        if (
          [14, 15, 16, 17, 25, 26, 27].includes(day) &&
          selectedMonth === new Date().getMonth() &&
          selectedYear === new Date().getFullYear()
        ) {
          style = [styles.dayContainer, styles.activeDay];
          isActive = true;
        }

        if (day === selectedDay) {
          style = [styles.dayContainer, styles.clickedDay];
        }

        return (
          <TouchableOpacity
            key={index}
            style={style}
            onPress={() => handleDayClick(day)}
          >
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        );
      } else {
        return <View key={index} style={style}></View>;
      }
    });
  };

  const renderAvailableTime = () => {
    let availableTimes = [];

    switch (selectedDay) {
      case 14:
        availableTimes = ["11:00", "14:00", "17:00", "20:00"];
        break;
      case 15:
        availableTimes = ["09:00", "11:00", "12:00", "15:00", "16:00", "18:00"];
        break;
      case 16:
        availableTimes = ["10:00", "13:00", "16:00", "19:00"];
        break;
      case 17:
        availableTimes = ["11:00", "14:00", "17:00", "20:00"];
        break;
      case 25:
        availableTimes = ["09:00", "12:00", "15:00", "18:00"];
        break;
      case 26:
        availableTimes = ["10:00", "13:00", "16:00", "19:00"];
        break;
      case 27:
        availableTimes = ["09:00", "13:00", "15:00", "19:00"];
        break;
      default:
        availableTimes = [];
        break;
    }
    return (
      <View style={styles.availableTimeTable}>
        {availableTimes.map((time, index) => (
          <TouchableOpacity key={index} style={styles.availableTimeButton}>
            <Text style={styles.availableTimeText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.cardBox}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goToPreviousMonth}>
              <Text style={styles.navigation}>{"<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowMonthPicker(true)}>
              <Text
                style={[
                  styles.monthYear,
                  selectedMonth === new Date().getMonth() &&
                  selectedYear === new Date().getFullYear()
                    ? styles.currentMonth
                    : null,
                ]}
              >
                {new Date(selectedYear, selectedMonth).toLocaleString(
                  "default",
                  { month: "long" }
                )}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowYearPicker(true)}>
              <Text
                style={[
                  styles.monthYear,
                  selectedYear === new Date().getFullYear()
                    ? styles.currentYear
                    : null,
                ]}
              >
                {selectedYear}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToNextMonth}>
              <Text style={styles.navigation}>{">"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.calendar}>
            <View style={styles.weekDays}>
              {weekDays.map((day, index) => (
                <Text key={index} style={styles.weekDay}>
                  {day}
                </Text>
              ))}
            </View>
            <View style={styles.daysContainer}>{renderCalendarGrid()}</View>
          </View>
          {showAvailableTime && (
            <View style={styles.availableTimeContainer}>
              {renderAvailableTime()}
            </View>
          )}
          <MonthPicker
            visible={showMonthPicker}
            onClose={() => setShowMonthPicker(false)}
            selectedMonth={selectedMonth}
            onSelect={(month) => {
              setSelectedMonth(month);
              setShowMonthPicker(false);
            }}
          />
          <YearPicker
            visible={showYearPicker}
            onClose={() => setShowYearPicker(false)}
            selectedYear={selectedYear}
            onSelect={(year) => {
              setSelectedYear(year);
              setShowYearPicker(false);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const MonthPicker = ({ visible, onClose, selectedMonth, onSelect }) => {
  if (!visible) return null;
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide" // Change animationType to slide
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.cardContainer}>
            {Array.from({ length: 12 }).map((_, index) => (
              <Pressable
                key={index}
                style={styles.cardItem}
                onPress={() => onSelect(index)}
              >
                <Text
                  style={[
                    styles.modalText, // Add modalText style
                    selectedMonth === index ? styles.selectedItem : null,
                    selectedMonth === index ? styles.currentMonth : null,
                  ]}
                >
                  {new Date(0, index).toLocaleString("default", {
                    month: "long",
                  })}
                </Text>
              </Pressable>
            ))}
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// Update the YearPicker component (similar to MonthPicker changes)
const YearPicker = ({ visible, onClose, selectedYear, onSelect }) => {
  if (!visible) return null;

  const startYear = 2024;
  const endYear = startYear + 14;
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide" // Change animationType to slide
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.cardContainer}>
            {years.map((year) => (
              <Pressable
                key={year}
                style={styles.cardItem}
                onPress={() => onSelect(year)}
              >
                <Text
                  style={[
                    styles.modalText, // Add modalText style
                    selectedYear === year ? styles.selectedItem : null,
                    selectedYear === year ? styles.currentYear : null,
                  ]}
                >
                  {year}
                </Text>
              </Pressable>
            ))}
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  cardBox: {
    backgroundColor: "#fff",
    borderRadius: 25,
    margin: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    padding: 15,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "90%",
  },
  navigation: {
    fontSize: 24,
  },
  monthYear: {
    fontSize: 20,
    fontWeight: "bold",
  },
  currentMonth: {
    color: "#FFB200",
  },
  currentYear: {
    color: "#FFB200",
  },
  calendar: {
    alignItems: "center",
    width: "90%",
  },
  weekDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  weekDay: {
    width: 45,
    textAlign: "center",
    fontWeight: "bold",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 20,
    margin: 3,
  },
  dayText: {
    fontSize: 16,
  },
  activeDay: {
    backgroundColor: "#FFB200",
  },
  availableTimeContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 5,
    borderColor: "#E7EDFD",
    borderRadius: 10,
  },
  availableTimeTable: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  availableTimeButton: {
    backgroundColor: "#FFB200",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  availableTimeText: {
    fontSize: 16,
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  modalText: {
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 15,
  },
  closeButton: {
    backgroundColor: "#FFB200",
    padding: 15,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  cardItem: {
    width: "30%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "lightgrey",
  },
  pickerItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedItem: {
    fontWeight: "bold",
  },

  activeContainer: {
    backgroundColor: "#FFB200",
  },
  clickedDay: {
    backgroundColor: "#FF8E00",
  },
});

export default Calendar;
