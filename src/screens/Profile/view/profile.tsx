import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/profile';
import { Button } from 'react-native';
import { useAppDispatch } from '../../../store/hooks';
import { resetPageStatusToOnboarding } from '../../../store/slices/settingsSlice';

const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Reset"
        onPress={() => dispatch(resetPageStatusToOnboarding())}
      />
    </View>
  );
};

export default ProfileScreen;
