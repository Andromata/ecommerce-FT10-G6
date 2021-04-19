/*eslint-disable*/

import * as TYPES from '../types/index';

const initialState = {
  currentOrder: [],
  allOrders: [],
  allUsers: [],
};

export default function reducerOrderUser (state = initialState, action){

  switch (action.type) {

    case TYPES.GET_CURRENT_ORDER:{
      return {
        ...state,
        currentOrder: [action.payload]
      }

    }

    case TYPES.GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      };

    case TYPES.GET_ALL_USERS:
    return {
        ...state,
        allUsers: action.payload,
    };
  
    default:
      return state;
  }
};