import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './home.styles';
import {logout} from '../../shared/redux/actions/auth/logOut.action';
import {profile} from '../../shared/redux/actions/auth/profile.action';
import {connect} from 'react-redux';
import {IHome} from './home.interface';
import ProfileIcon from '../../shared/asset/images/profile/profile-icon.png';

const HomeScreen = (props: IHome) => {
  const {logout, profile} = props;

  // Destructuring styles from the styles object
  const {container,profileContainer,title,image,logOutButton,logOutButtonText,subtitle} = styles;
  
  // State variables for profile image URL and image loading error
  const [profileImageUrl, setProfileImageUrl] = useState('https://cdn-icons-png.flaticon.com/512/3135/3135715.png'); 
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  useEffect(() => {
    // Fetch user profile 
    profile(props.userId);
  }, []);

  const logOutUser = () => {
    // Logout user
    logout();
  };

  return (
    <View style={container}>
          <View><Text style={title}>Home Screen</Text></View>  
      <View>
        {/* Conditionally render profile image based on image error */}
        <Image source={imageError ? ProfileIcon : { uri: profileImageUrl }} style={image} onError={handleImageError}/>
    </View>

    <View style={profileContainer}><Text style={styles.subtitle}>Employee Id: {props.userEmployeeId}</Text>
      <Text style={subtitle}>
        Employee Code: {props.userEmployeeCode}
      </Text>
      <Text style={subtitle}>First Name: {props.userFirstName}</Text>
      <Text style={subtitle}>Last Name: {props.userLastName}</Text></View>
      <Text style={subtitle}>Full Name: {props.userFullName}</Text>

      <TouchableOpacity
        style={logOutButton}
        onPress={() => {
          logOutUser();
        }}>
        <Text style={logOutButtonText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  userId: state.authReducer?.user?.user?.employeeId ?? '',
  userFullName: state.authReducer?.userProfile?.data?.fullName ?? '',
  userFirstName: state.authReducer?.userProfile?.data?.firstName ?? '',
  userLastName: state.authReducer?.userProfile?.data?.lastName ?? '',
  userEmployeeId: state.authReducer?.userProfile?.data?.employeeId ?? '',
  userEmployeeCode: state.authReducer?.userProfile?.data?.code ?? '',
});

const mapDispatchToProps = {
  logout,
  profile,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
