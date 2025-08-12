import React from 'react';
import { View } from 'react-native';
import styles from '../styles/components/welcomeBanner';
import CustomText from '../../../components/customText/customText';

const WelcomeBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.greeting}>Hi, plant lover!</CustomText>
      <CustomText style={styles.subGreeting}>Good Afternoon! ⛅</CustomText>
    </View>
  );
};

export default WelcomeBanner;
