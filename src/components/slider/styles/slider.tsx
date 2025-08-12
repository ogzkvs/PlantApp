import {
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const imageWidth = width * 0.6;
const imageHeight = 164;
const textHeight = imageHeight - 100;
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
    marginVertical: 20,
  },
  image: {
    width: imageWidth,
    aspectRatio: aspectRatio,
    marginRight: 10,
    justifyContent: 'flex-end',
  },
  textContainer: {
    justifyContent: 'center',
    paddingLeft: 14,
    paddingRight: 5,
    height: textHeight,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  listContent: {
    marginVertical: 10,
  },
  header: {
    color: '#13231B',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
  },
});
