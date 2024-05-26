interface ICustomCheckboxProps {
  checked: boolean;
  onPress: () => void;
}
interface IExpandableCheckboxProps {
  checked: boolean;
  title: string;
  onPress: () => void;
}
interface ISelectedVariants {
  selectedVariants: {
    [key: string]: string[];
  };
}
