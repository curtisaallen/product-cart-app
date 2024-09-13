import productsData from '../../public/data.json';
import ProductItem from "./ProductItem";
import { Product } from '@/utils/productTypes';

export default function ProductsList({ handleAddToCart, cartItems }: any) {
  const products = productsData; 
  return (
    <>
      {products.map((product: Product) => (
        <ProductItem key={product.id} product={product} cartItems={cartItems}  handleAddToCart={handleAddToCart} />
      ))}
    </>
  );
}
