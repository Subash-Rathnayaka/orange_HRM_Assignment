import {StyleSheet} from 'react-native';
import {scale} from '../../shared/styles/scale';
import commonColors from '../../shared/styles/colors';

const styles = StyleSheet.create({
  mainView: {
    flex:1,
  },
  container: {
    minHeight: scale(62),
    marginLeft: scale(34),
    marginRight: scale(34),
    borderRadius: scale(10),
    padding: scale(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIconStyle: {
    paddingLeft: scale(5),
  },
  bgColorOrange: {
    backgroundColor: commonColors.orange_DD4C52,
  },
  bgColorGreen: {
    backgroundColor: commonColors.green_569F6C,
  },
  text: {
    fontFamily: 'CirceBold-Bold',
    fontSize: scale(16),
    color: commonColors.white_FAFBFC,
    textAlign: 'center',



  },
});

export default styles;
