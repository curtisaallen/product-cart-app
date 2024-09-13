
import Image from "next/image";

export default function ConfirmItem({ product }: any) {
   return (
    <div className="flex items-start space-x-4 mb-4 pb-3 border-b-2 border-[#e7dfdd]">
    <div className="">
      <Image 
        src={product.image.mobile}
        width={50} 
        height={60} 
        alt="checkmark icon"
        className="rounded"
      />
    </div>
    <div className="flex-1">
      <h3 className="text-sm font-semibold">{product.category}</h3>
      <div className="flex justify-between items-center mt-1">
        <div className="text-sm">
          <span className="text-sm font-bold text-[#c73b10] me-2">{product.quantity}x</span> 
          <span className='text-sm text-[#866359] font-normal'>@ ${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
    <div className="text-sm font-semibold">
      ${product.price.toFixed(2)}
    </div>
  </div>
   )
};