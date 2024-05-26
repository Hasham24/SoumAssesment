import {StyleSheet} from 'react-native';
import {Colors, FontSize} from '../../../theme';
const useStyle = () => {
  return StyleSheet.create({
    accordion: {
      flex: 1,
      padding: 10,
      borderRadius: 5,
      marginVertical: 5,
      backgroundColor: Colors.gallery,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    subTitle: {
      fontSize: FontSize.standard,
      color: Colors.black,
      fontWeight: '500',
    },
  });
};
export default useStyle;
