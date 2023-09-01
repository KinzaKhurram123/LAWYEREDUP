import auth, {firebase} from '@react-native-firebase/auth';
import {showtoast} from '../../utils/function';
import localStoreUtil from '../../utils/loccal_store';
import database from '@react-native-firebase/database';

export const userlogin = (data, onDone) => {
  return async dispatch => {
    try {
      dispatch({type: 'LOGIN_PROGRESS'});
      const response = await auth().signInWithEmailAndPassword(
        data?.email,
        data?.password,
      );

      if (response?.user?.uid) {
        database()
          .ref('databse/users/' + response?.user?.uid)
          .once('value')
          .then(async user => {
            await localStoreUtil.store_data('user', user?.val());
            console.log(user?.val(), 'userrrrrr')
            dispatch({type: 'LOGIN_SUCCESS', payload: user?.val()});
            onDone();
          });
      } else {
        dispatch({type: 'LOGIN_ERROR'});
      }
    } catch (err) {
      showtoast('error', err);
      console.log(err, 'errr');
      dispatch({type: 'LOGIN_ERROR'});
    }
  };
};
export const usersignup = (data, onDone) => {
  return async dispatch => {
    try {
      dispatch({type: 'SIGNUP_PROGESS'});
      const response = await auth().createUserWithEmailAndPassword(
        data?.email,
        data?.passward,
      );
      if (response?.user?.uid) {
        let obj = {...data};
        obj.uid = response.user.uid;
        const databaseResponse = database()
          .ref('databse/users/' + obj.uid)
          .set(obj);
        onDone();
        console.log(databaseResponse, 'databasereponseee');
        dispatch({type: 'SIGNUP_SCUCESS'});
      } else {
        dispatch({type: 'SIGNUP_ERROR'});
      }
    } catch (err) {
      console.log(err, 'err');
      showtoast('error', err);
    }
  };
};

export const usersignout = () => {
  return async dispatch => {
    try {
      dispatch({type: 'SIGNOUT_PROGRESS'});
      auth()
        .signOut()
        .then(function () {
          localStoreUtil.remove_all();
        });
      dispatch({type: 'SIGNOUT_SCUCESS'});
    } catch (err) {
      showtoast('err', err);
      dispatch({type: 'SIGNOUT_ERROR'});
    }
  };
};

export const edit_profile = (data, user, onDone) => {
  console.log('UPdated Datat', data);
  return async dispatch => {
    try {
      dispatch({type: 'EDIT_PROFILE_PROCESS'});
      database()
        .ref('databse/users/' + user?.uid)
        .update(data)
        .then(snap => {
          database()
            .ref('databse/users/' + user?.uid)
            .once('value')
            .then(async userData => {
              console.log('userDtaaa', userData?.val());
              await localStoreUtil.store_data('user', userData?.val());
              dispatch({
                type: 'EDIT_PROFILE_SUCCESS',
                payload: userData?.val(),
              });
              onDone();
            });
        });
    } catch (err) {
      dispatch({type: 'EDIT_PROFILE_ERROR'});
      console.loh(err, 'err');
    }
  };
};
