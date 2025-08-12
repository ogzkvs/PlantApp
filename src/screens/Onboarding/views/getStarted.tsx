import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/Stacks/main';
import styles from '../styles/getStarted';
import CustomText from '../../../components/customText';

type Props = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

const GetStarted: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <CustomText style={styles.title}>
          Welcome to <CustomText style={styles.titleBold}>PlantApp</CustomText>
        </CustomText>
        <CustomText style={styles.description}>
          Identify more than 3000+ plants and 88% accuracy.
        </CustomText>
      </View>
      <Image
        source={require('../../../assets/images/started.png')}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Onboarding')}
      >
        <CustomText fontFamily="Sf-Pro-Bold" style={styles.buttonText}>
          Get Started
        </CustomText>
      </TouchableOpacity>
      <View style={styles.policyContainer}>
        <CustomText style={styles.policy}>
          By tapping next, you are agreeing to PlantID{' '}
          <CustomText style={{ textDecorationLine: 'underline' }}>
            Terms of Use & Privacy Policy.
          </CustomText>
        </CustomText>
      </View>
    </View>
  );
};

export default GetStarted;
