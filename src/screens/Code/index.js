import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, images, SIZES} from '../../constant';
import {styles} from './index.style';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import {Header, Icons} from '../../Component';
import {
  CodeField,
  useClearByFocusCell,
  useBlurOnFulfill,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 4;
const Code = ({navigation}) => {
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [value, setValue] = useState('');
  const [confrimdata, setconfrimData] = useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const submitotp = async () => {
    try {
      const response = await confrimdata.confrim(otpInput);
      Alert.alert('Verified');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImageBackground style={styles.main_view} source={images.background}>
      <View style={styles.sub_view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons
            style={{paddingTop: SIZES.padding, alignSelf: 'center'}}
            name={back_arrow_white}
          />
        </TouchableOpacity>
        <Image
          source={images.whiteLogo}
          style={{alignSelf: 'center', height: 60, width: 250}}
        />
      </View>
      <View style={{height: SIZES.padding * 2}} />
      <ImageBackground style={styles.background} source={images.background3}>
        <View style={styles.main_views}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: SIZES.padding,
            }}>
            <Text style={styles.Heading}>Enter Your Code</Text>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.padding2,
              }}>
              <Text style={styles.text2}>We've sent you a 4-digit code to</Text>
              <Text style={styles.textlast}> 12345678</Text>
            </View>
          </View>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={value => SetOtpInput(value)}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardtype="number-pad"
            defaultValue="1234"
            placeholder="1234"
            textContentType="oneTimeCode"
            autocomplete="sms-otp"
            underlineColorAndroid={COLORS.primary}
            placeholderTextColor={COLORS.primary}
            renderCell={({index}) => (
              <View style={styles.cell}>
                <Text
                  key={index}
                  style={styles.code_text}
                  onLayout={getCellOnLayoutHandler(index)}
                />
              </View>
            )}
          />
          <View style={styles.btn_text}>
            <Text style={styles.textlast}>Resend Code</Text>
            <Text style={styles.text2}>OR</Text>
            <Text style={styles.textlast}>Call Me</Text>
          </View>
          <View style={{height: SIZES.padding * 2.5}} />
          <TouchableOpacity onPress={() => submitotp()} style={styles.btn3}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default Code;
