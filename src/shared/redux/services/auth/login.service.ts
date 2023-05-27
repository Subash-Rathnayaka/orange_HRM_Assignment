import {loginUser} from '../../../api/client';

// Define an async function to handle login service
export const loginUserService = async (username: string, password: string) => {
  try {

    // Call the loginUser function from the API client and wait for the response
    const response = await loginUser(username, password);
    return response; // Return the response

  } catch (error: any) {

    return error; // Return the error if an exception occurs
    
  }
};
