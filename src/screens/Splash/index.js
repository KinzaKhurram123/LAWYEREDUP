import {StyleSheet, ImageBackground, View, Image} from 'react-native';
import React from 'react';
import {images, SIZES} from '../../constant';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('AuthStack');
  }, 5000);
  return (
    <ImageBackground style={styles.main_view} source={images.background}>
      <View style={styles.image_view}>
        <Image
          style={styles.image_view}
          source={images.whiteLogo}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  main_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginTop: -SIZES.padding,
  },
  image_view: {
    width: '80%',
    height: 75,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
