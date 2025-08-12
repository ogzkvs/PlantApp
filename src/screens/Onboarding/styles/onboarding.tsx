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
  dotContainer: ViewStyle;
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
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 35,
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
  buttonText: { color: '#fff', fontSize: 15, lineHeight: 24 },
});
