import React from "react";
import {
   ChevronDoubleLeftIcon,
   XMarkIcon,
   TrashIcon,
} from "@heroicons/react/24/solid";
const CartCount = ({ onCartToggle, onClearCartItems, totalQTY }) => {
   return (
      <>
         <div
            className="sticky top-0 left-0 right-0 flex h-11 
            w-full items-center justify-between bg-white px-3"
         >
            <div className="flex items-center gap-3">
               <div className="gird cursor-pointer items-center">
                  <ChevronDoubleLeftIcon
                     onClick={onCartToggle}
                     className="strock-[2] h-5 w-5 text-slate-900 hover:text-orange-500"
                  />
               </div>
               <div className="gird items-center">
                  <h1 className="text-base font-medium text-slate-900">
                     Your Cart{" "}
                     <span className="bg-theme-cart rounded px-1 py-0.5 text-xs font-normal text-slate-100">
                        ({totalQTY}Items)
                     </span>
                  </h1>
               </div>
            </div>
            <div className="flex items-center">
               <button
                  type="button"
                  onClick={onClearCartItems}
                  className="bg-theme-cart mx-3 rounded p-0.5 active:scale-90"
               >
                  <TrashIcon className="h-5 w-5 text-white" />
               </button>
               <button
                  type="button"
                  onClick={onCartToggle}
                  className="bg-theme-cart rounded p-0.5 active:scale-90"
               >
                  <XMarkIcon className="h-5 w-5 stroke-[2] text-white" />
               </button>
            </div>
         </div>
      </>
   );
};

export default CartCount;
