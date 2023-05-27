const navigate = (navigation: any, name: string, params?: any) => {
  // Function to navigate to a screen by name with optional parameters
  navigation.navigate(name, params);
};

const navigatePush = (navigation: any, name: string, params?: any) => {
  // Function to push a screen onto the stack by name with optional parameters
  navigation.push(name, params);
};

const goBack = (navigation: any) => {
  // Function to navigate back to the previous screen
  navigation.goBack();
};

const setParams = (navigation: any, params?: any) => {
  // Function to set parameters for the current screen
  navigation.setParams(params);
};

export default {navigate, goBack, navigatePush, setParams};
