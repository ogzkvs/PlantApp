import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';

interface Style {
  icon: ImageStyle;
  cameraButtonWrapper: ViewStyle;
  cameraButtonContainer: ViewStyle;
  cameraButton: ViewStyle;
  cameraIcon: ImageStyle;
}

export default StyleSheet.create<Style>({
  icon: {
    width: 25,
    height: 25,
  },
  cameraButtonWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#2CCC80',
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
  },
  cameraButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#28AF6E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    width: 30,
    height: 30,
  },
});
