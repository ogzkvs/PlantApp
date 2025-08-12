import React from 'react';
import { View, FlatList } from 'react-native';
import { ImageBackground } from 'react-native';
import CustomText from '../customText';
import { CategoryType } from '../../types/categories';
import styles from './styles/categories';

type CategoriesProps = {
  data: CategoryType[];
};

const Categories: React.FC<CategoriesProps> = ({ data }) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: CategoryType;
    index: number;
  }) => {
    return (
      <View
        style={[{ marginLeft: index % 2 !== 0 ? 15 : 0 }, styles.itemContainer]}
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

  return (
    <FlatList
      scrollEnabled={false}
      numColumns={2}
      data={data}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => `categories-${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={styles.listContent}
    />
  );
};

export default Categories;
