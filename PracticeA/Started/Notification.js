import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      title: "Appointment Success",
      subtitle:
        "Congratulations - your appointment is confirmed! We are looking forward to meeting with you.",
      type: "success",
      read: false,
      today: true,
    },
    {
      title: "Appointment Re-scheduled",
      subtitle: "You have successfully changed your appointment with Dr. Name.",
      type: "reschedule",
      read: true,
      today: true,
    },
    {
      title: "Appointment Cancelled",
      subtitle:
        "You have successfully cancelled your appointment with Dr. Name. ",
      type: "cancel",
      read: false,
      today: true,
    },
  ]);

  const handleMarkAsRead = () => {};

  const getIconSource = (type) => {
    switch (type) {
      case "success":
        return require("../assets/calendar-blue.png");
      case "reschedule":
        return require("../assets/calendar-yellow.png");
      case "cancel":
        return require("../assets/calendar-red.png");
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.notificationContainer}>
        {/* Today */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Today</Text>
          <TouchableOpacity
            onPress={handleMarkAsRead}
            style={styles.markAsReadButton}
          >
            <Text style={styles.markAsReadButtonText}>Mark as all read</Text>
          </TouchableOpacity>
        </View>
        {notifications.map((notification, index) => (
          <View
            key={index}
            style={[
              styles.notification,
              {
                backgroundColor: notification.today
                  ? notification.read
                    ? "#E7EDFD"
                    : "transparent"
                  : "#ffffff",
              },
            ]}
          >
            <Image
              source={getIconSource(notification.type)}
              style={styles.notificationIcon}
            />
            <View style={styles.notificationText}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationSubtitle}>
                {notification.subtitle}
              </Text>
            </View>
          </View>
        ))}
        {/* Yesterday */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Yesterday</Text>
        </View>
        {notifications.map((notification, index) => (
          <View
            key={index}
            style={[
              styles.notification,
              {
                backgroundColor: !notification.today
                  ? notification.read
                    ? "#E7EDFD"
                    : "transparent"
                  : "#ffffff",
              },
            ]}
          >
            <Image
              source={getIconSource(notification.type)}
              style={styles.notificationIcon}
            />
            <View style={styles.notificationText}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationSubtitle}>
                {notification.subtitle}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  markAsReadButton: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  markAsReadButtonText: {
    color: "#4894FE",
  },
  notificationContainer: {
    flex: 1,
  },
  notification: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  notificationIcon: {
    width: 56,
    height: 56,
    marginRight: 10,
  },
  notificationText: {
    marginLeft: 10,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  notificationSubtitle: {
    fontSize: 16,
    color: "#888888",
  },
});

export default NotificationPage;
