
// Definir tipos de acciones (action types)
export const FETCH_DRIVERS_REQUEST = 'FETCH_DRIVERS_REQUEST';
export const FETCH_DRIVERS_SUCCESS = 'FETCH_DRIVERS_SUCCESS';
export const FETCH_DRIVERS_FAILURE = 'FETCH_DRIVERS_FAILURE';

export const CREATE_DRIVER_REQUEST = 'CREATE_DRIVER_REQUEST';
export const CREATE_DRIVER_SUCCESS = 'CREATE_DRIVER_SUCCESS';
export const CREATE_DRIVER_FAILURE = 'CREATE_DRIVER_FAILURE';

// Acción para solicitar la obtención de conductores
export const fetchDriversRequest = () => ({
  type: FETCH_DRIVERS_REQUEST,
});

// Acción para indicar la obtención exitosa de conductores
export const fetchDriversSuccess = (drivers) => ({
  type: FETCH_DRIVERS_SUCCESS,
  payload: drivers,
});

// Acción para indicar un error al obtener conductores
export const fetchDriversFailure = (error) => ({
  type: FETCH_DRIVERS_FAILURE,
  payload: error,
});

// Acción para solicitar la creación de un conductor
export const createDriverRequest = (newDriverData) => ({
  type: CREATE_DRIVER_REQUEST,
  payload: newDriverData,
});

// Acción para indicar la creación exitosa de un conductor
export const createDriverSuccess = (newDriver) => ({
  type: CREATE_DRIVER_SUCCESS,
  payload: newDriver,
});

// Acción para indicar un error en la creación de un conductor
export const createDriverFailure = (error) => ({
  type: CREATE_DRIVER_FAILURE,
  payload: error,
});
