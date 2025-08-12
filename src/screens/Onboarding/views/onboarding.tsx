import React, { useRef, useState } from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/Stacks/main';
import { useAppDispatch } from '../../../store/hooks';
import { setPageStatusToMain } from '../../../store/slices/settingsSlice';
import styles from '../styles/onboarding';
import CustomText from '../../../components/customText';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'> & {};

const { width } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    titleImage: require('../../../assets/images/onboardingtitle1.png'),
    image: require('../../../assets/images/onboarding1.png'),
  },
  {
    id: 2,
    titleImage: require('../../../assets/images/onboardingtitle2.png'),
    image: require('../../../assets/images/onboarding2.png'),
  },
  {
    id: 3,
    paywall: true,
  },
];

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useAppDispatch();
  const flatListRef = useRef<FlatList>(null);

  const handleButtonPress = () => {
    if (activeIndex === slides.length - 1) {
      dispatch(setPageStatusToMain());
    } else {
      flatListRef.current?.scrollToOffset({
        offset: (activeIndex + 1) * width,
        animated: true,
      });
    }
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
      const lastIndex = slides.length - 1;
      const lastItem = viewableItems.find(
        (item: any) => item.index === lastIndex && item.isViewable,
      );
      if (lastItem) {
        dispatch(setPageStatusToMain());
      }
    }
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 20 }}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            {item.paywall ? null : (
              <>
                <Image source={item.titleImage} resizeMode="contain" />
                <ImageBackground
                  source={item.image}
                  style={styles.image}
                  resizeMode="contain"
                >
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleButtonPress}
                  >
                    <CustomText
                      fontFamily="Sf-Pro-Bold"
                      style={styles.buttonText}
                    >
                      Continue
                    </CustomText>
                  </TouchableOpacity>
                </ImageBackground>
              </>
            )}
          </View>
        )}
      />
      <View style={styles.dotContainer}>
        {slides.map((_, index) => (
          <View
            key={index.toString()}
            style={{
              width: index === activeIndex ? 10 : 6,
              height: index === activeIndex ? 10 : 6,
              borderRadius: index === activeIndex ? 5 : 3,
              backgroundColor:
                index === activeIndex ? '#13231B' : 'rgba(19, 35, 27, 0.25)',
              marginHorizontal: 6,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default OnboardingScreen;
