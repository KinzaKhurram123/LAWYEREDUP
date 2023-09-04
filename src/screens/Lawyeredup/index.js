import {
  SafeAreaView,
  FlatList,
  Text,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {InuputFeild} from '../../Component';
import {styles} from './index.style';
import search_icon from '../../assest/icons/search_icon';
import {COLORS, images, SIZES} from '../../constant';
import Common_Header from '../../Component/CommonHeader';
import {useDispatch, useSelector} from 'react-redux';
import {getLawyer} from '../../redux/action/category-action';
import localStoreUtil from '../../utils/loccal_store';

const LawyeredUp = ({navigation, route}) => {
  const selectedSubCategory = route.params;
  const {lawyers} = useSelector(state => state.categoryReducer);
  const {lawyers_loading} = useSelector(state => state.categoryReducer);
  const [search, setSearch] = useState('');
  console.log(lawyers, 'lawyerssss');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLawyer(selectedSubCategory));
  }, []);

  const SeacrhLawyers = text => {
    return user.filter(item => item?.full_name.match(text));
  };

  const EmptyComponent = () => {
    return (
      <View style={{alignItems: 'center', marginTop: SIZES.padding}}>
        <Text style={styles.text}>No lawyer found</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Common_Header
        isbackicon={true}
        tittle="LaweredUp"
        onpressback={() => navigation.goBack()}
        isdrawer={true}
        onpressdrawer={() => navigation.openDrawer()}
      />
      <View style={{height: SIZES.padding2}} />
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          flex: 1,
          backgroundColor: COLORS.white,
        }}>
        <InuputFeild
          style={styles.search_view}
          rightIcon={search_icon}
          name="search"
          placeholder="Expolore Lawyers"
          onChangeText={text => setSearch(text)}
        />
        <Text style={styles.head}>Search Your Best Lawyer</Text>
        <View style={{paddingTop: SIZES.padding, flex: 1}}>
          {lawyers_loading ? (
            <ActivityIndicator
              size={'large'}
              color={COLORS.primary}
              style={{marginTop: SIZES.padding * 2}}
            />
          ) : (
            <FlatList
              data={search ? SeacrhLawyers(search) : lawyers}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={EmptyComponent}
              keyExtractor={item => item.id}
              style={{marginTop: SIZES.padding}}
              renderItem={({item}) => {
                return (
                  <View style={styles.flatlist}>
                    <Image
                      resizeMode="cover"
                      source={
                        item?.profile_image
                          ? {uri: item?.profile_image}
                          : images.profile_1
                      }
                      style={{height: 100, width: 120}}
                    />
                    <View
                      style={{
                        flexDirection: 'column',
                        paddingLeft: SIZES.padding2,
                        paddingRight: SIZES.font,
                      }}>
                      <Text style={styles.head_text}>{item.full_name}</Text>
                      <Text style={styles.text}>{item.user_type}</Text>
                      <Text style={styles.para}>{item.add_detail}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: SIZES.padding * 3.2,
                          paddingTop: SIZES.padding,
                        }}>
                        <Text style={styles.texts}>verified</Text>
                        <View>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('Lawyer_Profile', {
                                data: item,
                              })
                            }
                            style={styles.btn}>
                            <Text style={styles.btn_text}>View Profile</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          )}
        </View>
        <View style={{height: SIZES.padding}} />
      </View>
    </SafeAreaView>
  );
};

export default LawyeredUp;
