import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ThreeCardReadingForm from './components/ThreeCardReadingForm';

function threecardreading() {
  const [reading, setReading] = useState(null);

  const handleReadingCreated = (newReading) => {
    setReading(newReading);
  };

  return (
    <View>
      {reading ? (
        <View>
          <Text>Three Card Reading Results:</Text>
          <Text>{reading}</Text>
        </View>
      ) : (
        <ThreeCardReadingForm onReadingCreated={handleReadingCreated} />
      )}
    </View>
  );
}

export default ThreeCardReading;
