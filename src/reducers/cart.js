
const INITIAL_STATE = (localStorage.cart)? JSON.parse(localStorage.cart) : [];

export const INCREMENT_TO_CART = 'INCREMENT_TO_CART';
export const DECREMENT_FROM_CART = 'DECREMENT_FROM_CART';
export const REMOVE_FROM_CART = 'remove_FROM_CART';

function cart (state = INITIAL_STATE, action) {
  let payload,filteredState;

  switch (action.type) {
    case INCREMENT_TO_CART:
      payload = state.find(element=>element.id===action.payload.id) ?? action.payload
      payload.quantity =( payload.quantity )? payload.quantity+1 : 1 ;

      filteredState = state.filter(element=>element.id!==action.payload.id) ?? state

      localStorage.cart = JSON.stringify([...filteredState,payload]);
      return [...filteredState,payload];

    case DECREMENT_FROM_CART:
      payload = state.find(element=>element.id===action.payload.id) ?? action.payload
      payload.quantity =( payload.quantity && payload.quantity>0)? payload.quantity-1 : 0 ;

      filteredState = state.filter(element=>element.id!==action.payload.id) ?? state

      localStorage.cart = JSON.stringify([...filteredState,payload]);
      return [...filteredState,payload];
    
    case REMOVE_FROM_CART:
      return state

    default:
      return state
  }
}

export default cart;
