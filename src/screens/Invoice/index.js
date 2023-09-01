import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Common_Header from '../../Component/CommonHeader';
import {Icons} from '../../Component';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import bell_icon from '../../assest/icons/bell_icon';
import {styles} from './index.style';
import {COLORS, images, SIZES} from '../../constant';

const Invoice = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main_view}>
        <View style={styles.sub_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons
              name={back_arrow_white}
              // style={{marginLeft: SIZES.padding}}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>Invoice</Text>
          </View>
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
      </View>
      <ImageBackground source={images.background3} style={{flex: 1}}>
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding,
            borderColor: COLORS.text_placeholder,
            borderWidth: 1,
            margin: SIZES.padding,
            borderStyle: 'dashed',
            borderRadius: SIZES.padding
          }}>
          <Image style={{alignSelf: 'center' ,}} source={images.logo} />
          <View style={{height: SIZES.padding}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading_text}>Lawyer Name</Text>
            <Text style={styles.heading_text}>Dohm Silvester</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading_text}>Custumer Name</Text>
            <Text style={styles.heading_text}>Dohm</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading_text}>Invoice #</Text>
            <Text style={styles.heading_text}>INV - 0004257</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading_text}>Invoice Date</Text>
            <Text style={styles.heading_text}>26 Auguest 2022</Text>
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
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Preview_Invoice')}>
            <Text style={{textAlign: 'center', color: '#1A6FEF', fontSize: 15}}>
              Pay now
            </Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 15}}>
            or
          </Text>
          <TouchableOpacity>
            <Text style={{textAlign: 'center', color: '#1A6FEF', fontSize: 15}}>
              Click here
            </Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 15}}>
            To Download the invoice
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Invoice;
