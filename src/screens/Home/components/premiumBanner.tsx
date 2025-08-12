import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/components/premiumBanner';
import Icon from '../../../components/icons';
import CustomText from '../../../components/customText';

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
              <CustomText style={styles.badgeText}>1</CustomText>
            </View>
          </View>
          <View style={styles.textContainer}>
            <CustomText fontFamily="Sf-Pro-Bold" style={styles.text}>
              Free Premium Available
            </CustomText>
            <CustomText fontFamily="Sf-Pro-Regular" style={styles.upgradeText}>
              Tap to upgrade your account!
            </CustomText>
          </View>
          <Icon name="arrow" size={24} color="#D0B070" />
        </View>
      </View>
    </View>
  );
};

export default PremiumBanner;
