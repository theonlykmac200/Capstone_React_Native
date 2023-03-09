import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {getCookie} from './Utils';

function ThreeCardReadingForm({onReadingCreated}) {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [reading, setReading] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    setReading(null);
    console.log('question: ' , question)
    try {
      const response = await fetch('http://localhost:8000/api/threecardreading/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({question}),
      });
      const data = await response.json();
      console.log(data);
      setReading(data.reading);
      onReadingCreated(data.reading);
    } catch (e) {
      console.error(e);
      setError('An error occurred. Please try again later.');
    }
    setIsLoading(false);
  };

  return (
    <View>
      <Text>Ask the Cards your question:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setQuestion(text)}
        value={question}
      />
      <Button title="Ask the Cards" onPress={handleSubmit}/>
      {isLoading && <Spinner/>}
      {error && <Text style={{color: 'red'}}>{error}</Text>}
      {reading && (
        <View>
          <Text>Reading:</Text>
          <Text>{reading}</Text>
        </View>
      )}
    </View>
  );
}

export default ThreeCardReadingForm;