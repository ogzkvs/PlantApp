import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import WelcomeBanner from '../components/welcomeBanner';
import styles from '../styles/home';
import SearchBanner from '../components/searchBanner';
import PremiumBanner from '../components/premiumBanner';
import QuestionsBanner from '../components/questionsBanner';
import CategoriesBanner from '../components/categoriesBanner';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <ImageBackground
            source={require('../../../assets/images/background.png')}
            style={styles.backgroundImage}
          >
            <WelcomeBanner />
            <SearchBanner />
          </ImageBackground>
          <PremiumBanner />
          <QuestionsBanner />
          <CategoriesBanner />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;
