import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  greeting: TextStyle;
  subGreeting: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    padding: 20,
  },
  greeting: {
    fontSize: 16,
    fontWeight: '400',
    color: '#13231B',
  },
  subGreeting: {
    fontSize: 24,
    fontWeight: '500',
    color: '#13231B',
    lineHeight: 30,
    marginTop: 4,
  },
});
