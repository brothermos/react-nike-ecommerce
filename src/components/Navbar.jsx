import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice";

// icon
import {
   HeartIcon,
   MagnifyingGlassIcon,
   ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const Navbar = () => {
   const [navState, setNavState] = useState(false);

   const dispatch = useDispatch();

   const totalQTY = useSelector(selectTotalQTY);

   // func เปิดตะกร้าสินค้า
   const onCartToggle = () => {
      dispatch(
         setOpenCart({
            cartState: true,
         })
      );
   };

   // func scroll เมาส์ ถ้าเลื่อนลงมาให้แถบ navbar fixed อยู่ด้านบน โดยเขียน css ให้เบลอ
   const onNavScroll = () => {
      if (window.scrollY > 30) {
         setNavState(true);
      } else {
         setNavState(false);
      }
   };

   // เรียกใช้ func scroll เมาส์
   useEffect(() => {
      window.addEventListener("scroll", onNavScroll);
      return () => {
         window.removeEventListener("scroll", onNavScroll);
      };
   }, []);

   return (
      <>
         <header
            className={
               !navState
                  ? "absolute top-7 left-0 right-0 z-50 opacity-100"
                  : "blur-effect-theme fixed top-0 left-0 right-0 z-[200] flex h-[9vh] items-center justify-center opacity-100"
            }
         >
            <nav className="nike-container flex items-center justify-between">
               <div className="flex items-center">
                  <img
                     src={logo}
                     alt="logo/img"
                     className={`h-auto w-16 ${
                        navState && "brightness-0 filter"
                     }`}
                  />
               </div>
               <ul className="flex items-center justify-center gap-2">
                  <li className="gird items-center">
                     <MagnifyingGlassIcon
                        className={`icon-style ${
                           navState &&
                           "text-slate-900 transition-all duration-300"
                        }`}
                     />
                  </li>
                  <li className="gird items-center">
                     <HeartIcon
                        className={`icon-style ${
                           navState &&
                           "text-slate-900 transition-all duration-300"
                        }`}
                     />
                  </li>
                  <li className="gird items-center">
                     <button
                        type="button"
                        onClick={onCartToggle}
                        className="relative border-none outline-none transition-all duration-300 active:scale-110"
                     >
                        <ShoppingBagIcon
                           className={`icon-style ${
                              navState &&
                              "text-slate-900 transition-all duration-300"
                           }`}
                        />
                        <div
                           className={`absolute top-4 right-0 flex h-4 w-4 
                           cursor-pointer items-center justify-center rounded-full
                          text-[0.65rem] font-medium leading-tight  
                           shadow  transition-all duration-300 hover:scale-110
                           ${
                              navState
                                 ? "bg-slate-900 text-slate-100 shadow-slate-900"
                                 : "bg-slate-100 text-slate-900 shadow-slate-100"
                           }`}
                        >
                           {totalQTY}
                        </div>
                     </button>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   );
};

export default Navbar;
