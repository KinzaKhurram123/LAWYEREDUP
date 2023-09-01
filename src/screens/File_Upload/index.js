import {
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import React,{useState,useCallback } from 'react';
import Common_Header from '../../Component/CommonHeader';
import {COLORS, SIZES} from '../../constant';
import {Icons} from '../../Component';
import upload_icon from '../../assest/icons/upload_icon';
import {styles} from './index.style';
import upload_big from '../../assest/icons/upload_big';
import File_Icon from '../../assest/icons/File_Icon';
import cencle_icon from '../../assest/icons/cencle_icon';
import yellow_close_icon from '../../assest/icons/yellow_close_icon';
import DocumentPicker, {types} from 'react-native-document-picker';

const files = [
  {
    id: 1,
    icon_file: File_Icon,
    name: 'Report_08_22.pdf',
    size: '457Kb',
    cencle_icon: yellow_close_icon,
  },
  {
    id: 2,
    icon_file: File_Icon,
    name: 'Report_08_22.pdf',
    size: '457Kb',
    cencle_icon: yellow_close_icon,
  },
  {
    id: 3,
    icon_file: File_Icon,
    name: 'Report_08_22.pdf',
    size: '457Kb',
    cencle_icon: yellow_close_icon,
  },
];

const File_Upload = ({navigation}) => {
  const [fileResponse, setFileResponse] = useState([]);
  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.pdf],
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);


  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
<Common_Header isbackicon={true} tittle={'File Upload'} onpressback={() => navigation.goBack()}/>
      <View style={{flex: 1}}>
        <ScrollView>
          <TouchableOpacity    onPress={handleDocumentSelection} style={styles.upload_view}>
            <Icons name={upload_big} style={styles.icon} />
            <Text style={styles.text}>Upload Your files</Text>
          </TouchableOpacity>
          <View>
            <FlatList
              data={files}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item?.id}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      marginLeft: SIZES.padding2,
                      marginRight: SIZES.padding2,
                    }}>
                    <View style={styles.View}>
                      <Icons name={item.icon_file} style={styles.image_view} />
                      <Text style={styles.text_badges}>{item.name}</Text>
                      <Text>{item.size}</Text>
                      <Icons style={styles.cencel} name={item.cencle_icon} />
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default File_Upload;
