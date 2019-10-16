import { combineReducers, /*createStore*/ } from 'redux';
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { power } from './App';


const todoApp = combineReducers({
  power
})//combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，


//const persistedReducer = persistReducer(persistConfig, todoApp)


/*export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}*/

export default todoApp