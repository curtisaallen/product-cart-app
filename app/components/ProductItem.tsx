'use client'; 
import React, { useState } from 'react';
import Image from "next/image";
import { CartItem } from '@/utils/productTypes';

export default function ProductItem({ product, handleAddToCart, cartItems }: any) {
    const productInCart = cartItems.find((item: CartItem) => item.id === product.id);
    const quantity = productInCart ? productInCart.quantity : 0;
    const formattedNumber:any = (number:number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(number);
    } 


    const handleIncrement = () => {
        handleAddToCart(product, 1); // Add 1 to the quantity
      };
    
      const handleDecrement = () => {
        if (quantity > 1) {
          handleAddToCart(product, -1); // Remove 1 from the quantity
        } else {
            handleAddToCart(product, 0);
        }
      };

  return (
    <div className="w-[250px]">
     <div className="product-img relative mb-9">
      <Image
        className={`mb-3 rounded ${quantity > 0 ? 'border-2 border-[#c73b10]' : ''}`}
        src={product.image.desktop}
        width={500}
        height={500}
        alt="Product image"
      />
      {quantity > 0 ?  
      (
        <div className="flex space-x-4 justify-around absolute justify-items-center content-center bottom-[-18px] w-[172px] m-auto left-0 right-0 bg-[#c73b10] hover:border-[#c73b10] text-white font-normal py-2 px-4 border border-[#866359] hover:border-transparent rounded-3xl">
        <Image 
            src="/images/icon-decrement-quantity.svg"
            width={17}
            height={17}
            alt="decrement"
            className="decrement"
            onClick={handleDecrement}
        />
        <p className="cart-number text-lg font-semibold">{quantity}</p>
        <Image 
            src="/images/icon-increment-quantity.svg"
            width={17}
            height={17}
            alt="increment"
            className="increment"
            onClick={handleIncrement}
        />
        </div>

      ) : 
      (
        <button onClick={handleIncrement} className="flex items-center absolute bottom-[-18px] w-[172px] m-auto left-0 right-0 bg-[#f4edeb] hover:border-[#c73b10] text-[#866359] font-normal hover:text-[#c73b10] py-2 px-4 border border-[#866359] hover:border-[#866359] rounded-3xl">
            <Image 
                src="/images/icon-add-to-cart.svg"
                width={30}
                height={30}
                alt="add to cart icont"
                className="me-2"
            />
           Add to Cart
        </button>
      )}
      </div>   

      <p className="mb-1">{product.category}</p>
      <p className="font-bold mb-1">{product.name}</p>
      <p className="text-[#c73b10] font-bold mb-3">{formattedNumber(product.price)}</p>
    </div>
  );
}
