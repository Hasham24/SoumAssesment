import React, {FC} from 'react';
import {View, Text} from 'react-native';
import useStyles from './styles';

const SelectedItem: FC<ISelectedVariants> = props => {
  const styles = useStyles();
  const {selectedVariants} = props;
  return (
    <View style={styles.selectedContainer}>
      <Text style={styles.selectedTitle}>Selected Variants</Text>
      <View style={styles.selectedVariants}>
        {Object.keys(selectedVariants).map(model =>
          selectedVariants[model].map((variant, index) => (
            <View key={index} style={styles.selectedVariant}>
              <Text style={styles.selectedText}>{`${model} ${variant}`}</Text>
            </View>
          )),
        )}
      </View>
    </View>
  );
};
export default SelectedItem;
