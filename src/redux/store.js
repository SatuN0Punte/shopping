// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // นำเข้า reducer ของคุณ

const store = createStore(rootReducer);

export default store;
