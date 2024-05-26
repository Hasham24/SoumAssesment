import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: Colors.wildSand,
    },
    section: {
      marginVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: Colors.white,
      borderRadius: 5,
      elevation: 2,
    },
    subSection: {
      marginLeft: 20,
      marginVertical: 5,
    },
    itemCount: {
      fontSize: 12,
      color: '#888',
      marginLeft: 10,
    },
  });
};
export default useStyle;
