import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
  ImageBackground,
} from 'react-native';

import styles from '../styles/paywall';
import Icon from '../../../components/icons';

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
              <Text style={styles.title}>
                <Text style={{ fontWeight: 'bold' }}>PlantApp </Text>Premium
              </Text>
              <Text style={styles.subTitle}>Access All Features</Text>
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
                    <Text style={styles.featureTitle}>{item.title}</Text>
                    <Text style={styles.featureSub}>{item.sub}</Text>
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
              <Text style={styles.planTitle}>{plan.title}</Text>
              <Text style={styles.planSub}>{plan.sub}</Text>
            </View>
            {plan.badge && (
              <View style={styles.saveBadge}>
                <Text style={styles.saveBadgeText}>{plan.badge}</Text>
              </View>
            )}
          </Pressable>
        ))}
      </View>

      <TouchableOpacity style={styles.subscribeButton}>
        <Text style={styles.subscribeButtonText}>Try free for 3 days</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        After the 3-day free trial period you'll be charged $274.99 per year
        unless you cancel before the trial expires. Yearly Subscription is
        Auto-Renewable
      </Text>

      <View style={styles.termsRow}>
        {termsLinks.map(item => (
          <Text key={item} style={styles.termsText}>
            {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default PaywallScreen;
