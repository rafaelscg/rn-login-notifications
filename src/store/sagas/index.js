import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';
import { navigate } from '~/services/navigation';
import { Creators as LoginActions, Types as LoginTypes } from '~/store/ducks/login';
import { Creators as SignupActions, Types as SignupTypes } from '~/store/ducks/signup';
import {
  Creators as NotificationsActions,
  Types as NotificationsTypes,
} from '~/store/ducks/notifications';

function* login(action) {
  try {
    const { data } = yield call(api.post, '/auth/sign-in', action.payload);

    yield put(LoginActions.loginSuccess(data));

    yield AsyncStorage.setItem('@Exam:accessToken', `Bearer ${data.accessToken}`);

    navigate('Notifications');
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}

function* signup(action) {
  try {
    const { data } = yield call(api.post, '/auth/sign-up', action.payload);

    yield put(SignupActions.signupSuccess(data));

    yield AsyncStorage.setItem('@Exam:accessToken', `Bearer ${data.accessToken}`);

    navigate('Notifications');
  } catch (err) {
    yield put(SignupActions.signupFailure());
  }
}

function* loadNotifications() {
  try {
    const headerParams = {
      headers: {
        Authorization: yield AsyncStorage.getItem('@Exam:accessToken'),
      },
    };

    const { data } = yield call(api.get, '/notifications', headerParams);

    yield put(NotificationsActions.loadNotificationsSuccess(data));
  } catch (err) {
    yield put(NotificationsActions.loadNotificationsFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, login),
    takeLatest(NotificationsTypes.LOAD_REQUEST, loadNotifications),
    takeLatest(SignupTypes.REQUEST, signup),
  ]);
}
