import { put } from 'redux-saga/effects';
import * as Type from '../constant';

function* cartSage(item) {
    yield put({ type: Type.UPDATE_CART_DATA, item })
}

export default cartSage;

 