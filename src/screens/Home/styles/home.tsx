import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  safeArea: ViewStyle;
  container: ViewStyle;
  keyboardAvoidingView: ViewStyle;
  backgroundImage: ViewStyle;
}

export default StyleSheet.create<Styles>({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
  },
});
