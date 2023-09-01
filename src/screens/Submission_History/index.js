import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, images, SIZES} from '../../constant';
import Common_Header from '../../Component/CommonHeader';
import {InuputFeild} from '../../Component';
import search_icon from '../../assest/icons/search_icon';
import {styles} from './index.style';

const Lawyer = [
  {
    id: 1,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 2,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 3,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 4,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 4,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 5,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 6,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 7,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 8,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 9,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 10,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 11,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 12,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 13,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 14,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 15,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 17,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
  {
    id: 18,
    image: images.profile_5,
    name: 'Mr. James Else',
    category: 'Category Lawyer',
  },
];
const Submission_History = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Common_Header
        tittle={'Submission History'}
        isbackicon={true}
        isdrawer={true}
        onpressback={() => navigation.goBack()}
        onpressdrawer={() => navigation.openDrawer()}
      />
      <View style={styles.container}>
        <InuputFeild
          style={styles.search_view}
          rightIcon={search_icon}
          name="search"
          placeholder="Expolore Lawyer"
        />
        <Text style={styles.heading_text}>Recently Contacted Lawyer</Text>
        <FlatList
          numColumns={3}
          data={Lawyer}
          // style={styles.flatList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  paddingTop: SIZES.padding,
                }}>
                <View style={styles.view}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text2}>{item.category}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View style={{height: SIZES.padding}} />
      </View>
    </SafeAreaView>
  );
};

export default Submission_History;
