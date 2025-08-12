import React from 'react';
import {
  View,
  ImageBackground,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from '../styles/components/categoriesBanner';
import { useAppSelector } from '../../../store/hooks';
import { CategoryType } from '../../../types/categories';
import CustomText from '../../../components/customText';

const CategoriesBanner: React.FC = () => {
  const { data, loading, error } = useAppSelector(state => state.categories);

  const renderItem = ({
    item,
    index,
  }: {
    item: CategoryType;
    index: number;
  }) => {
    return (
      <View
        style={{
          flex: 1,
          marginBottom: 15,
          marginLeft: index % 2 !== 0 ? 35 : 0,
        }}
      >
        <ImageBackground
          source={{ uri: item?.image?.url }}
          style={styles.image}
          imageStyle={{
            borderRadius: 12,
            borderWidth: 0.5,
            borderColor: '#29BB892E',
          }}
        >
          <View style={styles.textContainer}>
            <CustomText fontFamily="Rubik-Medium" style={styles.title}>
              {item?.title}
            </CustomText>
          </View>
        </ImageBackground>
      </View>
    );
  };

  if (loading) {
    return <ActivityIndicator size="small" color="#28AF6E" />;
  }

  if (error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        numColumns={2}
        data={data as CategoryType[]}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `categories-${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default CategoriesBanner;
