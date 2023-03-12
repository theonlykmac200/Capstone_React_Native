import React from 'react';
import { StyleSheet, View } from 'react-native';
import ThreeCardReading from './components/ThreeCardReading';

export default function App() {
  return (
    <View style={styles.container}>
      <ThreeCardReading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
