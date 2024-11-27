export interface ProductsType {
  title: string;
  price: string | number;
  img: string;
}

export interface CardsProps {
  data: ProductsType[];
  onAddToCart: (item: ProductsType) => void;
  onAddToFavorite: (item: ProductsType) => void;
  onClick: (item: ProductsType) => void;
}

export interface CardProps {
  data: ProductsType;
  onAddToCart: (item: ProductsType) => void;
  onAddToFavorite: (item: ProductsType) => void;
  onClick: (item: ProductsType) => void;
}
