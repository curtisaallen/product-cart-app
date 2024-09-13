'use client';
import { useState } from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import ConfirmOrder from "./components/ConfirmOrder";

export default function Home() {
   const [cartItems, setCartItems] = useState<any[]>([]);
   const [order, setOrder] = useState<boolean>(false)
   const handleAddToCart = (product: any, changeQuantity: number = 1) => {
        if (changeQuantity === 0) {
          const updateCart = cartItems.filter((item) => item.id !== product.id);
          setCartItems(updateCart); 
        } else  {
        setCartItems((prevCartItems) => {
          const existingItem = prevCartItems.find((item) => item.id === product.id);
            if (existingItem) {
              const updatedCartItems = prevCartItems
                .map((item) =>
                  item.id === product.id
                    ? {
                        ...item,
                        quantity: Math.max(item.quantity + changeQuantity, 0), 
                      }
                    : item
                )
                .filter((item) => item.quantity > 0); 
              return updatedCartItems;
            } else {
              const updatedCart = [...prevCartItems, { ...product, quantity: 1 }];
              return updatedCart;
            }
        });
      }
  };

  const handleRemoveFromCart = (product:any) => {
    console.log(product, 'hey')
    const updateCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updateCart); 
  }

  const handleConfirmOrder = (confirm:boolean) => {
    setOrder(confirm);
  }

  const handleStartNewOrder = (confirm:boolean) => {
    setOrder(confirm);
    setCartItems([]); 
  }
  
    return (
      <>
      {order && <ConfirmOrder cartItems={cartItems} handleStartNew={handleStartNewOrder} /> }   
        <main className="max-w-[1210px] w-full mx-auto px-4">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <div>
                      <h1 className="text-3xl font-bold leading-8 my-8">Desserts</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                       <ProductsList handleAddToCart={handleAddToCart} cartItems={cartItems}  />
                    </div>
                </div>
                <div>
                    <Cart cartItems={cartItems} handleConfirmOrder={handleConfirmOrder} handleRemoveFromCart={handleRemoveFromCart}  />
                </div>
            </div>
        </main>
        </>
    );
}
