
import React  from 'react';
import Image from "next/image";
export default function Cart({  cartItems, handleRemoveFromCart, handleConfirmOrder }: any) {
    let totalPrice = cartItems.reduce((sum:number, product:any) => sum + product.price * product.quantity, 0);
    const formattedNumber:any = (number:number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(number);
    } 
    const handleRemove = (product:any) => {
        handleRemoveFromCart(product); 
      };
    const handleConfirm = (confirm:boolean) => {
        handleConfirmOrder(confirm)
    }  
    return (
    <div className="bg-white p-3 rounded mt-8 ms-3 me-3">
      <h3 className="text-xl text-[#866359] font-bold leading-8 mb-3">Your cart ({cartItems.length})</h3>
      {cartItems.length > 0 ?  
      (
      <div>
       {cartItems.map((product: any) => (
                <div key={product.id}>
                <p className="title-list font-bold mb-2">{product.category}</p> 
                   <div className='flex'>
                    <p className="title-list me-4 font-bold text-[#c73b10]">{product.quantity}X</p> 
                    <p className="title-list me-4">@{product.price.toFixed(2)}</p> 
                    <p className="title-list font-bold">{formattedNumber(product.price * product.quantity)}</p>
                   </div>
                   <div className='border-b-2 border-[#f0f0f0] mb-4'>
                    <button className='close mb-3' onClick={() => handleRemove(product)}>
                    <Image
                        src="/images/icon-remove-item.svg"
                        width={10}
                        height={10}
                        alt="x close"
                    
                    />
                    </button> 
                   </div> 
                </div>
      ))}
                
                <p className='mb-6 flex justify-between'>
                    <span>
                        Order total:
                    </span>
                    <span className='font-bold'> 
                    {formattedNumber(totalPrice)}
                    </span>
                </p>
                <button onClick={() => handleConfirm(true)} className="font-bold bottom-[-18px] w-[94%] ms-3 me-3 bg-[#c73b10] hover:border-[#c73b10] text-white py-2 px-4 border border-[#866359] hover:border-transparent rounded-3xl">
                    Confirm Order
                </button>
        </div>
      ) : (
        <div>
        <Image
        className='m-auto'
        src="/images/illustration-empty-cart.svg"
        width={128}
        height={128}
        alt="Product image"
      />
        <p className="text-[#866359] font-bold text-center">Your added items will appear here</p>
        </div>
      )}
    </div>
  );
}
