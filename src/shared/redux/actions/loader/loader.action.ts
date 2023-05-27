import {Dispatch} from 'redux';

// Action type constant for updating loader state
export const UPDATE_LOADER = 'UPDATE_LOADER';

// Loader trigger action creator
export const loaderTrigger = (isLoading = false) => {
  return async (dispatch: Dispatch) => {
    // Dispatch UPDATE_LOADER action with the isLoading payload
    dispatch({
      type: UPDATE_LOADER,
      payload: isLoading,
    });
  };
};
