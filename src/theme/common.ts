import {StyleSheet} from 'react-native';
import {Colors} from '../theme';
export const useCommonStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: Colors.wildSand,
    },
  });
};
