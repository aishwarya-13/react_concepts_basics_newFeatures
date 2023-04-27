//It is recommended to use configureStore from the @reduxjs/toolkit package, which replaces createStore
import { legacy_createStore as createStore} from 'redux';
import cartReducer from './reducers/cart-reducer';

const store = createStore(cartReducer);

export default store;