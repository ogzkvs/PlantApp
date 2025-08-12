import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { useAppSelector } from '../../../store/hooks';
import Slider from '../../../components/slider/slider';

const QuestionsBanner: React.FC = () => {
  const { data, loading, error } = useAppSelector(state => state.questions);

  if (loading) {
    return <ActivityIndicator size="small" color="#28AF6E" />;
  }

  if (error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Slider data={data} title="Questions" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default QuestionsBanner;
