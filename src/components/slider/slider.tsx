import { View, FlatList, TouchableOpacity, Linking } from 'react-native';
import { ImageBackground } from 'react-native';
import styles from './styles/slider';
import CustomText from '../customText/customText';

interface SliderItem {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

interface SliderProps {
  title?: string;
  data: Array<SliderItem>;
}

const Slider = (props: SliderProps) => {
  const renderItem = ({ item }: { item: SliderItem }) => {
    const content = (
      <ImageBackground
        source={{ uri: item?.image_uri }}
        style={styles.image}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.textContainer}>
          <CustomText style={styles.title}>{item?.title}</CustomText>
        </View>
      </ImageBackground>
    );

    return item.uri ? (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Linking.openURL(item.uri)}
      >
        {content}
      </TouchableOpacity>
    ) : (
      content
    );
  };

  const renderTitle = () => {
    if (props.title) {
      return (
        <CustomText fontFamily="Rubik-Medium" style={styles.header}>
          {props.title}
        </CustomText>
      );
    }
    return null;
  };

  const sortedData = [...props.data].sort((a, b) => a.order - b.order);

  return (
    <View style={styles.container}>
      {renderTitle()}
      <FlatList
        data={sortedData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `questions-${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Slider;
