import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../Tabs/main';
import OnboardingScreen from '../../screens/Onboarding/views/onboarding';
import { useAppSelector } from '../../store/hooks';
import Paywall from '../../screens/Paywall';
import { GetStarted } from '../../screens/Onboarding';

export type RootStackParamList = {
  Onboarding: undefined;
  MainApp: undefined;
  GetStarted: undefined;
  Paywall: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC<{}> = ({}) => {
  const { pageStatus } = useAppSelector(state => state.settings);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {pageStatus === 'onboarding' ? (
        <>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Onboarding">
            {props => <OnboardingScreen {...props} />}
          </Stack.Screen>
        </>
      ) : (
        <>
          <Stack.Screen name="Paywall" component={Paywall} />
          <Stack.Screen name="MainApp" component={TabNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
