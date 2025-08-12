import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Diagnose: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diagnose Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default Diagnose;
