import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/components/welcomeBanner';

const WelcomeBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi, plant lover!</Text>
      <Text style={styles.subGreeting}>Good Afternoon! ⛅</Text>
    </View>
  );
};

export default WelcomeBanner;
