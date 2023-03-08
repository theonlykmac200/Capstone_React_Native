import React from 'react';
import { getCookie } from './utils';

function ThreeCardReading({ reading, onDelete, onUpdateRating}) {
    const [ratingInputValue, setRatingInputValue] = useState(reading.rating); // using reading.rating as the initial value because default value is hardcoded to 3.  Not sure this is right and if it doesn't update I should go with empty string first.  Learing from webapp is that the update won't update from a null value.
    const handleDeleteReading = async () => {
        const response= await fetch('http://localhost:8000/three-card-reading/${reading.id}/delete/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
            },
        });
        const data = await response.json();
        console.log(data);
        onDelete();
    };

    const handleUpdateRating = async () => {
        console.log('Updating rating');
        const rating = parseInt(ratingInputValue)
        const response = await fetch('http://localhost:8000/update-three-card-reading-rating/${reading.id}/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
            },
            body: JSON.stringify({ rating }),
        });
        const data = await response.json();
        console.log(data);
        onUpdateRating(data.reading);
        };

    return (
        <View>
            <Text>{reading.question}</Text>
            <Text> Your Three Card Reading</Text>
            <View>
                <Text>{reading.past_card.name}</Text>
                <Text>{reading.past_card_interpertation}</Text>
            </View>
            <View>
                <Text>{reading.present_card.name}</Text>
                <Text>{reading.present_card_interpertation}</Text>
            </View>
            <View>
                <Text>{reading.future_card.name}</Text>
                <Text>{reading.future_card_interpertation}</Text>
            </View>
            <View>
                <Text>General Interpertation</Text>
                <Text>{reading.general_interpertation}</Text>
            </View>
            <View>
                <Button title="Burn this reading" onPress={handleDeleteReading} />
            </View>
            <View>
                <TextInput 
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="Enter a rating between 1 and 5"
                    onChangeText={setRatingInputValue}
                    keyboardType="numeric"
                    value={ratingInputValue}
                />
                <Button title="Update Rating" onPress={handleUpdateRating} />
            </View>
        </View>
           

    );
}

export default ThreeCardReading;