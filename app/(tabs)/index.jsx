import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import taskData from "../api/tasks/tasks.json";
import habitData from "../api/tasks/habits.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    top: 400,
    right: 50,
    width: 80,
    height: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    elevation: 5,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "500",
    color: "#fff",
    position: "absolute",
    top: 150,
    left: 30,
  },
  subHeaderText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#fff",
    position: "absolute",
    top: 220,
    left: 30,
  },
  tasksContainer: {
    marginHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 10,
    padding: 15,
  },
  taskItem: {
    marginBottom: 15,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  taskDetails: {
    fontSize: 14,
    color: "#ccc",
  },
    // Existing styles...
  
    habitsList: {
      marginTop: 150, // Adjust this value to position habits correctly
      paddingHorizontal: 20,
      paddingBottom: 50,
    },
    habitCard: {
      backgroundColor: "#f0f8ff", // Light blue background
      borderRadius: 15,
      padding: 15,
      marginRight: 10,
      width: 120, // Fixed width for each card
      alignItems: "center",
      elevation: 5, // Shadow effect for Android
      shadowColor: "#000", // Shadow effect for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    habitIcon: {
      width: 50,
      height: 50,
      marginBottom: 10,
    },
    habitTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 5,
      textAlign: "center",
    },
    habitCount: {
      fontSize: 14,
      color: "#666",
      textAlign: "center",
    },
});

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [habits, setHabits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setTasks(taskData.slice(0, 3)); // Display only the first 3 tasks
      setHabits(habitData.slice(0, 2)); // Display only the first 2 habits
    } catch (err) {
      setError("Failed to load data.");
    }
  }, []);

  const renderTask = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskDetails}>
        {item.date} {item.month} • {item.time}
      </Text>
      <Text style={styles.taskDetails}>Status: {item.status}</Text>
      <Text style={styles.taskDetails}>
        Joining: {item.joiningPeople.join(", ")}
      </Text>
    </View>
  );

  const renderHabit = ({ item }) => {
    const habitIcons = {
      "Drink Water": require("../../assets/images/water.png"),
      "Eat Fruits": require("../../assets/images/fruit.png"),
    };

    return (
      <View style={styles.habitCard}>
        <Image
          source={habitIcons[item.title]} // Dynamically load icons
          style={styles.habitIcon}
          resizeMode="contain"
        />
        <Text style={styles.habitTitle}>{item.title}</Text>
        <Text style={styles.habitCount}>{item.count} </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.image}
        resizeMode="cover"
      >
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/user.png")}
            accessibilityLabel="User profile icon"
            style={{
              position: "absolute",
              width: 45,
              height: 45,
              bottom: 340,
              right: 20,
            }}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>Good Morning,</Text>
        <Text style={styles.subHeaderText}>Habits</Text>
        <View>
          <View style={styles.habitsList}>
            <FlatList
              data={habits}
              renderItem={renderHabit}
              keyExtractor={(item, index) => index.toString()}
              horizontal // Enables horizontal scrolling
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {error && <Text style={{ color: "red", marginLeft: 30 }}>{error}</Text>}

        {/* Tasks Section */}
        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={renderTask}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("See all tasks pressed")}
        >
          <Text style={{ color: "#3b3b3b" }}>See all</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;
