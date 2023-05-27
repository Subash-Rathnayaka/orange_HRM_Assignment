import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Linking, Image} from 'react-native';
import {styles} from './login.styles';
import {ILogIn} from './login.interface';
import {fetchTokenAction} from '../../../shared/redux/actions/auth/token.action';
import {login} from '../../../shared/redux/actions/auth/login.action';
import {connect} from 'react-redux';
import {loginValidation} from './logic/validation';
import Logo from '../../../shared/asset/images/common/logo.png';

const LoginScreen = (props: ILogIn) => {
  const {login, onInstagramLogIn, fetchTokenAction} = props;

  // Destructuring styles from the styles object
  const {container,appName,title,formContainer,input, passwordInput ,image,logInButton,footerContainer,footerLink,footerText,buttonText} = styles;
  // State variables for username and password
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);

  const openWebsite = () => {
    // Open website link in browser
    Linking.openURL('https://www.orangehrm.com/');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onLoginUser = () => {
    fetchTokenAction().then(() => {
      // Perform login if the input is valid
      if (loginValidation(username, password)) {
        login(username, password);
      }
    });
  };

  return (
    <View style={container}>

     <View>
        <Image source={Logo} style={image}/>
    </View>
      <Text style={appName}>Orange HRM</Text>
      <Text style={title}>LogIn</Text>
      <View style={formContainer}>
        {/* Input field for username */}
        <TextInput
          style={input}
          placeholder="Username"
          onChangeText={text => {
            setUserName(text);
          }}
          value={username}
        />
        {/* Input field for password */}
        
          <View style={passwordInput}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            onChangeText={text => {
              setPassword(text);
            }}
            value={password}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Text>{passwordVisible ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
        {/* Button for login*/}
        <TouchableOpacity
          style={logInButton}
          onPress={() => {
            onLoginUser();
          }}>
          <Text style={buttonText}>LogIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.instagramButton}
          onPress={onInstagramLogIn}>
          <Text style={buttonText}>LogIn with Instagram</Text>
        </TouchableOpacity>
      </View>
      <View style={footerContainer}>
        <Text style={footerText}>
          Copy rights
          {'\n'}
          <Text style={footerLink} onPress={openWebsite}>
          https://www.orangehrm.com/
          </Text>
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  token: state.authReducer.token,
});

const mapDispatchToProps = {
  fetchTokenAction,
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
