import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const HabitTracker = () => {
  const [habits, setHabits] = useState([
    { id: '1', title: 'Drink Water', completed: false },
    { id: '2', title: 'Exercise', completed: false },
    { id: '3', title: 'Read a Book', completed: false },
  ]);


  const toggleHabit = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Habit Tracker</Text>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.habitItem,
              item.completed ? styles.completed : styles.notCompleted,
            ]}
            onPress={() => toggleHabit(item.id)}
          >
            <Text style={styles.habitText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
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
  habitItem: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  completed: {
    backgroundColor: '#c8e6c9',
  },
  notCompleted: {
    backgroundColor: '#ffe0b2',
  },
  habitText: {
    fontSize: 18,
    color: '#333',
  },
});

export default HabitTracker;
