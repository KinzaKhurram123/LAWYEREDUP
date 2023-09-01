import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardStack from './DashboardStack';
import {COLORS} from '../constant';
import home_icon from '../assest/icons/home_icon';
import Notification from '../screens/Notification';
import {Icons} from '../Component';
import bell_icon from '../assest/icons/bell_icon';
import { View } from 'react-native';
import DrawerNavigation from './Drawer';

const Tab_navigation = ({navigation,route}) => {
  const email = route.pramas

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    initialRouteName='DrawerNavigation'
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.secondary_with_opactity,
        },
      }}>
      <Tab.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => {
            return (
              <View>
                <Icons name={home_icon} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => {
            return (
              <View>
                <Icons name={bell_icon} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: COLORS.secondary_with_opactity,
  },
  headerTintColor: COLORS.secondary_with_opactity,
  tabBarStyle: [{backgroundColor: COLORS.secondary_with_opactity}],
  tabBarIcon: ({focused}) => {
    return (
      <View>
        <Icons name={home_icon} />
      </View>
    );
  },
};

export default Tab_navigation;
