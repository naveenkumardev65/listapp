import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getAllUsers, getAllPosts } from './remotes'
import { loadUserRecordsError, loadUserRecordsSuccess } from './action';
import { LOAD_USER_RECORDS } from './constant';


function* getAllUserPostsSaga() {
    yield takeLatest(LOAD_USER_RECORDS, function* updater({ load }) {
        if(load) {
            try {
                const posts = yield call(getAllPosts);
                const users = yield call(getAllUsers);

                if(posts && users) {
                    yield put(loadUserRecordsSuccess(posts, [{ id: 'all', name: 'All' },...users]));
                } else {
                    yield put(loadUserRecordsError('Failed to load posts & users'));
                }

            } catch (error) {
                yield put(loadUserRecordsError('Failed to load posts & users'));
            }
        }
    })
}




export default function* rootSagas() {
  yield all([
    getAllUserPostsSaga()
  ])
};