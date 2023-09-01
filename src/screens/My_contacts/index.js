import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {CheckBox, Icons, InuputFeild} from '../../Component';
import blue_back_arrow from '../../assest/icons/blue _back_arrow';
import drawer_icon from '../../assest/icons/drawer_icon';
import {COLORS, SIZES} from '../../constant';
import search_icon from '../../assest/icons/search_icon';
import CheckBoxs from '../../Component';
const Name = [
  {
    id: 1,
    name: 'Ronald Richards',
  },
  {
    id: 2,
    name: 'Dianne Russell',
  },
  {
    id: 3,
    name: 'Wade Warren',
  },
  {
    id: 4,
    name: 'Theresa Webb',
  },
  {
    id: 5,
    name: 'Albert Flores',
  },
  {
    id: 6,
    name: 'Courtney Henry',
  },
  {
    id: 7,
    name: 'Ralph Edwards',
  },
  {
    id: 8,
    name: 'Ralph Edwards',
  },
  {
    id: 9,
    name: 'Ralph Edwards',
  },
  {
    id: 10,
    name: 'Ralph Edwards',
  },
];

const My_Contact = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding2,
      }}>
      <View style={styles.background}>
        <View style={styles.sub_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name={blue_back_arrow} style={styles.icon} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>Your Contact</Text>
          </View>
          <TouchableOpacity  style={styles.btn3}>
            <Text style={styles.text}> Send</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, paddingHorizontal: SIZES.padding}}>
        <InuputFeild
          style={styles.search_view}
          rightIcon={search_icon}
          name="search"
          placeholder="Search Contact"
        />
        <View style={{flex: 1}}>
          <FlatList
            data={Name}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    paddingVertical: SIZES.padding2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}> 
                  <Text style={styles.head}>{item.name}</Text>
                  <View>
                    <CheckBox
                      isChecked={isSelected}
                      setIsClicked={setSelection}
                      style={styles.checkbox}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default My_Contact;
