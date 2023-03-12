import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

const images = require.context('../images/', true);
const cardImages = {
  'Ace of Cups': images('./Ace_of_Cups.png'),
  'Two of Cups': images('./Two_of_Cups.png'),
  'Three of Cups': images('./Three_of_Cups.png'),
  'Four of Cups': images('./Four_of_Cups.png'),
  'Five of Cups': images('./Five_of_Cups.png'),
  'Six of Cups': images('./Six_of_Cups.png'),
  'Seven of Cups': images('./Seven_of_Cups.png'),
  'Eight of Cups': images('./Eight_of_Cups.png'),
  'Nine of Cups': images('./Nine_of_Cups.png'),
  'Ten of Cups': images('./Ten_of_Cups.png'),
  'Page of Cups': images('./Page_of_Cups.png'),
  'Knight of Cups': images('./Knight_of_Cups.png'),
  'Queen of Cups': images('./Queen_of_Cups.png'),
  'King of Cups': images('./King_of_Cups.png'),
  'Ace of Wands': images('./Ace_of_Wands.png'),
  'Two of Wands': images('./Two_of_Wands.png'),
  'Three of Wands': images('./Three_of_Wands.png'),
  'Four of Wands': images('./Four_of_Wands.png'),
  'Five of Wands': images('./Five_of_Wands.png'),
  'Six of Wands': images('./Six_of_Wands.png'),
  'Seven of Wands': images('./Seven_of_Wands.png'),
  'Eight of Wands': images('./Eight_of_Wands.png'),
  'Nine of Wands': images('./Nine_of_Wands.png'),
  'Ten of Wands': images('./Ten_of_Wands.png'),
  'Page of Wands': images('./Page_of_Wands.png'),
  'Knight of Wands': images('./Knight_of_Wands.png'),
  'Queen of Wands': images('./Queen_of_Wands.png'),
  'King of Wands': images('./King_of_Wands.png'),
  'Ace of Pentacles': images('./Ace_of_Pentacles.png'),
  'Two of Pentacles': images('./Two_of_Pentacles.png'),
  'Three of Pentacles': images('./Three_of_Pentacles.png'),
  'Four of Pentacles': images('./Four_of_Pentacles.png'),
  'Five of Pentacles': images('./Five_of_Pentacles.png'),
  'Six of Pentacles': images('./Six_of_Pentacles.png'),
  'Seven of Pentacles': images('./Seven_of_Pentacles.png'),
  'Eight of Pentacles': images('./Eight_of_Pentacles.png'),
  'Nine of Pentacles': images('./Nine_of_Pentacles.png'),
  'Ten of Pentacles': images('./Ten_of_Pentacles.png'),
  'Page of Pentacles': images('./Page_of_Pentacles.png'),
  'Knight of Pentacles': images('./Knight_of_Pentacles.png'),
  'Queen of Pentacles': images('./Queen_of_Pentacles.png'),
  'King of Pentacles': images('./King_of_Pentacles.png'),
  'Ace of Swords': images('./Ace_of_Swords.png'),
  'Two of Swords': images('./Two_of_Swords.png'),
  'Three of Swords': images('./Three_of_Swords.png'),
  'Four of Swords': images('./Four_of_Swords.png'),
  'Five of Swords': images('./Five_of_Swords.png'),
  'Six of Swords': images('./Six_of_Swords.png'),
  'Seven of Swords': images('./Seven_of_Swords.png'),
  'Eight of Swords': images('./Eight_of_Swords.png'),
  'Nine of Swords': images('./Nine_of_Swords.png'),
  'Ten of Swords': images('./Ten_of_Swords.png'),
  'Page of Swords': images('./Page_of_Swords.png'),
  'Knight of Swords': images('./Knight_of_Swords.png'),
  'Queen of Swords': images('./Queen_of_Swords.png'),
  'King of Swords': images('./King_of_Swords.png'),
  'Death': images('./Death.png'),
  'The Devil': images('./The_Devil.png'),
  'The Fool': images('./The_Fool.png'),
  'The Hanged Man' : images('./The_Hanged_Man.png'),
  'The Hermit': images('./The_Hermit.png'),
  'The High Priestess': images('./The_High_Priestess.png'),
  'The Hierophant': images('./The_Hierophant.png'),
  'The Lovers': images('./The_Lovers.png'),
  'The Magician': images('./The_Magician.png'),
  'The Moon': images('./The_Moon.png'),
  'The Star': images('./The_Star.png'),
  'The Sun': images('./The_Sun.png'),
  'The Tower': images('./The_Tower.png'),
  'The Wheel of Fortune': images('./The_Wheel_of_Fortune.png'),
  'The World': images('./The_World.png'),
  'Justice': images('./Justice.png'),
  'Strength': images('./Strength.png'),
  'Temperance': images('./Temperance.png'),
  'The Empress': images('./The_Empress.png'),
  'The Emperor': images('./The_Emperor.png'),
  'The Chariot': images('./The_Chariot.png'),
  'Judgement': images('./Judgement.png'),



};



export default function ThreeCardReading() {
  const [question, setQuestion] = useState('');
  const [reading, setReading] = useState({});
  const [newRating, setNewRating] = useState(null);

  const handleRatingChange = (text) => {
    setNewRating(text);
  };

  const handleRatingUpdate = () => {
    console.log(reading._id)
    fetch(`https://tarotnative.herokuapp.com/readings/${reading._id}/rating`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating: newRating }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then(data => {
        setNewRating(null);
        setReading({ ...reading, rating: data.rating });
      })
      .catch(error => {
        console.error(error);
      });
  };


  const fetchReading = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question, rating: 3 }),
      };
      const response = await fetch('https://tarotnative.herokuapp.com/threecard', requestOptions);
      const data = await response.json();
      setReading(data);
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
    <View>
      <View style={{margin: 10}}>
        <Text style={styles.questionBox}>Enter your question:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300 }} value={question} onChangeText={setQuestion}/>
        <Button title="Get Reading" onPress={fetchReading}/>
      </View>
      {reading && (
        <ScrollView style={{margin: 10}}>
          <View style={styles.card}>
            <Image style={styles.cardImage} source={cardImages[reading.past_card]} />
            <Text style={styles.cardTitle}>{reading.past_card}</Text>
            <Text style={styles.cardPosition}>Past Card</Text>
            <Text style={styles.cardInterpretation}>{reading.past_card_interpretation}</Text>
          </View>
          <View style={styles.card}>
            <Image style={styles.cardImage} source={cardImages[reading.present_card]} />
            <Text style={styles.cardTitle}>{reading.present_card}</Text>
            <Text style={styles.cardPosition}>Present Card</Text>
            <Text style={styles.cardInterpretation}>{reading.present_card_interpretation}</Text>
          </View>
          <View style={styles.card}>
            <Image style={styles.cardImage} source={cardImages[reading.future_card]} />
            <Text style={styles.cardTitle}>{reading.future_card}</Text>
            <Text style={styles.cardPosition}>Future Card</Text>
            <Text style={styles.cardInterpretation}>{reading.future_card_interpretation}</Text>
          </View>
          <View>
          <Text style={styles.generalPosition}>General Interpretation</Text>
          <Text style={styles.generalInterpretation}>{reading.general_interpretation}</Text>
          </View>
          <View>
            <TextInput
            placeholder="Rate this reading from 1-5"
            onChangeText={handleRatingChange}
            value={newRating}
            />
            <Button title="Update Rating" onPress={handleRatingUpdate} />
            {reading.rating && (
              <Text style={styles.generalPosition}> Current Rating: {reading.rating}</Text>
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  questionBox: {
    marginTop: 50,
  },
  card: {
    marginBottom: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 150,
    height: 225,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardInterpretation: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  cardPosition: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'gray',
  },
  general: {
    marginTop: 20,
  },
  generalPosition: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
  generalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  generalInterpretation: {
    fontStyle: 'italic',
    textAlign: 'center',
    },
});