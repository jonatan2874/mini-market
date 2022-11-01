import { createStore } from 'redux'
import rootReducer from './reducers'
import { 
  INCREMENT_TO_CART,
  DECREMENT_FROM_CART,
  REMOVE_FROM_CART} from './reducers/cart'

export const increment = (payload) => {
  return {
    type: INCREMENT_TO_CART,
    payload
  }
}

export const decrement = (payload) => {
  return {
    type: DECREMENT_FROM_CART,
    payload
  }
}

const store = createStore(rootReducer)

export default store