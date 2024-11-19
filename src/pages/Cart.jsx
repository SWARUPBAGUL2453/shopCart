import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const { cart } = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
      setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  

  return (
    <div className=" ">
      {
        cart.length > 0 ? (
          <div className="flex max-w-6xl mx-auto  space-x-24">
            <div>
              {cart.map((item) => (
                <CartItem item={item} key={item.id}></CartItem>
              ))}
            </div>
            <div className="flex flex-col justify-between m-16">

            <div>
              <div className="text-green-700 text-xl font-semibold uppercase">Your Cart</div>
              <div className="text-green-700 text-5xl font-bold uppercase">Summary</div>
              <p className="mt-5">Total Items: {cart.length}</p>
            </div>

            <div className="flex flex-col gap-y-5">
              <p className="">Total Amount: <span className="font-bold">${totalAmount}</span></p>
              <button className=" border px-32 py-3 bg-green-700 text-white font-semibold rounded-md">CheckOut Now</button>
            </div>
              </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col justify-center items-center gap-y-4 ">
              <h1 className="text-3xl mt-10 text-gray-700">Your Cart is empty!!!</h1>
              <NavLink to="/">
                <button className="text-2xl text-gray-700 border-2 border-gray-700 font-semibold  py-[10px] px-[15px] rounded-full uppercase hover:text-white hover:bg-gray-700 transition duration-300 ease-in">Shop Now</button>
              </NavLink>
            </div>
          </div>
        )
      }

    </div>
  );
};

export default Cart;
