import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import styles from './styles/tabNavigator';
import Diagnose from '../../screens/Diagnose';
import MyGarden from '../../screens/MyGarden';
import Icon from '../../components/icons';

type CustomCameraButtonProps = BottomTabBarButtonProps & {
  icon?: any;
};

const Tab = createBottomTabNavigator();

const CustomCameraButton: React.FC<CustomCameraButtonProps> = props => (
  <TouchableOpacity
    style={styles.cameraButtonWrapper}
    onPress={props.onPress}
    activeOpacity={0.7}
  >
    <View style={styles.cameraButtonContainer}>
      <View style={styles.cameraButton}>
        <Icon name="camera" size={25} color="#fff" />
      </View>
    </View>
  </TouchableOpacity>
);

const TabButtons = [
  {
    name: 'Home',
    component: Home,
    icon: 'home',
  },
  {
    name: 'Diagnose',
    component: Diagnose,
    icon: 'healthcare',
  },
  {
    name: 'Camera',
    component: Home,
    icon: 'home',
    customButton: true,
  },
  {
    name: 'MyGarden',
    component: MyGarden,
    icon: 'garden',
  },
  {
    name: 'Profile',
    component: Profile,
    icon: 'profile',
  },
];

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#28AF6E',
        tabBarInactiveTintColor: '#B0B0B0',
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}
    >
      {TabButtons.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              !tab.customButton && (
                <Icon
                  name={tab.icon}
                  size={24}
                  color={focused ? '#28AF6E' : '#B0B0B0'}
                />
              ),
            tabBarButton: tab.customButton
              ? props => <CustomCameraButton {...props} icon={tab.icon} />
              : undefined,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
