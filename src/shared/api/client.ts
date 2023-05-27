import axios from 'axios';
import {BASE_URL, CLIENT, authToken} from './config';

//Fetch new user token
export const fetchToken = async () => {
  const apiUrl = `${BASE_URL}/index.php/oauth/issueToken`;
  const requestData = {
    client_id: CLIENT.client_id,
    client_secret: CLIENT.client_secret,
    grant_type: CLIENT.grant_type,
  };

  try {
    const response = await axios.post(apiUrl, requestData);
    return response.data;
  } catch (error) {
    return error;
  }
};

//Login the user
export const loginUser = async (username: string, password: string) => {
  const apiUrl = `${BASE_URL}/api/v1/login`;
  const bearerToken = `Bearer ${authToken}`;
  const requestData = {
    username: username,
    password: password,
  };

  try {
    const response = await axios.post(apiUrl, requestData, {
      headers: {
        Authorization: bearerToken,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

//Get user by ID
export const getUserById = async (id: string) => {
  const apiUrl = `${BASE_URL}/api/v1/employee/${id}`;
  const bearerToken = `Bearer ${authToken}`;

  console.log('bearerToken => ', bearerToken);
  console.log('BASE_URL => ', apiUrl);

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: bearerToken,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
