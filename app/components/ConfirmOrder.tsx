
import React  from 'react';
import Image from "next/image";
import ConfirmItem from './ConfirmItem';
export default function ConfirmOrder({handleStartNew, cartItems}:any) {
    let totalPrice = cartItems.reduce((sum:number, product:any) => sum + product.price * product.quantity, 0);
    const formattedNumber:any = (number:number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(number);
    } 
    const handleStart = (confirm:boolean) => {
        handleStartNew(confirm)
    }  
    return (
    <div className="bg-white p-3 rounded mt-8 ms-3 me-3 confirmorder-modal">
        <Image src="/images/icon-order-confirmed.svg" width={40} height={40} alt="checkmark icon" />
        <h3 className="text-xl text-[#000000] font-bold leading-8 mb-1">
          Confirm Order
        </h3>
        <h4 className='mb-6 text-sm text-[#866359]'>We hope you enjoy your food!</h4>
        <div className='mt-2 p-3 bg-[#f4edeb] rounded'>

        {cartItems.map((product: any) => (
            <ConfirmItem key={product.id} product={product} />
        ))}  

        <p className='mb-3 mt-2 flex justify-between'>
            <span>
                Order total:
            </span>
            <span className='font-bold'> 
            {formattedNumber(totalPrice)}
            </span>
         </p>
        </div>
        <button onClick={() => handleStart(false)} className="font-bold bottom-[-18px] w-[94%] ms-3 me-3 mt-4 bg-[#c73b10] hover:border-[#c73b10] text-white py-2 px-4 border border-[#866359] hover:border-transparent rounded-3xl">
            Start new order
        </button>
    </div>
  );
}
