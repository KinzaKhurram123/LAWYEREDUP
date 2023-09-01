import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Common_Header from '../../Component/CommonHeader';
import {COLORS, SIZES} from '../../constant';
import info_icon from '../../assest/icons/info_icon';
import {styles} from './index.style';
import {InuputFeild} from '../../Component';

const Pre_Requisite = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Common_Header
        isbackicon={true}
        tittle={'Pre Requisite'}
        onpressback={() => navigation.goBack()}
        onpressdrawer={() => navigation.openDrawer()}
        isdrawer={true}
      />
      <ScrollView>
        <View style={styles.sub_view}>
          <View style={{flexDirection: 'row', gap: 6}}>
            <Text style={styles.title}>1.</Text>
            <Text style={styles.title}> What is lorem ipsum?</Text>
          </View>
          <InuputFeild
            name="adress"
            style={styles.input}
            placeholder="Answer"
            maxLength={20}
          />
          <View style={{flexDirection: 'row', gap: 6}}>
            <Text style={styles.title}>2.</Text>
            <Text style={styles.title}> Why is lorem ipsum?</Text>
          </View>
          <InuputFeild
            name="adress"
            style={styles.input}
            placeholder="Answer"
            maxLength={20}
          />
          <View style={{flexDirection: 'row', gap: 6}}>
            <Text style={styles.title}>3.</Text>
            <Text style={styles.title}> Where is lorem ipsum?</Text>
          </View>
          <InuputFeild
            name="adress"
            style={styles.input}
            placeholder="Answer"
            maxLength={20}
          />
          <View style={{flexDirection: 'row', gap: 6}}>
            <Text style={styles.title}>4.</Text>
            <Text style={styles.title}> When is lorem ipsum?</Text>
          </View>
          <InuputFeild
            name="adress"
            style={styles.input}
            placeholder="Answer"
            maxLength={20}
          />
          <View style={{height: SIZES.padding * 3}} />

          <TouchableOpacity
            style={styles.btn3}
            onPress={() => navigation.navigate(null)}>
            <Text style={styles.btn_text}>Submint</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Pre_Requisite;
