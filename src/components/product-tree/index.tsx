import React, {memo, FC} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {ExpandableCheckbox, SelectedItem} from '~components';
import useProductTree from './useProductTree';
import useStyles from './styles';

const ProductTreeView: FC<ProductTreeViewProps> = ({data}) => {
  const {
    expandedCategory,
    expandedBrand,
    expandedModel,
    selectedVariants,
    handlePressCategory,
    handlePressBrand,
    handlePressModel,
    handleSelectVariant,
  } = useProductTree();

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((categoryItem, categoryIndex) => (
          <View key={categoryIndex} style={styles.section}>
            <ExpandableCheckbox
              onPress={() => handlePressCategory(categoryItem.category)}
              checked={expandedCategory.includes(categoryItem.category)}
              title={categoryItem.category}
            />
            {expandedCategory.includes(categoryItem.category) &&
              categoryItem.brands.map((brandItem, brandIndex) => (
                <View key={brandIndex} style={styles.subSection}>
                  <ExpandableCheckbox
                    checked={expandedBrand.includes(brandItem.name)}
                    onPress={() => handlePressBrand(brandItem.name)}
                    title={brandItem.name}
                  />
                  {expandedBrand.includes(brandItem.name) &&
                    brandItem.models.map((modelItem, modelIndex) => (
                      <View key={modelIndex} style={styles.subSection}>
                        <ExpandableCheckbox
                          checked={expandedModel.includes(modelItem.name)}
                          onPress={() => handlePressModel(modelItem.name)}
                          title={modelItem.name}
                        />
                        {expandedModel.includes(modelItem.name) &&
                          modelItem.variants.map(
                            (variantItem, variantIndex) => (
                              <View
                                key={variantIndex}
                                style={styles.subSection}>
                                <ExpandableCheckbox
                                  checked={(
                                    selectedVariants[modelItem.name] || []
                                  ).includes(variantItem.name)}
                                  onPress={() =>
                                    handleSelectVariant(
                                      modelItem.name,
                                      variantItem.name,
                                    )
                                  }
                                  title={variantItem.name}
                                />
                                <Text style={styles.itemCount}>
                                  {variantItem.count}
                                </Text>
                              </View>
                            ),
                          )}
                      </View>
                    ))}
                </View>
              ))}
          </View>
        ))}
      </ScrollView>
      <SelectedItem selectedVariants={selectedVariants} />
    </View>
  );
};

export default memo(ProductTreeView);
