import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardStack from './DashboardStack';
import DrawerContent from './component/DrawerContent';
const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: '80%',
        },
      }}
      overlayColor={0}
      initialRouteName="DashboardStack">
      <Drawer.Screen
        options={{headerShown: false}}
        component={DashboardStack} 
        name="DashboardStack"
      />
    </Drawer.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
