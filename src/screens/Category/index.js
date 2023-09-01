import {
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, images, SIZES} from '../../constant';
import {InuputFeild} from '../../Component';
import search_icon from '../../assest/icons/search_icon';
import {styles} from './index.style';
import Common_Header from '../../Component/CommonHeader';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../redux/action/category-action';
import {contains} from '@firebase/util';
const Category = ({navigation}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const {categories_loading} = useSelector(state => state.categoryReducer);
  const {categories} = useSelector(state => state.categoryReducer);
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const SeacrhCategories = text => {
    return categories.filter(item => item?.name.match(text));
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
        tittle="Category Lawyer"
        onpressback={() => navigation.goBack()}
        isdrawer={true}
        onpressdrawer={() => navigation.openDrawer()}
      />
      <ImageBackground
        source={images.background3}
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
        }}>
        <InuputFeild
          style={styles.search_view}
          rightIcon={search_icon}
          name="search"
          value={search}
          placeholder="Expolore categories"
          onChangeText={text => setSearch(text)}
        />
        <Text style={styles.head}>Select Categories</Text>
        <View style={{height: SIZES.padding}} />
        <View style={{flex: 1}}>
          {categories_loading ? (
            <ActivityIndicator
              size={'large'}
              color={COLORS.primary}
              style={{marginTop: SIZES.padding * 2}}
            />
          ) : (
            <FlatList
              numColumns={2}
              data={search ? SeacrhCategories(search) : categories}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              ListEmptyComponent={EmptyComponent}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={index?.toString()}
                    onPress={() =>
                      navigation.navigate('SubCategory', {
                        category_id: item.id,
                        category_name: item.name,
                      })
                    }
                    style={styles.flatlist}>
                    <View style={styles.categoryView}>
                      <Image
                        resizeMode="contain"
                        source={{uri: item?.image}}
                        style={styles.category_image}
                      />
                    </View>
                    <View style={{backgroundColor: COLORS.grey, width: '100%'}}>
                      <Text style={styles.lawyer_name}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          )}
        </View>
        <View style={{height: SIZES.padding}} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Category;
