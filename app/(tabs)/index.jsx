import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import taskData from "../api/tasks/tasks.json";


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
    marginTop: 450,
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
});

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTasks(taskData);
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

        {error && <Text style={{ color: 'red', marginLeft: 30 }}>{error}</Text>}

        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={renderTask}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => console.log("See all tasks pressed")}>
          <Text style={{ color: "#3b3b3b" }}>See all</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;
