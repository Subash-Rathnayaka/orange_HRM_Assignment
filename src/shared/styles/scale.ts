import {Dimensions} from 'react-native';
// Get the width and height of the device screen
const {width, height} = Dimensions.get('window');

// Define the base width and height used for scaling calculations
const guidelineBaseWidth = 428;
const guidelineBaseHeight = 926;

// Scale a size value based on the width of the device screen
const scale = (size: any) => (width / guidelineBaseWidth) * size;

// Scale a size value based on the height of the device screen
const verticalScale = (size: any) => (height / guidelineBaseHeight) * size;

// Scale a size value with a factor applied for moderate scaling
const moderateScale = (size: any, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};
