import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useStyle from './styles';
export const CheckBox: FC<ICustomCheckboxProps> = props => {
  const {checked, onPress} = props;
  const styles = useStyle();
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkbox}>
      {checked ? (
        <Icon name="check-box" size={24} color="#000" />
      ) : (
        <Icon name="check-box-outline-blank" size={24} color="#000" />
      )}
    </TouchableOpacity>
  );
};
