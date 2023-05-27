import {getUserById} from '../../../api/client';

// Define an async function to handle profile service
export const profileService = async (id: string) => {
  try {
    // Call the getUserById function from the API client and wait for the response
    const response = await getUserById(id);
    return response;  // Return the response
  } catch (error: any) {
    return error;   // Return the error if an exception occurs
  }
};
