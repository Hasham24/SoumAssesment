import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CheckBox} from '../checkbox';
import useStyles from './styles';

export const ExpandableCheckbox: FC<IExpandableCheckboxProps> = props => {
  const styles = useStyles();
  const {checked, title, onPress} = props;
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox checked={checked} onPress={onPress} />
      <TouchableOpacity onPress={onPress} style={styles.accordion}>
        <Text style={styles.subTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
