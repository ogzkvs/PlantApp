import {
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const padding = 30;
const imageWidth = width / 2 - padding;
const imageHeight = 152;
const aspectRatio = imageWidth / imageHeight;

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  textContainer: ViewStyle;
  listContent: ViewStyle;
  itemContainer: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    marginBottom: 15,
  },
  image: {
    width: imageWidth,
    aspectRatio: aspectRatio,
  },
  textContainer: {
    padding: 14,
  },
  title: {
    color: '#13231B',
    fontSize: 16,
    lineHeight: 21,
  },
  listContent: {
    marginVertical: 10,
    flex: 1,
  },
});
