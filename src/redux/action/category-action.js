import {async} from '@firebase/util';
import database from '@react-native-firebase/database';
import { combineReducers } from 'redux';
import {showtoast} from '../../utils/function';

export const getCategories = () => {
  return async dispatch => {
    try {
      dispatch({type: 'CATEGORY_PROCESS'});
      const data = await database().ref('databse/categories').once('value');
      dispatch({type: 'CATEGORY_SCUCESS', payload: data?.val()});
    } catch (err) {
      showtoast('error', err);
      dispatch({type: 'CATEGORY_ERROR'});
    }
  };
};

export const getsubcategory = category_id => {
  return async dispatch => {
    try {
      dispatch({type: 'SUBCATEGORY_PROCESS'});
      const response = await database()
        .ref('databse/subcatagories')
        .once('value');
      const res = response?.val()?.filter(item => {
        return item?.category_id === category_id;
      });
      dispatch({type: 'SUBCATEGORY_SUCCESS', payload: res});
    } catch (err) {
      console.log(err, 'err')
    }
  };
};

export const getLawyer = item => {
  return async dispatch => {
    try {
      dispatch({type: 'LAWYER_PROCESS'});
      const response = await database()
        .ref('databse/users')
        .orderByChild('user_type')
        .equalTo('lawyer')
        .once('value');
      const lawyers = response?.val();
      let array = [];
      for (var key in lawyers) {
        // console.log(
        //   'lawyers[key]?.category_id ',
        //   lawyers[key]?.category?.id === item?.category_id,
        // );
        // console.log(
        //   'lawyers[key]?.subcategory?.id',
        //   lawyers[key]?.subcategory?.id,
        //   item?.id,
        // );
        if (
          lawyers[key]?.category?.id == item?.category_id &&
          lawyers[key]?.subcategory?.id == item?.id
        ) {
          array?.push(lawyers[key]);
        }
      }

      dispatch({type: 'LAWYER_SUCCESS', payload: array});
    } catch (err) {
      console.log(err, 'err');
    }
  };
};
