import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  ImageBackground,
} from 'react-native';

import styles from '../styles/paywall';
import Icon from '../../../components/icons';
import CustomText from '../../../components/customText';

const features = [
  {
    id: 'unlimited',
    icon: 'scanner',
    title: 'Unlimited',
    sub: 'Plant Identify',
  },
  {
    id: 'faster',
    icon: 'faster',
    title: 'Faster',
    sub: 'Process',
  },
  {
    id: 'detailed',
    icon: 'detail',
    title: 'Detailed',
    sub: 'Plant care',
  },
];

const plans = [
  {
    id: 'month',
    title: '1 Month',
    sub: '$2.99/month, auto renewable',
    badge: null,
  },
  {
    id: 'year',
    title: '1 Year',
    sub: 'First 3 days free, then $529.99/year',
    badge: 'Save 50%',
  },
];

const termsLinks = ['Terms', 'Privacy', 'Restore'];

const PaywallScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState<'month' | 'year'>('year');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate('MainApp')}
      >
        <View style={styles.closeButtonContainer}>
          <Icon name="close" size={12} color="#fff" />
        </View>
      </TouchableOpacity>
      <View style={styles.plantImageWrapper}>
        <ImageBackground
          source={require('../../../assets/images/paywall.png')}
          style={styles.plantImage}
        >
          <View style={styles.plantContainer}>
            <View style={styles.titleWrapper}>
              <CustomText style={styles.title}>
                <CustomText
                  fontFamily="Visby-Extra-Bold"
                  style={styles.plantAppText}
                >
                  PlantApp{' '}
                </CustomText>
                <CustomText fontFamily="Rubik-Bold" style={styles.premiumText}>
                  Premium
                </CustomText>
              </CustomText>
              <CustomText style={styles.subTitle}>
                Access All Features
              </CustomText>
            </View>
            <ScrollView
              horizontal
              style={styles.featuresRow}
              showsHorizontalScrollIndicator={false}
            >
              {features.map(item => (
                <View key={item.id} style={styles.featureBox}>
                  <View style={styles.featureWrapper}>
                    <View style={styles.featureIconWrapper}>
                      <Icon name={item.icon} size={18} color="#fff" />
                    </View>
                    <CustomText style={styles.featureTitle}>
                      {item.title}
                    </CustomText>
                    <CustomText style={styles.featureSub}>
                      {item.sub}
                    </CustomText>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.plansContainer}>
        {plans.map(plan => (
          <Pressable
            key={plan.id}
            style={[
              styles.planBox,
              selectedPlan === plan.id && styles.planBoxSelected,
            ]}
            onPress={() => setSelectedPlan(plan.id as 'month' | 'year')}
          >
            <View
              style={
                selectedPlan === plan.id
                  ? styles.selectedRadioCircle
                  : styles.radioCircle
              }
            >
              {selectedPlan === plan.id && <View style={styles.selectedRb} />}
            </View>
            <View>
              <CustomText style={styles.planTitle}>{plan.title}</CustomText>
              <CustomText style={styles.planSub}>{plan.sub}</CustomText>
            </View>
            {plan.badge && (
              <View style={styles.saveBadge}>
                <CustomText style={styles.saveBadgeText}>
                  {plan.badge}
                </CustomText>
              </View>
            )}
          </Pressable>
        ))}
      </View>

      <TouchableOpacity style={styles.subscribeButton}>
        <CustomText style={styles.subscribeButtonText}>
          Try free for 3 days
        </CustomText>
      </TouchableOpacity>

      <CustomText style={styles.bottomText}>
        After the 3-day free trial period you'll be charged $274.99 per year
        unless you cancel before the trial expires. Yearly Subscription is
        Auto-Renewable
      </CustomText>

      <View style={styles.termsRow}>
        {termsLinks.map(item => (
          <CustomText key={item} style={styles.termsText}>
            {item}
          </CustomText>
        ))}
      </View>
    </ScrollView>
  );
};

export default PaywallScreen;
