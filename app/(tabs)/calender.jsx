import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    Alert.alert('Selected Date', `You selected ${day.dateString}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calendar</Text>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#4caf50',
          },
        }}
        theme={{
          selectedDayBackgroundColor: '#4caf50',
          todayTextColor: '#ff5722',
          arrowColor: '#4caf50',
        }}
      />
      <View style={styles.selectedDateContainer}>
        {selectedDate ? (
          <Text style={styles.selectedDateText}>Selected Date: {selectedDate}</Text>
        ) : (
          <Text style={styles.selectedDateText}>No Date Selected</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  selectedDateContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
  },
  selectedDateText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default CalendarPage;

