import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

type LoadingIndicatorProps = {
  size?: 'small' | 'large';
  color?: string;
};

const Loading: React.FC<LoadingIndicatorProps> = ({
  size = 'small',
  color = '#28AF6E',
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
