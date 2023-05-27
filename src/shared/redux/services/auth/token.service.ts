import {fetchToken} from '../../../api/client';

// Define an async function to handle fetching the token
export const fetchTokenService = async () => {
  try {
    // Call the fetchToken function from the API client and wait for the token
    const token = await fetchToken();
    return token; // Return the token
  } catch (error: any) {
    throw new Error(error);  // Throw an error if an exception occurs
  }
};
