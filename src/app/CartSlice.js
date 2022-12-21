import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
   // initialState เพื่อเปิดปิดตะกร้าสินค้า
   cartState: false,
   // initialState ตะกร้าสินค้า
   cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
   // initialState ยอดรวม
   cartTotalAmount: 0,
   // initialState จำนวนรวม
   cartTotalQuantity: 0,
};

const CartSlide = createSlice({
   initialState,
   name: "cart",
   reducers: {
      // เปิดตะกร้า
      setOpenCart: (state, action) => {
         state.cartState = action.payload.cartState;
      },

      // ปิดตะกร้า
      setCloseCart: (state, action) => {
         state.cartState = action.payload.cartState;
      },

      // เพิ่มสินค้าลงตะกร้า
      setAddItemToCart: (state, action) => {
         // filter หาเลข index ของสินค้า
         const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );

         // เช็คว่าถ้าสินค้า ในตะกร้า >= 0 ให้เพิ่มจำนวนสินค้าในตะกร้า
         if (itemIndex >= 0) {
            state.cartItems[itemIndex].cartQuantity += 1;

            // alert success
            toast.success(
               `เพิ่ม ${action.payload.title} ลงตะกร้าเรียบร้อยแล้ว`
            );
         } else {
            const temp = { ...action.payload, cartQuantity: 1 };
            state.cartItems.push(temp);

            // alert success
            toast.success(
               `เพิ่ม ${action.payload.title} ลงตะกร้าเรียบร้อยแล้ว`
            );
         }

         // เก็บข้อมูลไว้ใน localstorage
         localStorage.setItem("cart", JSON.stringify(state.cartItems));
      },

      // ลบสินค้าในตะกร้า
      setRemoveItemFromCart: (state, action) => {
         const removeItem = state.cartItems.filter(
            (item) => item.id !== action.payload.id
         );
         state.cartItems = removeItem;
         localStorage.setItem("cart", JSON.stringify(state.cartItems));

         toast.success(`ลบ ${action.payload.title} ออกจากตะกร้าเรียบร้อยแล้ว`);
      },

      // เพิ่มจำนวนสินค้าในตะกร้า
      setIncreaseItemQTY: (state, action) => {
         const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );
         // เช็คว่าถ้าสินค้า ในตะกร้า >= 0 ให้เพิ่มจำนวนสินค้าในตะกร้า
         if (itemIndex >= 0) {
            state.cartItems[itemIndex].cartQuantity += 1;
         }
         // เก็บข้อมูลไว้ใน localstorage
         localStorage.setItem("cart", JSON.stringify(state.cartItems));
      },

      // ลบจำนวนสินค้าในตะกร้า
      setDecreaseItemQTY: (state, action) => {
         const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );
         // เช็คว่าถ้าจำนวนสินค้า ในตะกร้า >1 ให้ลบจำนวนสินค้าในตะกร้า
         if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1;
         }
         // เก็บข้อมูลไว้ใน localstorage
         localStorage.setItem("cart", JSON.stringify(state.cartItems));
      },
      
      // เคลียร์สินค้าในตะกร้า
      setClearCartItems: (state, action) => {
         state.cartItems = [];
         toast.success(`เคลียร์สินค้าในตะกร้าแล้ว`);
         localStorage.setItem("cart", JSON.stringify(state.cartItems));
      },
      // ผลรวม
      setGetTotals: (state, action) => {
         let { totalAmount, totalQTY } = state.cartItems.reduce(
            (cartTotal, cartItem) => {
               const { price, cartQuantity } = cartItem;
               const totalPrice = price * cartQuantity;

               cartTotal.totalAmount += totalPrice;
               cartTotal.totalQTY += cartQuantity;

               return cartTotal;
            },
            {
               totalAmount: 0,
               totalQTY: 0,
            }
         );
         state.cartTotalAmount = totalAmount;
         state.cartTotalQuantity = totalQTY;
      },
   },
});

export const {
   setOpenCart,
   setCloseCart,
   setAddItemToCart,
   setRemoveItemFromCart,
   setIncreaseItemQTY,
   setDecreaseItemQTY,
   setClearCartItems,
   setGetTotals,
} = CartSlide.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQuantity;

export default CartSlide.reducer;
