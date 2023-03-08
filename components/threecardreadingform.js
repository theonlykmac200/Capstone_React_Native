import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {getCookie} from './utils';

function ThreeCardReadingForm({onReadingCreated}) {
    const [question, setQuestion] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        console.log('question: ' , question)
        const response = await fetch('http://localhost:8000/api/threecardreading/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
            },
            body: JSON.stringify({question}),
        });
        const data = await response.json();
        console.log(data);
        onReadingCreated(data.reading);
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
        </View>
    );
}

export default ThreeCardReadingForm;