import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const ProfilePage = () => {
  const [name, setName] = useState('Sarah Smith');
  const [email, setEmail] = useState('sarah@gmail.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [username, setUsername] = useState('SarahS');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [saveLoginInfo, setSaveLoginInfo] = useState(false);

  const toggleSwitch = (setter, value) => {
    setter(!value);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Image and Username */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/images/Girlpfp.jpg')} 
          style={styles.profileImage}
        />
        <TextInput
          style={styles.usernameInput}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Info Box */}
      <View style={styles.infoBox}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      {/* Settings Box */}
      <View style={styles.settingsBox}>
        <View style={styles.settingItem}>
          <Text style={styles.label}>Dark Mode:</Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => toggleSwitch(setIsDarkMode, isDarkMode)}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.label}>Notifications:</Text>
          <Switch
            value={notifications}
            onValueChange={() => toggleSwitch(setNotifications, notifications)}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.label}>Save Login Info:</Text>
          <Switch
            value={saveLoginInfo}
            onValueChange={() => toggleSwitch(setSaveLoginInfo, saveLoginInfo)}
          />
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Reset Password Clicked!')}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Logged Out!')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  usernameInput: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: 'white',
    width: '80%',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoBox: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f8f9fa',
  },
  settingsBox: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 2,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfilePage;