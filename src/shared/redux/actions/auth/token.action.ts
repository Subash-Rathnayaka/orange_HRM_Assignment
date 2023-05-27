import {fetchToken} from '../../../api/client';
import {setAuthToken} from '../../../api/config';

// Action type constant for fetch token success
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';

// Fetch token action creator
export const fetchTokenAction = () => (dispatch: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Call the fetchToken function to retrieve the access token
      const response = await fetchToken();

      // Set the retrieved access token in the API configuration
      setAuthToken(response.access_token ? response.access_token : '');
       
      // Dispatch FETCH_TOKEN_SUCCESS action with the access token payload
      dispatch({type: FETCH_TOKEN_SUCCESS, payload: response.access_token});
      
     // Resolve the promise with the access token
      resolve(response.access_token);
    } catch (error) {
      // Reject the promise with the error
      reject(error);
    }
  });
};
