import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CheckBox, InuputFeild} from '../../Component';
import search_icon from '../../assest/icons/search_icon';
import {styles} from './index.style';
import {COLORS, images, SIZES} from '../../constant';
import Common_Header from '../../Component/CommonHeader';
import {useDispatch, useSelector} from 'react-redux';
import {getsubcategory} from '../../redux/action/category-action';

const SubCategory = ({navigation, route}) => {
  const dispatch = useDispatch();
  const selectedCategory = route.params;
  const {subcategory_loading} = useSelector(state => state.categoryReducer);
  const [search, setSearch] = useState('');
  console.log(selectedCategory);
  const {subcategory} = useSelector(state => state.categoryReducer);

  const [isSelected, setSelection] = useState(false);

  useEffect(() => {
    dispatch(getsubcategory(selectedCategory?.category_id));
  }, []);
  const SeacrhSubCategories = text => {
    return subcategory.filter(item => item?.name.match(text));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Common_Header
        tittle={'Sub Category'}
        isbackicon={true}
        onpressback={() => navigation.goBack()}
        isdrawer={true}
        onpressdrawer={() => navigation.openDrawer()}
      />
      <ImageBackground
        source={images.background3}
        style={{flex: 1, paddingHorizontal: 24}}>
        <InuputFeild
          style={styles.search_view}
          rightIcon={search_icon}
          name="search"
          placeholder="Expolore categories"
          onChangeText={text => setSearch(text)}
        />
        <Text style={styles.head}>Select Categories</Text>
        <View style={{height: SIZES.padding}} />
        <View style={{flex: 1}}>
          {subcategory_loading ? (
            <ActivityIndicator size={'large'} color={COLORS.primary} />
          ) : (
            <FlatList
              data={search ? SeacrhSubCategories(search) : subcategory}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={index?.toString}
                    style={styles.flatlist}
                    onPress={() => navigation.navigate('LawyeredUp', item)}>
                    <View style={styles.categoryView}>
                      <View style={{flexDirection: 'column'}}>
                        <Text style={styles.category_name}>{item.name}</Text>
                        <Text style={styles.maincategory_name}>
                          {item.category_name}
                        </Text>
                      </View>
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

export default SubCategory;
