import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // İstersen buraya Text için stil ekleyebilirsin
  },
});
