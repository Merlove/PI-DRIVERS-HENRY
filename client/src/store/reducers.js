
import {
    FETCH_DRIVERS_REQUEST,
    FETCH_DRIVERS_SUCCESS,
    FETCH_DRIVERS_FAILURE,
    CREATE_DRIVER_REQUEST,
    CREATE_DRIVER_SUCCESS,
    CREATE_DRIVER_FAILURE,
  } from './actions';
  
  // Estado inicial del store
  const initialState = {
    drivers: [],
    loading: false,
    error: null,
  };
  
  // Reducer para manejar las acciones relacionadas con los conductores
  const driverReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DRIVERS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_DRIVERS_SUCCESS:
        return {
          ...state,
          drivers: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_DRIVERS_FAILURE:
        return {
          ...state,
          drivers: [],
          loading: false,
          error: action.payload,
        };
      case CREATE_DRIVER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case CREATE_DRIVER_SUCCESS:
        return {
          ...state,
          drivers: [...state.drivers, action.payload],
          loading: false,
          error: null,
        };
      case CREATE_DRIVER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default driverReducer;
  