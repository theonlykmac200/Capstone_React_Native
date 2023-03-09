import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      // Save token to AsyncStorage
      // Redirect to main screen
    } catch (e) {
      console.error(e);
      // Display error message to user
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Log in" onPress={handleSubmit} />
    </View>
  );
}

export default LoginScreen;