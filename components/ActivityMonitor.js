import React from 'react';
import { ActivityIndicator, View, Image } from 'react-native';

const MyActivityIndicator = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image
      source={require('../images/Spinner.png')}
      style={{ width: 50, height: 50 }}
    />
  </View>
);

export default MyActivityIndicator;
