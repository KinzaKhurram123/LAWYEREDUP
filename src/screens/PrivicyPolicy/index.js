import {
  SafeAreaView,
  Switch,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Common from '../../Component/CommonHeader';
import {COLORS, SIZES} from '../../constant';
import {styles} from './index.style';
import {Icons} from '../../Component';
import left_arrow_blue from '../../assest/icons/left_arrow_blue';
import {ColorSpace} from 'react-native-reanimated';
import cencle_icon from '../../assest/icons/cencle_icon';
import Common_Header from '../../Component/CommonHeader';

const PrivacyPolicy = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isArchieve, setIsArchive] = useState(false);
  const toggleSwitch2 = () => setIsArchive(previousState => !previousState);
  return (
    <SafeAreaView>
      <Common_Header
        tittle={'Privicy Setting'}
        isbackicon={true}
        onpressback={() => navigation.goBack()}
        isdrawer={true}
        onpressdrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding * 1.5,
          }}>
          <View
            style={{
              paddingBottom: SIZES.padding,
              flexDirection: 'row',
              gap: 10,
            }}>
            <View>
              <Text style={styles.text}>Read Recipient</Text>
              <Text style={styles.para}>
                Lorem ipsum dolor sit amet, consectetur
                {'/n'}
                adipiscing
              </Text>
            </View>
            <Switch
              trackColor={{false: COLORS.secondary, true: COLORS.primary}}
              thumbColor={isEnabled ? COLORS.white : COLORS.white}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={{height: SIZES.padding2}} />
          <View
            style={{
              paddingBottom: SIZES.padding,
              flexDirection: 'row',
              gap: 10,
            }}>
            <View>
              <Text style={styles.text}>Meeting Archive</Text>
              <Text style={styles.para}>
                Lorem ipsum dolor sit amet, consectetur
                {'/n'}
                adipiscing
              </Text>
            </View>
            <Switch
              trackColor={{false: COLORS.secondary, true: COLORS.primary}}
              thumbColor={isArchieve ? COLORS.white : COLORS.white}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isArchieve}
            />
          </View>
          <View style={{height: SIZES.padding2}} />
          <View
            style={{
              paddingBottom: SIZES.padding,
              flexDirection: 'row',
              gap: 18,
            }}>
            <View>
              <Text style={styles.text}>Delete All Meeting</Text>
              <Text style={styles.para}>
                Lorem ipsum dolor sit amet, consectetur
                {'/n'}
                adipiscing
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <View
                style={{
                  backgroundColor: COLORS.danger,
                  padding: 5,
                  borderRadius: SIZES.padding,
                }}>
                <Icons name={cencle_icon} />
              </View>
            </View>
          </View>
          <View style={{height: SIZES.padding2}} />
          <View
            style={{
              paddingBottom: SIZES.padding,
              flexDirection: 'row',
              // gap: 2,
            }}>
            <View>
              <Text style={styles.text}>Terms & Condition</Text>
              <Text style={styles.para}>
                Lorem ipsum dolor sit amet, consectetur
                {'/n'}
                adipiscing
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Terms_Condition')}
              style={{padding: SIZES.padding}}>
              <Icons name={left_arrow_blue} />
            </TouchableOpacity>
          </View>
          <View style={{height: SIZES.padding * 12}} />
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.secondary,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: SIZES.padding,
              width: '100%',
            }}>
            <Text style={{color: COLORS.white}}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
