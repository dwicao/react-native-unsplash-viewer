import Dimensions from 'Dimensions';
import { Platform } from 'react-native';

export const myWidth = Dimensions.get('window').width;
export const myHeight = Dimensions.get('window').height;
export const platformDiff = (Platform.OS === 'ios') ? 20 : 0;