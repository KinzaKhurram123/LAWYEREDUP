import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Common from '../../Component/CommonHeader';
import {COLORS, images, SIZES} from '../../constant';
import Common_Header from '../../Component/CommonHeader';

const Terms_Condition = ({navigation}) => {
  return (
    <SafeAreaView>
      <Common_Header
        isbackicon={true}
        onpressback={() => navigation.goBack()}
        tittle="Terms & Conditions"
        isdrawer={true}
        onpressdrawer={() => navigation.openDrawer()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: SIZES.padding}}>
          <Text style={styles.text}>Terms</Text>
          <Text style={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet,
          </Text>
          <View style={{height: SIZES.padding}} />
          <Text style={styles.text}>Conditions</Text>
          <Text style={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet,
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Terms_Condition;

const styles = StyleSheet.create({
  text: {
    color: COLORS.secondary,
    fontSize: 22,
    fontWeight: '500'
  },
  para: {
    marginTop: 12,
    color: COLORS.secondary,
    fontSize: 15,
  },
});
