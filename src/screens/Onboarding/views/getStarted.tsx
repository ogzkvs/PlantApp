import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/Stacks/main';
import styles from '../styles/getStarted';

type Props = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

const GetStarted: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.titleBold}>PlantApp</Text>
      </View>

      <Text style={styles.description}>
        Identify more than 3000+ plants and 88% accuracy.
      </Text>
      <Image
        source={require('../../../assets/images/started.png')}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Onboarding')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.policyContainer}>
        <Text style={styles.policy}>
          By tapping next, you are agreeing to PlantID Terms of Use & Privacy
          Policy.
        </Text>
      </View>
    </View>
  );
};

export default GetStarted;
