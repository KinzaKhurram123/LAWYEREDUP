import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import drawer_icon from '../../assest/icons/drawer_icon';
import location_icon from '../../assest/icons/location_icon';
import search_icon from '../../assest/icons/search_icon';
import {Icons, InuputFeild} from '../../Component';
import {COLORS, images, SIZES} from '../../constant';
import {getCategories} from '../../redux/action/category-action';
import {styles} from './index.style';

const Lawyer = [
  {
    id: 1,
    image: images.profile_5,
    name: 'Mr. James Else',
  },
  {
    id: 2,
    image: images.profile_5,
    name: 'Mr. James Else',
  },
  {
    id: 3,
    image: images.profile_5,
    name: 'Mr. James Else',
  },
  {
    id: 4,
    image: images.profile_5,
    name: 'Mr. James Else',
  },
];

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.authReducer);
  const {categories} = useSelector(state => state.categoryReducer);
  const {categories_loading} = useSelector(state => state.categoryReducer);
  const [image, setImage] = useState(user?.profile_image);

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={styles.main_view}>
        <View style={styles.sub_view}>
          <TouchableOpacity>
            <Image
              source={
                user?.profile_image
                  ? {uri: user?.profile_image}
                  : images.profile_1
              }
              style={{
                height: 60,
                width: 60,
                borderRadius: SIZES.padding * 2,
                marginLeft: SIZES.padding2,
              }}
            />
          </TouchableOpacity>
          <View style={{marginLeft: SIZES.padding}}>
            <Text style={styles.text}>{user.full_name}</Text>
            <Text style={styles.mail}>{user.email}</Text>
          </View>
          <TouchableOpacity
            style={{flex: 1, paddingRight: SIZES.padding}}
            onPress={() => navigation.openDrawer()}>
            <Icons name={drawer_icon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
        }}>
        <InuputFeild
          rightIcon={search_icon}
          name="search"
          style={styles.search_view}
          placeholder="Explore Lawyer/Frims"
        />
      </View>
      <View style={{height: SIZES.padding}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main_views}>
          <View style={styles.heading_view}>
            <Text style={styles.heading_text}>Recent Searched</Text>
            <TouchableOpacity onPress={() => navigation.navigate(null)}>
              <Text style={styles.view_all}>See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={Lawyer}
            // style={styles.flatList}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item?.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    paddingTop: SIZES.padding * 3,
                  }}>
                  <View style={styles.view}>
                    <View style={styles.image_view}>
                      <Image source={item.image} style={styles.profile_image} />
                    </View>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            paddingTop: SIZES.padding,
          }}>
          <InuputFeild
            onPressRightIcon={() => navigation.navigate('Location')}
            rightIcon={location_icon}
            name="Location"
            placeholder="Locations"
          />
        </View>
        <View style={styles.main_views}>
          <View style={styles.heading_view}>
            <Text style={styles.heading_text}>Top Category</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Category')}>
              <Text style={styles.view_all}>See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        {categories_loading ? (
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        ) : (
          <FlatList
            horizontal
            data={categories}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item?.id}
            renderItem={({item}) => {
              return (
                <View style={{paddingLeft: SIZES.padding}}>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      backgroundColor: COLORS.white,
                    }}
                    onPress={() =>
                      navigation.navigate('SubCategory', {
                        category_id: item.id,
                        category_name: item.name,
                      })
                    }
                    activeOpacity={1}>
                    <View style={styles.categoryView}>
                      <Image
                        resizeMode="contain"
                        style={styles.category_image}
                        resizeMethod="auto"
                        source={{uri: item?.image}}
                      />
                    </View>
                    <View style={{backgroundColor: COLORS.grey, width: '100%'}}>
                      <Text style={styles.lawyer_name}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        )}

        <View style={styles.main_views}>
          <View style={styles.heading_view}>
            <Text style={styles.heading_text}>Top Lawyers</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LawyeredUp')}>
              <Text style={styles.view_all}>See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.main_views} activeOpacity={1}>
          <View style={styles.top_laywer}>
            <Image
              source={images.profile_1}
              style={{height: 120, width: 120}}
            />
            <View style={{flexDirection: 'column', marginLeft: SIZES.padding2}}>
              <Text style={styles.lawyer_head}>Mr. James Else</Text>
              <Text style={{color: COLORS.primary, fontWeight: '700'}}>
                Lawyer Category
              </Text>
              <Text
                style={{
                  color: COLORS.secondary,
                  paddingRight: SIZES.padding * 2,
                }}>
                Lorem ipsum dolor sit amet, con {'\n'} sec tetur adipiscing
                elit, sed do {'\n'} eiusmod tempor incididunt ut {'\n'} labore
                et dolore magna aliqua.
              </Text>
              <TouchableOpacity>
                <Text>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{height: SIZES.padding}} />
        <TouchableOpacity
          style={styles.main_views}
          // onPress={() => navigation.navigate('Layweredup')}
        >
          <View style={styles.top_laywer}>
            <Image
              source={images.profile_1}
              style={{height: 120, width: 120}}
            />
            <View style={{flexDirection: 'column', marginLeft: SIZES.padding2}}>
              <Text style={styles.lawyer_head}>Mr. James Else</Text>
              <Text style={{color: COLORS.primary, fontWeight: '700'}}>
                Lawyer Category
              </Text>
              <Text
                style={{
                  color: COLORS.secondary,
                  paddingRight: SIZES.padding * 2,
                }}>
                Lorem ipsum dolor sit amet, con {'\n'} sec tetur adipiscing
                elit, sed do {'\n'} eiusmod tempor incididunt ut {'\n'} labore
                et dolore magna aliqua.
              </Text>
              <TouchableOpacity style={{}}>
                <Text>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{height: SIZES.padding}} />
      </ScrollView>
    </View>
  );
};

export default Home;
