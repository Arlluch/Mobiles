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
import availableTimes from "../Started/availableTimes";

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

    const currentDate = new Date();

    const fiveDaysFromNow = new Date();
    fiveDaysFromNow.setDate(currentDate.getDate() + 5);

    if (day) {
      const selectedDate = new Date(selectedYear, selectedMonth, day);
      if (selectedDate <= fiveDaysFromNow) {
        setShowAvailableTime(true);
      } else {
        setShowAvailableTime(false);
      }
    }
  };

  const renderCalendarGrid = () => {
    const grid = generateCalendarGrid();
    const currentDate = new Date();
  
  
    const availableDays = [];
  
  
    availableTimes.forEach((time) => {
      const dateTime = new Date(time.dateTime);
      const day = dateTime.getDate();
      const month = dateTime.getMonth();
      if (
        !availableDays.some(
          (dayObj) => dayObj.day === day && dayObj.month === month
        )
      ) {
        availableDays.push({ day, month });
      }
    });
  
    return grid.map((day, index) => {
      let style = styles.dayContainer;
      let isPastDate = false;
      let hasAvailableTime = false;
  
      if (day) {
        if (
          selectedMonth === currentDate.getMonth() &&
          selectedYear === currentDate.getFullYear()
        ) {
          if (day < currentDate.getDate()) {
            style = [styles.dayContainer, styles.pastDay];
            isPastDate = true;
          }
        }
  
        const dayHasAvailableTime = availableDays.some(
          (dayObj) => dayObj.day === day && dayObj.month === selectedMonth
        );
        if (dayHasAvailableTime) {
          style = [styles.dayContainer, styles.activeContainer];
          hasAvailableTime = true;
        }
  
        if (day === selectedDay) {
          style = [styles.dayContainer, styles.clickedDay];
        }
  
        return (
          <TouchableOpacity
            key={index}
            style={[
              style,
              isPastDate && styles.pastDay,
              hasAvailableTime && styles.activeContainer,
              day === selectedDay && hasAvailableTime && styles.clickedDay,
            ]}
            onPress={() => handleDayClick(day)}
            disabled={isPastDate}
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
    const selectedDateTimes = availableTimes.filter((time) => {
      const dateTime = new Date(time.dateTime);
      const day = dateTime.getDate();
      const month = dateTime.getMonth();
      return day === selectedDay && month === selectedMonth;
    });
  
    if (selectedDateTimes.length === 0) {
      return (
        <View style={styles.availableTimeTable}>
          <Text>No available times for selected date</Text>
        </View>
      );
    }
  
    return (
      <View style={styles.availableTimeTable}>
        {selectedDateTimes.map((time, index) => {
          const dateTime = new Date(time.dateTime);
          const hours = ("0" + dateTime.getHours()).slice(-2);
          const minutes = ("0" + dateTime.getMinutes()).slice(-2);
          const formattedTime = `${hours}:${minutes}`;
  
          return (
            <TouchableOpacity key={index} style={styles.availableTimeButton}>
              <Text style={styles.availableTimeText}>{formattedTime}</Text>
            </TouchableOpacity>
          );
        })}
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
      animationType="slide"
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
                    styles.modalText,
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
      animationType="slide"
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
                    styles.modalText,
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
    width: "100%",
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
    width: "100%",
    justifyContent: "center",
   
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
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 20,
    margin: 3,
    marginLeft: "2%",
  },
  dayText: {
    fontSize: 16,
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
  pastDay: {
    backgroundColor: "lightgray",
    opacity: 0.5,
  },
});

export default Calendar;
