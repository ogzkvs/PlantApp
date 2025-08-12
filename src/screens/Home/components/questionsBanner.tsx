import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppSelector } from '../../../store/hooks';
import Slider from '../../../components/slider/slider';
import Loading from '../../../components/loading/loading';

const QuestionsBanner: React.FC = () => {
  const { data, loading, error } = useAppSelector(state => state.questions);

  if (loading) {
    return <Loading />;
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
