import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/components/premiumBanner';
import Icon from '../../../components/icons';

const PremiumBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.wrapper}>
          <View style={styles.messageContainer}>
            <Image
              source={require('../../../assets/images/message.png')}
              style={styles.icon}
            />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Free Premium Available</Text>
            <Text style={styles.upgradeText}>Tap to upgrade your account!</Text>
          </View>
          <Icon name="arrow" size={24} color="#D0B070" />
        </View>
      </View>
    </View>
  );
};

export default PremiumBanner;
