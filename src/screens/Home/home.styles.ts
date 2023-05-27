import {StyleSheet} from 'react-native';
import {scale} from '../../shared/styles/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    marginTop: scale(50),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: scale(36),
    fontWeight: 'bold',
    marginBottom: scale(10),
  },
  subtitle: {
    fontSize: scale(16),
    marginBottom: scale(20),
  },
  logOutButton: {
    backgroundColor: 'red',
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    borderRadius: scale(5),
  },
  logOutButtonText: {
    color: 'white',
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  image: {
    width: scale(200),
    height: scale(200), 
    resizeMode: 'contain', 
  },
});
