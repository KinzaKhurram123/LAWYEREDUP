import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  Alert,
  ScrollView,
  FlatList,
  Switch,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React, {useCallback, useState, useEffect} from 'react';
import {Button, Header, Icons, InuputFeild} from '../../Component';
import {COLORS, images, SIZES} from '../../constant';
import {styles} from './index.style';
import CheckBoxs from '../../Component/Checkbox';
import location_icon from '../../assest/icons/location_icon';
import Common_Header from '../../Component/CommonHeader';
import upload_icon from '../../assest/icons/upload_icon';
import camra_icon from '../../assest/icons/camra_icon';
import ImageCropPicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import {useDispatch, useSelector} from 'react-redux';
import {edit_profile, getusers} from '../../redux/action/auth-action';
import {userTypes} from '../../config';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import {showtoast} from '../../utils/function';
import back_arrow_yellowicon from '../../assest/icons/back_arrow_yellowicon';
import {
  getCategories,
  getsubcategory,
} from '../../redux/action/category-action';

const days = [
  {
    id: 1,
    name: 'Monday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
  {
    id: 2,
    name: 'Tuesday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
  {
    id: 3,
    name: 'Wednesday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
  {
    id: 4,
    name: 'Thursday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
  {
    id: 5,
    name: 'Friday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
  {
    id: 6,
    name: 'Saturday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
  {
    id: 7,
    name: 'Sunday',
    start_time: '09:00 am',
    end_time: '06:00 pm',
    on: false,
  },
];
const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.authReducer);
  const {user_type} = useSelector(state => state.authReducer);
  const {loading} = useSelector(state => state.authReducer);
  const {categories} = useSelector(state => state.categoryReducer);
  const {subcategory} = useSelector(state => state.categoryReducer);
  const [selectedCategory, setselectedcategory] = useState(user?.catgory);
  const [selectedSubCategory, setselectedSubcategory] = useState(
    user.subcategory,
  );
  const [image, setImage] = useState(user?.profile_image);
  const [uploading, setUploading] = useState(false);
  const [name, setname] = useState(user?.full_name);
  const [email, setemail] = useState(user?.email);
  const [address, setaddress] = useState(user?.address);
  const [phonenumber, setphonenumber] = useState(user?.phone);
  const [age, setage] = useState(user?.age);
  const [gender, setgender] = useState(user?.gender);
  const [discription, setdiscription] = useState(user?.discription);
  const [secretary, setsecretary] = useState(user?.secretary);
  const [secretaryemail, setsecretaryemail] = useState(user.secretaryemail);
  const [add_detail, setadd_detail] = useState(user?.add_detail);
  const [add_region, setadd_region] = useState(user?.add_region);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(user?.cost);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [dropdownitems, setdropdownItems] = useState([
    {label: 'High', value: 'High'},
    {label: 'Medium', value: 'Medium'},
    {label: 'Low', value: 'Low'},
  ]);
  const [isStartTimePickerVisible, setStartTimePickerVisibility] =
    useState(false);

  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);
  const [isEnabled, setIsEnabled] = useState(days);

  useEffect(() => {
    setIsEnabled(user?.operational_hours || days);
  }, []);
  const toggleSwitch = index => {
    let array = [...isEnabled];
    array[index].on = !array[index].on;
    setIsEnabled(array);
  };
  const handleStartTime = (index, date) => {
    let array = [...isEnabled];
    array[index].start_time = moment(date).format('hh:mm a');
    setIsEnabled(array);
  };
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const select = id => {
    dispatch(getsubcategory(id));
  };
  const handleEndTime = (index, date) => {
    setEndTimePickerVisibility(false);
    let array = [...isEnabled];
    array[index].end_time = moment(date).format('hh:mm a');
    setIsEnabled(array);
  };

  // camraa

  const takePhotoFromCamera = () => {
    ImageCropPicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    }).then(image => {
      setImage(image?.path);
    });
  };

  const choosePhotoFromLibrary = async () => {
    ImageCropPicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then(async image => {
      try {
        setUploading(true);
        setImage(image?.path);
        await storage()
          .ref('profile/' + user?.uid)
          .putFile(image?.path)
          .then(img => {
            storage()
              .ref('profile/' + user?.uid)
              .getDownloadURL(img)
              .then(snap => {
                setUploading(false);
                setImage(snap);
              });
          });
      } catch (err) {
        setUploading(false);
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const data = {
        address: address,
        email: email,
        full_name: name,
        add_detail: add_detail,
        discription: discription,
        secretary: secretary,
        secretaryemail: secretaryemail,
        gender: gender,
        age: age,
        cost: value,
        add_region: add_region,
        profile_image: image,
        operational_hours: isEnabled,
        catgory: selectedCategory,
        subcategory: selectedSubCategory,
      };
      console.log('dataaaaa', data);
      dispatch(
        edit_profile(data, user, () => {
          showtoast('success', 'Edit Profile Scuccess');
        }),
      );
    } catch (err) {
      showtoast('error', err);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Common_Header
        isbackicon={true}
        tittle="Edit Profile"
        onpressback={() => navigation.goBack()}
      />
      <ScrollView style={{flex: 1, marginTop: SIZES.padding}}>
        <View style={styles.image_view}>
          {loading ? (
            <ActivityIndicator
              size={'large'}
              color={COLORS.primary}
              style={{marginTop: SIZES.padding * 2}}
            />
          ) : (
            <View
              style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.padding * 5,
                borderWidth: 1,
                borderColor: 'red',
              }}>
              <Image
                resizeMode="cover"
                source={{uri: image}}
                style={{
                  height: 140,
                  width: 140,
                  borderRadius: SIZES.padding * 5,
                }}
              />
            </View>
          )}
        </View>
        <View style={styles.main_view}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={choosePhotoFromLibrary}
              style={{flexDirection: 'row', gap: 6}}>
              <Icons name={upload_icon} />
              <Text style={styles.text_badges}>Upload</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={takePhotoFromCamera}
              style={{flexDirection: 'row', gap: 6}}>
              <Icons name={camra_icon} />
              <Text style={styles.text_badges}>Capture</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: SIZES.padding * 1.5,
            paddingTop: SIZES.padding,
          }}>
          {user_type == userTypes.lawyer && (
            <>
              <InuputFeild
                placeholder={'Name'}
                value={name}
                onChangeText={text => setname(text)}
              />
              <InuputFeild
                isEdit={false}
                value={email}
                onChangeText={text => setemail(text)}
                placeholder={'Email'}
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
                  value={phonenumber}
                  onChangeText={text => setphonenumber(text)}
                  style={styles.phone_number}
                  placeholder="Phone number"
                  keyboardType="numeric"
                />
              </View>
            </>
          )}
          <InuputFeild
            placeholder={'Adress'}
            value={address}
            onChangeText={text => setaddress(text)}
            style={{height: 100}}
          />
          <InuputFeild
            placeholder={'Age'}
            value={age}
            onChangeText={text => setage(text)}
          />
          <InuputFeild
            placeholder={'Gender'}
            value={gender}
            onChangeText={text => setgender(text)}
          />
          <InuputFeild
            placeholder={'Region'}
            value={add_region}
            onChangeText={text => setadd_region(text)}
          />
          {user_type == userTypes.lawyer && (
            <>
              <View style={{height: SIZES.padding}} />
              <Text style={styles.text}>Description of Services</Text>
              <InuputFeild
                placeholder={'Decription'}
                value={discription}
                onChangeText={text => setdiscription(text)}
              />
              <View style={styles.dropdown}>
                <Text style={styles.text}>Cost</Text>
                <View style={{marginLeft: SIZES.padding}}>
                  <DropDownPicker
                    style={{
                      borderColor: COLORS.light_grey,
                      width: '50%',
                      marginLeft: SIZES.padding * 5.5,
                    }}
                    dropDownDirection="TOP"
                    containerStyle={{width: 250, height: 70}}
                    placeholderStyle={{fontWeight: 'bold'}}
                    placeholder={'Cost'}
                    dropDownContainerStyle={{
                      width: 150,
                      left: SIZES.padding * 5.5,
                      marginBottom: SIZES.padding,
                      backgroundColor: COLORS.light_grey,
                    }}
                    itemSeparator={true}
                    open={open}
                    value={value}
                    items={dropdownitems}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setdropdownItems}
                  />
                </View>
              </View>
              <Text style={styles.text}>Secretary Info</Text>

              <InuputFeild
                placeholder={'Secretary Name'}
                value={secretary}
                onChangeText={text => setsecretary(text)}
              />
              <InuputFeild
                placeholder={'Secretary Email Adress'}
                value={secretaryemail}
                onChangeText={text => setsecretaryemail(text)}
              />
              <View style={{height: SIZES.padding}} />
              {user_type == userTypes.lawyer && (
                <>
                  <TouchableOpacity
                    style={styles.GernalBtn}
                    onPress={() => setModalVisible(true)}>
                    <Text style={{color: COLORS.primary}}>
                      {selectedCategory?.name || 'Select Category'}
                    </Text>
                  </TouchableOpacity>
                  <View style={{height: SIZES.padding}} />
                  <TouchableOpacity
                    style={styles.GernalBtn2}
                    onPress={() => setModalVisible2(true)}>
                    <Text style={{color: COLORS.primary}}>
                      {selectedSubCategory?.name || 'Select SubCategory'}
                    </Text>
                  </TouchableOpacity>
                </>
              )}

              <View style={{height: SIZES.padding2}} />
            </>
          )}
          <View style={{height: SIZES.padding}} />

          {user_type == userTypes.lawyer && (
            <>
              <Text style={styles.text}>Operational Hours</Text>
              <FlatList
                data={isEnabled}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={styles.text2}>{item.name}</Text>
                      <View
                        style={{flexDirection: 'row', gap: SIZES.padding * 2}}>
                        <View
                          style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 5,
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              setSelectedIndex(index);
                              setStartTimePickerVisibility(true);
                            }}
                            style={{left: 30}}>
                            <Text style={styles.time}>{item?.start_time}</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={() => {
                              setSelectedIndex(index);
                              setEndTimePickerVisibility(true);
                            }}
                            style={{left: 30}}>
                            <Text style={styles.time}>{item?.end_time}</Text>
                          </TouchableOpacity>
                        </View>
                        <Switch
                          trackColor={{
                            false: COLORS.primary,
                            true: COLORS.secondary,
                          }}
                          key={index}
                          thumbColor={isEnabled ? COLORS.white : COLORS.white}
                          onValueChange={() => toggleSwitch(index)}
                          value={item?.on}
                        />
                      </View>
                    </View>
                  );
                }}
              />
              <InuputFeild
                style={styles.input}
                placeholder={'Add Detail'}
                value={add_detail}
                multiline={true}
                onChangeText={text => setadd_detail(text)}
              />
            </>
          )}
          <View style={{paddingVertical: SIZES.padding}}>
            {loading || uploading ? (
              <ActivityIndicator
                size={'large'}
                color={COLORS.primary}
                style={{marginTop: SIZES.padding * 2}}
              />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.btn}>
                <Text style={styles.btntext}>Save</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
      <DateTimePicker
        isVisible={isEndTimePickerVisible}
        date={new Date()}
        is24Hour={false}
        mode="time"
        onConfirm={date => {
          setEndTimePickerVisibility(false);
          handleEndTime(selectedIndex, date);
        }}
        onCancel={() => setEndTimePickerVisibility(false)}
      />
      <DateTimePicker
        isVisible={isStartTimePickerVisible}
        mode="time"
        is24Hour={false}
        onConfirm={date => {
          setStartTimePickerVisibility(false);
          handleStartTime(selectedIndex, date);
        }}
        onCancel={() => setStartTimePickerVisibility(false)}
      />
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

export default Profile;
