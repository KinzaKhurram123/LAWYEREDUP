import Toast from 'react-native-toast-message';

export const showtoast = (type, massage) => {
  Toast.show({
    type: type,
    text1: type === 'success' ? 'success' : 'Error',
    text2: massage,
    position: 'bottom',
  });
};
