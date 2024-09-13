export type Product = {
    id: number;
    name: string;
    image: { desktop: string };
    price: number;
    quantity?: number; 
};
  
export type CartItem = Product & { quantity: number };