import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.image}
        resizeMode="cover"
      >
        <Image
          source={require("../../assets/images/user.png")}
          style={{
            position: "absolute",
            width: 45,
            height: 45,
            top: 50,
            right: 20,
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "medium",
            color: "#fff",
            position: "absolute",
            top: 150,
            left: 30,
          }}
        >
          Good Morning,
        </Text>
        <Text
          style={{
            fontSize: 27,
            fontWeight: "bold",
            color: "#fff",
            position: "absolute",
            top: 220,
            left: 30,
          }}
        >
          Habits
        </Text>
        {/*Habits go here */}

        <Text
          style={{
            fontSize: 27,
            fontWeight: "medium",
            color: "#fff",
            position: "absolute",
            top: 400,
            left: 30,
          }}
        >
          Today's Tasks
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Home;
