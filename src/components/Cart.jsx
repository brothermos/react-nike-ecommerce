import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
   selectCartItems,
   selectCartState,
   selectTotalAmount,
   selectTotalQTY,
   setClearCartItems,
   setCloseCart,
   setGetTotals,
} from "../app/CartSlice";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
   const dispatch = useDispatch();
   const ifCartState = useSelector(selectCartState);
   const cartItems = useSelector(selectCartItems);
   const totalAmount = useSelector(selectTotalAmount);
   const totalQTY = useSelector(selectTotalQTY);

   useEffect(() => {
      dispatch(setGetTotals());
   }, [cartItems, dispatch]);

   // func ปิดตะกร้าสินค้า
   const onCartToggle = () => {
      dispatch(
         setCloseCart({
            cartState: false,
         })
      );
   };

   // เคลียร์สินค้าในตะกร้า
   const onClearCartItems = () => {
      dispatch(setClearCartItems());
   };

   return (
      <>
         <div
            className={`blur-effect-theme fixed top-0 left-0 right-0 bottom-0 z-[250] h-screen w-full opacity-100 ${
               ifCartState
                  ? "visible translate-x-0 opacity-100"
                  : "invisible translate-x-8  opacity-0"
            }`}
         >
            <div
               className={`blur-effect-theme absolute right-0 h-screen w-full max-w-xl`}
            >
               <CartCount
                  totalQTY={totalQTY}
                  onCartToggle={onCartToggle}
                  onClearCartItems={onClearCartItems}
               />

               {/* เช็คว่าตะกร้าสินค้ามีค่า = 0 มั้ย ถ้าเป็น 0 ให้ empty */}
               {cartItems.length === 0 ? (
                  <CartEmpty onCartToggle={onCartToggle} />
               ) : (
                  <div className="scroll-hidden flex h-[81vh] flex-col items-start justify-start gap-y-7 overflow-y-scroll scroll-smooth py-3 lg:gap-y-5">
                     {cartItems?.map((item, i) => (
                        <CartItem key={i} item={item} />
                     ))}
                  </div>
               )}
               <div className="fixed bottom-0 grid w-full items-center bg-white px-5 py-5">
                  <div className="flex items-center justify-between">
                     <h1 className="text-base font-semibold uppercase">
                        SubTotal
                     </h1>
                     <h1 className="bg-theme-cart rounded px-1 py-0.5 text-sm text-slate-100">
                        ${totalAmount}
                     </h1>
                  </div>
                  <div className="grid items-center gap-2">
                     <p className="text-center text-sm font-medium">
                        Taxes and Shipping Will Calculate At Shipping
                     </p>
                     <button
                        type="button"
                        className="button-theme bg-theme-cart text-white"
                     >
                        Check Out
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Cart;
