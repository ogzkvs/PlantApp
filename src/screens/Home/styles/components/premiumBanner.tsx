import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

interface Styles {
  banner: ViewStyle;
  wrapper: ViewStyle;
  text: TextStyle;
  upgradeText: TextStyle;
  textContainer: ViewStyle;
  icon: ImageStyle;
  arrow: ImageStyle;
  container: ViewStyle;
  badge: ViewStyle;
  messageContainer: ViewStyle;
  badgeText: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    marginTop: 25,
  },
  banner: {
    backgroundColor: '#24201A',
    paddingVertical: 14,
    borderRadius: 12,
    width: '100%',
  },
  wrapper: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '#E5C990',
    fontWeight: '700',
    fontSize: 16,
  },
  upgradeText: {
    color: '#FFDE9C',
    fontWeight: '400',
    fontSize: 13,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 32,
  },
  arrow: {
    width: 24,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: '#E82C13E5',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  messageContainer: {width: 40, height: 40, position: 'relative'},
});
