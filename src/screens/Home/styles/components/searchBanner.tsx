import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2,
    borderRadius: 12,
    borderColor: '#3C3C4340',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 16,
    color: '#000',
    marginLeft: 8,
    height: 44,
  },
});
