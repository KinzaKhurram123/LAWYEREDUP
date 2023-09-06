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

export const send_request = (data, onDone) => {
  return async dispatch => {
    try {
      dispatch({type: 'SEND_REQUEST_PROCESS'});
      const response = await database().ref('databse/chatlist/').push(data);
      dispatch({type: 'SEND_REQUEST_SUCCESS', payload: response});
      console.log(response, 'responseee');
      onDone();
    } catch (err) {
      dispatch({type: 'SEND_REQUEST_ERROR'});
      console.log(err);
    }
  };
};

export const getFriendRequest = (reciever_id, sender_id) => {
  return async dispatch => {
    try {
      dispatch({type: 'GET_REQUEST_PROCESS'});
      database()
        .ref('databse/chatlist')
        .orderByChild('sender_id')
        .equalTo(sender_id)
        .once('value')
        .then(snap => {
          for (var key in snap?.val()) {
            let data = snap?.val()[key]?.reciever_id === reciever_id;
            if (data) {
              dispatch({
                type: 'GET_REQUEST_SUCCESS',
                payload: snap?.val()[key],
              });
            }
            console.log(data, 'data');
          }
        });
    } catch (err) {
      console.log(err, 'error');
      dispatch({type: 'GET_REQUEST_ERROR'});
    }
  };
};
export const getChatlist = (id, sender_id, data) => {
  return async dispatch => {
    try {
      dispatch({type: 'GET_CHATLIST_PROCESS'});
      database()
        .ref('databse/chatlist/')
        .orderByChild('reciever_id')
        .equalTo(id)
        .once('value')
        .then(async snap => {
          let array = [];
          for (var key in snap?.val()) {
            let obj = {...snap?.val()?.[key]};
            await database()
              .ref('databse/users/' + snap?.val()?.[key]?.sender_id)
              .once('value')
              .then(snap => {
                obj.sender = snap?.val();
                obj.id = key;
              });
            array?.push(obj);
          }
          dispatch({type: 'GET_CHATLIST_SUCCESS', payload: array});
        });
    } catch (err) {
      console.log(err, 'error');
      dispatch({type: 'GET_CHATLIST_ERROR'});
    }
  };
};

export const acceptRequest = (id, data, chatlist) => {
  return async dispatch => {
    try {
      dispatch({type: 'ACCEPT_REQUEST_PROCESS'});
      database()
        .ref('databse/chatlist/' + id)
        .update(data)
        .then(snap => {
          let array = chatlist;
          let fillterArray = id;
          let res = array.filter(({id}) => fillterArray.includes(id));
          console.log(res, 'obj');
          dispatch({type: 'ACCEPT_REQUEST_SUCCESS'});
        });
    } catch (err) {
      console.log(err, 'error');
    }
  };
};
