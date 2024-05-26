import {StyleSheet} from 'react-native';
import {Colors, FontSize} from '../../../theme';
const useStyle = () => {
  return StyleSheet.create({
    selectedContainer: {
      padding: 10,
      backgroundColor: Colors.white,
      borderRadius: 5,
      marginTop: 10,
      elevation: 2,
    },
    selectedTitle: {
      fontSize: FontSize.regular,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    selectedVariants: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    selectedVariant: {
      backgroundColor: Colors.alto,
      borderRadius: 5,
      padding: 5,
      margin: 5,
    },
    selectedText: {
      fontSize: FontSize.standard,
      color: Colors.black,
    },
  });
};
export default useStyle;
