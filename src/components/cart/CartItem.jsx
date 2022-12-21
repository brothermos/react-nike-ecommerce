import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
   setDecreaseItemQTY,
   setIncreaseItemQTY,
   setRemoveItemFromCart,
} from "../../app/CartSlice";

const CartItem = ({
   item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
   const dispatch = useDispatch();

   // ลบสินค้าในตะกร้า
   const onRemoveItem = () => {
      dispatch(
         setRemoveItemFromCart({
            id,
            title,
            text,
            img,
            color,
            shadow,
            price,
            cartQuantity,
         })
      );
   };

   // เพิ่มจำนวนสินค้าในตะกร้า
   const onIncreaseItemQTY = () => {
      dispatch(
         setIncreaseItemQTY({
            id,
            title,
            text,
            img,
            color,
            shadow,
            price,
            cartQuantity,
         })
      );
   };

   // ลดจำนวนสินค้าในตะกร้า
   const onDecreaseItemQTY = () => {
      dispatch(
         setDecreaseItemQTY({
            id,
            title,
            text,
            img,
            color,
            shadow,
            price,
            cartQuantity,
         })
      );
   };

   return (
      <>
         <div className="flex w-full items-center justify-between px-5">
            <div className="flex items-center gap-5">
               <div
                  className={`bg-gradient-to-b ${color} ${shadow} relative grid items-center rounded p-3 transition-all duration-75 ease-in-out hover:scale-105`}
               >
                  <img
                     src={img}
                     alt={`img/cart-item/${id}`}
                     className="h-auto w-36 object-fill lg:w-28"
                  />
                  <div className="blur-theme-effect absolute right-1 top-1 rounded bg-white/80 px-1 text-xs text-black">
                     ${price}
                  </div>
               </div>
               <div className="grid items-center gap-4">
                  <div className="grid items-center leading-none">
                     <h1 className="text-lg font-medium text-slate-900 lg:text-sm">
                        {title}
                     </h1>
                     <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
                  </div>
                  <div className="flex w-full items-center justify-around">
                     <button
                        type="button"
                        onClick={onDecreaseItemQTY}
                        className="bg-theme-cart flex h-6 w-6 items-center justify-center rounded active:scale-90 lg:h-5 lg:w-5"
                     >
                        <MinusIcon className="h-5 w-5 stroke-[2] text-white lg:h-4 lg:w-4" />
                     </button>
                     <div className="bg-theme-cart flex h-6 w-7 items-center justify-center rounded font-medium text-white lg:h-5 lg:w-6 lg:text-xs">
                        {cartQuantity}
                     </div>
                     <button
                        type="button"
                        onClick={onIncreaseItemQTY}
                        className="bg-theme-cart flex h-6 w-6 items-center justify-center rounded active:scale-90 lg:h-5 lg:w-5"
                     >
                        <PlusIcon className="h-5 w-5 stroke-[2] text-white lg:h-4 lg:w-4" />
                     </button>
                  </div>
               </div>
            </div>
            <div className="grid items-center gap-5">
               <div className="grid items-center justify-center">
                  <h1 className="text-lg font-medium text-slate-900 lg:text-base">
                     ${price * cartQuantity}
                  </h1>
               </div>
               <div className="grid items-center justify-center">
                  <button
                     type="button"
                     onClick={onRemoveItem}
                     className="bg-theme-cart grid cursor-pointer cursor-pointer items-center justify-items-center rounded p-1 lg:p-0.5"
                  >
                     <TrashIcon className="h-5 w-5 text-white" />
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default CartItem;
