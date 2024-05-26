import {useState} from 'react';

export default () => {
  // state management
  const [expandedCategory, setExpandedCategory] = useState<string[]>([]);
  const [expandedBrand, setExpandedBrand] = useState<string[]>([]);
  const [expandedModel, setExpandedModel] = useState<string[]>([]);
  const [selectedVariants, setSelectedVariants] = useState<{
    [key: string]: string[];
  }>({});
  // methods for handling state manipulation
  const handlePressCategory = (category: string) => {
    setExpandedCategory(prevState =>
      prevState.includes(category)
        ? prevState.filter(item => item !== category)
        : [...prevState, category],
    );
  };

  const handlePressBrand = (brand: string) => {
    setExpandedBrand(prevState =>
      prevState.includes(brand)
        ? prevState.filter(item => item !== brand)
        : [...prevState, brand],
    );
  };

  const handlePressModel = (model: string) => {
    setExpandedModel(prevState =>
      prevState.includes(model)
        ? prevState.filter(item => item !== model)
        : [...prevState, model],
    );
  };

  const handleSelectVariant = (model: string, variant: string) => {
    setSelectedVariants(prevState => {
      const currentVariants = prevState[model] || [];
      return {
        ...prevState,
        [model]: currentVariants.includes(variant)
          ? currentVariants.filter(item => item !== variant)
          : [...currentVariants, variant],
      };
    });
  };
  return {
    expandedCategory,
    expandedBrand,
    expandedModel,
    selectedVariants,
    handlePressCategory,
    handlePressBrand,
    handlePressModel,
    handleSelectVariant,
  };
};
