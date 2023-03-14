import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, View, Image, Animated } from 'react-native';

const MyActivityIndicator = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Image
        source={require('../images/Spinner.png')}
        style={{ width: 250, height: 300, transform: [{ rotate: spin }] }}
      />
    </View>
  );
};

export default MyActivityIndicator;