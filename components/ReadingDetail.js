import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ReadingDetail = ({ route }) => {
  const { reading } = route.params;
  const [newRating, setNewRating] = useState(null);
  const [updatedRating, setUpdatedRating] = useState(null);

  const handleRatingChange = (text) => {
    setNewRating(text);
  };

  const handleRatingUpdate = () => {
    fetch(`https://tarotnative.herokuapp.com/readings/${reading._id}/rating`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ rating: newRating })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update rating.');
        }
        return response.json();
      })
      .then(data => {
        setNewRating(null);
        setUpdatedRating(data.rating);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View>
      <Text style={{fontSize: 18}}>Rating: {updatedRating ?? reading.rating}</Text>
      <TextInput
        placeholder="Enter a new rating from 1-5"
        keyboardType="numeric"
        onChangeText={handleRatingChange}
        value={newRating}
      />
      <Button title="Update Rating" onPress={handleRatingUpdate} />
    </View>
  );
}

export default ReadingDetail;
