import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import back_arrow_yellowicon from '../../assest/icons/back_arrow_yellowicon';
import cencle_icon from '../../assest/icons/cencle_icon';
import eye_icon from '../../assest/icons/eye_icon';
import info_icon from '../../assest/icons/info_icon';
import {Button, Icons, InnerContainer, InuputFeild} from '../../Component';
import {userTypes} from '../../config';
import {COLORS, images, SIZES} from '../../constant';
import {usersignup} from '../../redux/action/auth-action';
import {
  getCategories,
  getsubcategory,
} from '../../redux/action/category-action';
import {showtoast} from '../../utils/function';
import {styles} from './index.style';

const Signup = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {subcategory_loading} = useSelector(state => state.authReducer);
  const {categories} = useSelector(state => state.categoryReducer);
  const {subcategory} = useSelector(state => state.categoryReducer);
  const [selectedCategory, setselectedcategory] = useState();
  const {user_type} = useSelector(state => state.authReducer);
  const [selectedSubCategory, setselectedSubcategory] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [email, setemail] = useState('');
  const [passward, setPasword] = useState('');
  const [mobileNo, setmobileNo] = useState('');
  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const handleSignup = async () => {
    try {
      const apiData = {
        email: email,
        passward: passward,
        phone: mobileNo,
        address: address,
        full_name: name,
        user_type: user_type,
        category: selectedCategory,
        subcategory: selectedSubCategory,
      };
      dispatch(
        usersignup(apiData, () => {
          showtoast('success', 'SignIn Complete');
          navigation.goBack();
        }),
      );
    } catch (err) {
      console.log(err, 'error');
      showtoast('error', err);
    }
  };
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const select = id => {
    dispatch(getsubcategory(id));
  };
  console.log(user_type, 'usertype');
  return (
    <SafeAreaView>
      <ImageBackground style={styles.main_view} source={images.background}>
        <View style={styles.sub_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name={back_arrow_white} />
          </TouchableOpacity>
          <Image
            source={images.whiteLogo}
            style={{alignSelf: 'center', height: 50, width: '60%'}}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <InnerContainer>
            <View style={{justifyContent: 'center', padding: SIZES.padding}}>
              <Text style={styles.Heading}>Sign Up</Text>
              <Text style={styles.Heading2}>{user_type}</Text>
              <InuputFeild
                value={name}
                onChangeText={txt => setname(txt)}
                name="email"
                placeholder="Name"
                maxLength={20}
              />
              <InuputFeild
                name="email"
                placeholder="Email"
                value={email}
                onChangeText={txt => setemail(txt)}
              />
              <View style={styles.phone_input_view}>
                <InuputFeild
                  name="Code"
                  style={styles.phone_code}
                  isEdit={false}
                  image
                  maxLength={20}
                />
                <InuputFeild
                  name="number"
                  style={styles.phone_number}
                  placeholder="Phone number"
                  keyboardType="numeric"
                  value={mobileNo}
                  onChangeText={value => setmobileNo(value)}
                />
              </View>
              <InuputFeild
                name="adress"
                style={styles.input}
                placeholder="Adress"
                // maxLength={20}
                value={address}
                onChangeText={text => setaddress(text)}
              />
              <View style={{padding: SIZES.padding2}}></View>
              <InuputFeild
                name="pasward"
                placeholder="Enter passward"
                rightIcon={isPasswordSecure ? eye_icon : eye_icon}
                onPressRightIcon={() =>
                  isPasswordSecure
                    ? setIsPasswordSecure(false)
                    : setIsPasswordSecure(true)
                }
                value={passward}
                onChangeText={txt => setPasword(txt)}
              />
              <InuputFeild
                name="confirm"
                secureTextEntry
                placeholder="Confrim passward"
                rightIcon={eye_icon}
                maxLength={20}
              />
              <View style={{height: SIZES.padding}} />
              {user_type == userTypes.lawyer && (
                <>
                  <TouchableOpacity
                    style={styles.GernalBtn}
                    onPress={() => setModalVisible(true)}>
                    <Text style={{color: COLORS.secondary}}>
                      {selectedCategory?.name || 'Select Category'}
                    </Text>
                  </TouchableOpacity>
                  <View style={{height: SIZES.padding}} />
                  {!selectedCategory?.name ? (
                    showtoast('error', 'please select category first ')
                  ) : (
                    <TouchableOpacity
                      style={styles.GernalBtn2}
                      onPress={() => setModalVisible2(true)}>
                      <Text style={{color: COLORS.secondary}}>
                        {selectedSubCategory?.name || 'Select SubCategory'}
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              )}

              <View>
                {subcategory_loading ? (
                  <ActivityIndicator size={'large'} color={COLORS.primary} />
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      handleSignup();
                    }}
                    style={styles.btn3}>
                    <Text style={styles.text}>Sign Up</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </InnerContainer>
          <View style={{height: SIZES.padding}} />
        </ScrollView>
      </ImageBackground>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View
            style={{
              backgroundColor: COLORS.white,
              paddingVertical: SIZES.padding,
              paddingHorizontal: SIZES.padding,
            }}>
            <View style={{flexDirection: 'row', gap: SIZES.padding}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Icons name={back_arrow_yellowicon} />
              </TouchableOpacity>
              <Text style={styles.Heading2}>Select Categories</Text>
            </View>
            <FlatList
              data={categories}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={index?.toString()}
                    style={styles.flatlist2}
                    onPress={() => {
                      setselectedcategory(item);
                      select(item.id);
                      setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.subcategoryView}>
                      <View
                        style={{
                          flexDirection: 'column',
                          padding: SIZES.padding2,
                        }}>
                        <Text style={styles.subcategory_name}>{item.name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(!modalVisible2);
        }}>
        <View
          style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View
              style={{
                backgroundColor: COLORS.white,
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
              }}>
              <View style={{flexDirection: 'row', gap: SIZES.padding}}>
                <TouchableOpacity
                  onPress={() => setModalVisible2(!modalVisible2)}>
                  <Icons name={back_arrow_yellowicon} />
                </TouchableOpacity>
                <Text style={styles.Heading2}>Select SubCategories</Text>
              </View>
              <FlatList
                data={subcategory}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      key={index?.toString}
                      onPress={() => {
                        setselectedSubcategory(item);
                        setModalVisible2(!modalVisible2);
                      }}
                      style={styles.flatlist2}>
                      <View style={styles.subcategoryView}>
                        <View
                          style={{
                            flexDirection: 'column',
                            padding: SIZES.padding2,
                          }}>
                          <Text style={styles.subcategory_name}>
                            {item.name}
                          </Text>
                          <Text style={styles.maincategory_name}>
                            {item.category_name}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Signup;
