import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import emptybag from "../../assets/emptybag.png";

const CartEmpty = ({ onCartToggle }) => {
   return (
      <>
         <div className="flex h-screen flex-col items-center justify-center gap-7 px-11 text-center ">
            <img
               src={emptybag}
               alt="emptybag/img"
               className="sm:-28 h-auto w-40 object-fill transition-all duration-300 hover:scale-110 lg:w-36"
            />
            <button
               type="button"
               onClick={onCartToggle}
               className="button-theme flex items-center justify-center gap-3 
               bg-gradient-to-b from-amber-500 to-orange-500 
               py-2 px-5 text-sm font-semibold text-slate-900 shadow-lg
               shadow-orange-500 active:scale-110"
            >
               <ArrowLeftIcon className="h-5 w-5 text-slate-900" />
               <span className="">Back To Nike Store</span>
            </button>
         </div>
      </>
   );
};

export default CartEmpty;
