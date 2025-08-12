import React from 'react';
import { View } from 'react-native';
import styles from '../../../components/categories/styles/categories';
import { useAppSelector } from '../../../store/hooks';
import Categories from '../../../components/categories/categories';
import Loading from '../../../components/loading/loading';

const CategoriesBanner: React.FC = () => {
  const { data, loading, error } = useAppSelector(state => state.categories);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Categories data={data} />
    </View>
  );
};

export default CategoriesBanner;
