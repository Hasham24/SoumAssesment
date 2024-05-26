interface Variant {
  name: string;
  count: string;
}

interface Model {
  name: string;
  variants: Variant[];
}

interface Brand {
  name: string;
  models: Model[];
}

interface Category {
  category: string;
  brands: Brand[];
}

interface ProductTreeViewProps {
  data: Category[];
}
