import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  titleBold: TextStyle;
  description: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  policyContainer: ViewStyle;
  policy: TextStyle;
  row: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#13231B',
  },
  titleBold: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#13231B',
    marginLeft: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#13231BB2',
  },
  button: {
    backgroundColor: '#28AF6E',
    paddingVertical: 18,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 15, fontWeight: '700' },
  policyContainer: {
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  policy: {
    fontSize: 11,
    fontWeight: '400',
    color: '#597165B2',
    textAlign: 'center',
  },
});
