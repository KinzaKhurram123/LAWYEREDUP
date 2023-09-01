import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import React from 'react';
import Common_Header from '../../Component/CommonHeader';
import {Icons, InuputFeild} from '../../Component';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import {COLORS, images, SIZES} from '../../constant';
import {styles} from './index.style';
import bell_icon from '../../assest/icons/bell_icon';
import credit_card_icon from '../../assest/icons/credit_card_icon';
import Visa_icon from '../../assest/icons/Visa_icon';
import master_card_icon from '../../assest/icons/master_card_icon';
import payment_card_icon from '../../assest/icons/payment_card_icon';

const Payment = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main_view}>
        <View style={styles.sub_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons
              name={back_arrow_white}
              style={{marginLeft: SIZES.padding}}
            />
          </TouchableOpacity>

          <Text style={styles.text}>Payment</Text>
          <TouchableOpacity
            style={{
              alignItems: 'flex-end',
              flex: 1,
              paddingLeft: SIZES.padding,
            }}
            onPress={() => navigation.navigate('Notification')}>
            <Icons name={bell_icon} />
          </TouchableOpacity>
        </View>
        <View style={{height: SIZES.padding}} />
        <View
          style={{alignItems: 'flex-start', paddingLeft: SIZES.padding * 3}}>
          <Icons name={credit_card_icon} />
          <Text style={styles.text_lable}>
            Add a Card to enjoy seemless payments experience
          </Text>
          <View style={{height: SIZES.padding2}} />
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.pending,
              padding: SIZES.padding2,
              borderColor: COLORS.white,
              borderWidth: 1,
              borderRadius: 10,
            }}>
            <Text style={{color: COLORS.white}}>Add Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{backgroundColor: COLORS.white}}>
        <ImageBackground source={images.background3} style={{flex: 1}}>
          <View style={{paddingHorizontal: SIZES.padding}}>
            <Text style={styles.heading_text}>Invoice</Text>
         
          <View style={{padding: SIZES.padding}}>
            <View
              style={{
                alignItems: 'flex-start',
                flexDirection: 'row',
                // padding: SIZES.padding,
                paddingBottom: SIZES.padding,
                gap: 12,
              }}>
              <Icons name={Visa_icon} />
              <Icons name={master_card_icon} />
              <Icons name={payment_card_icon} />
            </View>
            <View
              style={{
                borderBottomColor: COLORS.text_placeholder,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <View style={{height: SIZES.padding}} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.heading}>Payment Amount</Text>
              <Text style={styles.heading}>$15.77</Text>
            </View>
            <View style={{height: SIZES.padding}} />
            <View>
              <InuputFeild placeholder={'Name on Card'} />
            </View>
            <View style={{height: SIZES.padding}} />
            <View>
              <InuputFeild placeholder={'Card Number'} />
            </View>
            <View style={{height: SIZES.padding}} />
            <View
              style={{
                flexDirection: 'row',
                marginRight: 15,
                width: '100%',
                gap: SIZES.padding,
              }}>
              <InuputFeild
                style={styles.expiry_date}
                placeholder={'Expiry Date'}
              />
              <InuputFeild style={styles.code} placeholder={'Security Code'} />
            </View>
            <View style={{height: SIZES.padding}} />
            <View>
              <InuputFeild placeholder={'Zip Postal Code'} />
            </View>
          </View>
          <View style={{height: SIZES.padding}} />
          <View style={styles.btn}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.btn_text}>Pay Now</Text>
            </TouchableOpacity>
          </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;
