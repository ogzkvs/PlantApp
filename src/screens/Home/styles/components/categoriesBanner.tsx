import {
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const imageWidth = width / 2 - 40;
const imageHeight = 152;
const aspectRatio = imageWidth / imageHeight;

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  textContainer: ViewStyle;
  listContent: ViewStyle;
  header: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
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
    fontWeight: 500,
    lineHeight: 21,
  },
  listContent: {
    marginVertical: 10,
    flex: 1,
  },
  header: {
    color: '#13231B',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 500,
  },
});
