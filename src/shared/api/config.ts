import AsyncStorage from '@react-native-community/async-storage';

// Base URL of the API endpoint
export const BASE_URL = 'https://subash-osondemand.orangehrm.com/symfony/web';

// Client credentials required for authentication
export const CLIENT = {
  client_id: 'orange_hrm_subash',
  client_secret: '123456789',
  grant_type: 'client_credentials',
};

// Variable to store the authentication token
export let authToken = '';

// Function to set the authentication token
export const setAuthToken = async (token: string) => {
  // Store the token in AsyncStorage
  AsyncStorage.setItem('token', token ? token : '');
  // Update the authToken variable
  authToken = token;
};

// Function to clear the authentication configuration
export const clearConfig = async () => {
  // Remove the token from AsyncStorage
  AsyncStorage.setItem('token', '');
  // Reset the authToken variable
  authToken = '';
};
