import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Category from '../screens/Category';
import SubCategory from '../screens/SubCategory';
import Setting from '../screens/Setting';
import PrivacyPolicy from '../screens/PrivicyPolicy';
import Terms_Condition from '../screens/Terms_Condition';
import LawyeredUp from '../screens/Lawyeredup';
import Lawyer_Profile from '../screens/Lawyer_profile';
import My_Contact from '../screens/My_contacts';
import Pre_Requisite from '../screens/Pre Requisite';
import Forums from '../screens/ForumInner/Forum';
import Creat_Fourms from '../screens/Creat_fourm';
import File_Upload from '../screens/File_Upload';
import Meeting from '../screens/Meeting';
import Location from '../screens/Location';
import ForumInner from '../screens/ForumInner';
import HIstory from '../screens/HIstory';
import Invoice from '../screens/Invoice';
import Preview_Invoice from '../screens/Preview_Invoice';
import Payment from '../screens/Payment';
import Home from '../screens/Home';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {COLORS} from '../constant';
import Profile from '../screens/Profile';
import Submission_History from '../screens/Submission_History';
import Chat_Screen from '../screens/Chat_Screen';
import submission_icon from '../assest/icons/submission_icon';
import Chat from '../screens/Chat';

const Stack = createNativeStackNavigator();
const DashboardStack = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        translucent={true}
        showHideTransition="slide"
        animated
        backgroundColor={COLORS.secondary}
        barStyle="dark-content"
      />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Terms_Condition" component={Terms_Condition} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="SubCategory" component={SubCategory} />
        <Stack.Screen name="LawyeredUp" component={LawyeredUp} />
        <Stack.Screen name="Lawyer_Profile" component={Lawyer_Profile} />
        <Stack.Screen name="My_Contact" component={My_Contact} />
        <Stack.Screen name="Pre_Requisite" component={Pre_Requisite} />
        <Stack.Screen name="Forums" component={Forums} />
        <Stack.Screen name="Creat_Fourms" component={Creat_Fourms} /> 
        <Stack.Screen name="File_Upload" component={File_Upload} />
        <Stack.Screen name="Meeting" component={Meeting} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="ForumInner" component={ForumInner} />
        <Stack.Screen name="History" component={HIstory} />
        <Stack.Screen name="Invoice" component={Invoice} />
        <Stack.Screen name="Preview_Invoice" component={Preview_Invoice} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Submission_History' component={Submission_History}/>
        <Stack.Screen name='Chat_Screen' component={Chat_Screen}/>
        <Stack.Screen name='Chat' component={Chat} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
export default DashboardStack;

