import React from 'react';
import {StyleSheet, View} from 'react-native';
import ThreeCardReading from './components/ThreeCardReading';
import ThreeCardReadingForm from './components/ThreeCardReadingForm';

export default function App() {
  const [reading, setReading] = React.useState(null);

  const handleReadingCreated = (newReading) => {
    setReading(newReading);
  };

  return (
    <View style={styles.container}>
      <ThreeCardReadingForm onReadingCreated={handleReadingCreated} />
      {reading && <ThreeCardReading reading={reading} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});