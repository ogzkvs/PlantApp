import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  Dimensions,
  ImageStyle,
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface Styles {
  container: ViewStyle;
  slide: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  description: TextStyle;
  dot: ViewStyle;
  activeDot: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

const imageHeight = height * 0.7;

export default StyleSheet.create<Styles>({
  container: { flex: 1, backgroundColor: '#fff' },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  image: { width: width, height: imageHeight },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#28AF6E',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
  dot: {
     backgroundColor: 'rgba(19, 35, 27, 0.25)',
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#13231B',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  button: {
    backgroundColor: '#28AF6E',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginHorizontal: 20,
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
