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
  topSection: ViewStyle;
  plantImageWrapper: ViewStyle;
  plantImage: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
  featuresRow: ViewStyle;
  featureBox: ViewStyle;
  featureIconWrapper: ViewStyle;
  featureIcon: ImageStyle;
  featureWrapper: ViewStyle;
  featureTitle: TextStyle;
  featureSub: TextStyle;
  plansContainer: ViewStyle;
  titleWrapper: ViewStyle;
  planBox: ViewStyle;
  planBoxSelected: ViewStyle;
  radioCircle: ViewStyle;
  selectedRadioCircle: ViewStyle;
  selectedRb: ViewStyle;
  planTitle: TextStyle;
  planSub: TextStyle;
  saveBadge: ViewStyle;
  saveBadgeText: TextStyle;
  subscribeButton: ViewStyle;
  subscribeButtonText: TextStyle;
  bottomText: TextStyle;
  termsRow: ViewStyle;
  termsText: TextStyle;
  closeButtonContainer: ViewStyle;
  closeButtonText: TextStyle;
  closeButton: ViewStyle;
  plantContainer: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#101E17',
    paddingHorizontal: 20,
  },
  topSection: {
    marginBottom: 30,
  },
  plantImageWrapper: {
    alignItems: 'center',
  },
  plantImage: {
    width: width,
    height: height / 1.5,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'normal',
  },
  subTitle: {
    fontSize: 17,
    color: '#rgba(255, 255, 255, 0.7)',
    marginTop: 5,
  },
  featuresRow: {
    paddingVertical: 10,
    width: width - 20,
  },
  featureBox: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 12,
    marginRight: 18,
    width: width * 0.4,
  },
  featureIconWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    justifyContent: 'center',
    width: 36,
    height: 36,
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 8,
  },
  featureIcon: {
    width: 18,
    height: 18,
    tintColor: '#fff',
  },
  featureWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  featureTitle: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    marginTop: 5,
  },
  featureSub: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 3,
  },
  plansContainer: {
    marginBottom: 30,
  },
  titleWrapper: {
    marginBottom: 20,
  },
  planBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    position: 'relative',
    borderColor: '#3C4843',
    borderWidth: 1,
  },
  planBoxSelected: {
    borderColor: '#28AF6E',
    borderWidth: 2,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  selectedRadioCircle: {
    height: 20,
    width: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    backgroundColor: 'rgba(40, 175, 110, 1)',
  },
  selectedRb: {
    width: 7,
    height: 7,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  planTitle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
  planSub: {
    color: '#ccc',
    fontSize: 12,
  },
  saveBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#28AF6E',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 20,
  },
  saveBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  subscribeButton: {
    backgroundColor: '#28AF6E',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  subscribeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomText: {
    fontSize: 10,
    color: '#777',
    marginHorizontal: 10,
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 14,
  },
  termsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#555',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  termsText: {
    color: '#aaa',
    fontSize: 12,
  },
  closeButton: {
    position: 'absolute',
    top: 70,
    right: 1,
    zIndex: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
  closeButtonContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
