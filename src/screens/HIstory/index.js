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
import {COLORS, images, SIZES} from '../../constant';
import {Icons} from '../../Component';
import drawer_icon from '../../assest/icons/drawer_icon';
import {styles} from './index.style';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import bell_icon from '../../assest/icons/bell_icon';
import plus_icon from '../../assest/icons/plus_icon';
import {Table, Row, Rows} from 'react-native-table-component';
const header = ['S.no', 'Invoice#', 'Lawyer', 'Date', 'Amount', 'Status'];
const data = [
  ['01', 'INV-4257', 'Dohm', '28-9-2022', '$428.00', 'DueToday'],
  ['02', 'INV-4257', 'Dohm', '28-9-2022', '$428.00', 'Overdue'],
  ['03', 'INV-4257', 'Dohm', '28-9-2022', '$428.00', 'Paid'],
  ['04', 'INV-4257', 'Dohm', '28-9-2022', '$428.00', 'Paid'],
  ['05', 'INV-4257', 'Dohm', '28-9-2022', '$428.00', 'Paid'],
  ['06', 'INV-4257', 'Dohm', '28-9-2022', '$428.00', 'Paid'],
  ['07', 'INV-4257', 'Dohm', '28-9-2022', '$428.00', 'Paid'],
  ['08', 'INV-4257', 'Dohm', '28-9-2022', '$428.00', 'Paid'],
  ['09', 'INV-4257', 'Dohm', '28-9-2022', '$428.00', 'Paid'],
  ['10', 'INV-4257', 'Dohm', '28-9-2022', '$428.00', 'Overdue'],
];

const HIstory = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.main_view}>
        <View style={styles.sub_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name={back_arrow_white} />
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>History</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
            style={{
              alignItems: 'flex-end',
              flex: 1,
              paddingLeft: SIZES.padding2,
            }}>
            <Icons name={bell_icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground source={images.background3} style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.padding,
            paddingTop: SIZES.padding,
          }}>
          <Text style={styles.heading_text}>10 Order Items</Text>
          <Text style={styles.heading_text}>Sort By</Text>
        </View>
        <View
          style={{paddingHorizontal: SIZES.padding, paddingTop: SIZES.padding}}>
          <Table>
            <Row data={header} style={styles.row} textStyle={styles.row_text} />
            <Rows
              data={data}
              style={styles.row2}
              textStyle={styles.row2_text}
            />
          </Table>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HIstory;
