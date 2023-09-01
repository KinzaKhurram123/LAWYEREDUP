import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icons} from '../../Component';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import {COLORS, images, SIZES} from '../../constant';
import bell_icon from '../../assest/icons/bell_icon';
import {styles} from './index.style';
import Common_Header from '../../Component/CommonHeader';

const Preview_Invoice = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Common_Header
        tittle={'Preview Invoice'}
        isbackicon={true}
        onpressback={() => navigation.goBack()}
        isdrawer={true}
      />
      <ImageBackground source={images.background3} style={{flex: 1}}>
        <View style={{paddingHorizontal: SIZES.padding *2}}>
          <View style={{height: SIZES.padding}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading_text}>Custumer Name</Text>
            <Text style={styles.heading_text}>Silvester Dohm</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading_text}>Invoice #</Text>
            <Text style={styles.heading_text}>INV - 0004257</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading_text}>Invoice Date</Text>
            <Text style={styles.heading_text}>26 Auguest 2022</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading_text}>Due Date</Text>
            <Text style={styles.heading_text}>29 Auguest 2022</Text>
          </View>
          <View style={{height: SIZES.padding}} />
          <View
            style={{
              borderBottomColor: COLORS.text_placeholder,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={{height: SIZES.padding}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading}> Retainer Invoice </Text>
            <Text style={styles.heading}>$420.00</Text>
          </View>
          <View style={{height: SIZES.padding}} />
          <View
            style={{
              borderBottomColor: COLORS.text_placeholder,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={{height: SIZES.padding}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading}> Sub Total</Text>
            <Text style={styles.heading}>$49.00</Text>
          </View>
          <View style={{height: SIZES.padding}} />
          <View
            style={{
              borderBottomColor: COLORS.text_placeholder,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={{height: SIZES.padding}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading}> Total</Text>
            <Text style={styles.heading}>$471.00</Text>
          </View>
          <View style={{height: SIZES.padding}} />
          <View
            style={{
              borderBottomColor: COLORS.text_placeholder,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={{height: SIZES.padding}} />
        </View>
        <View style={{height: SIZES.padding * 9}} />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.btn_text}>Pay Now</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Preview_Invoice;
