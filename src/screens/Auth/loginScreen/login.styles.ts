import {StyleSheet} from 'react-native';
import { scale } from '../../../shared/styles/scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: scale(24),
    fontWeight: 'bold',
    marginBottom: scale(20),
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: scale(40),
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: scale(10),
    paddingHorizontal: scale(10),

  },
  passwordInput: {
    flexDirection:'row',
    alignContent:'space-between',
    alignItems:'center',
    justifyContent:'space-between',
    height: scale(40),
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: scale(10),
    paddingHorizontal: scale(10),
    
  },
  logInButton: {
    backgroundColor: '#3498db',
    paddingVertical: scale(10),
    borderRadius: scale(5),
    marginBottom: scale(10),
  },
  instagramButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: scale(10),
    borderRadius: scale(5),
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  appName: {
    fontSize: scale(24),
    fontWeight: 'bold',
    marginTop: scale(20),
  },
  footerContainer: {
    marginTop: scale(20),
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
  },
  footerLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  image: {
    width: scale(120),
    height: scale(120), 
    resizeMode: 'contain', 
  },
});
