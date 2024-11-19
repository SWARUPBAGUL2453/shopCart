import { RiDeleteBin6Line } from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux"
import { remove } from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast"


const CartItem = ({item}) => {

  const dispatch = useDispatch()

  const removeFromCart = () =>{
    dispatch(remove(item.id))
    toast.error("Item removed from cart")
  }
  return (
    <div className="">
      <div className="flex border-b-2 border-b-slate-400">
        <div className="m-10 mr-16">
          <img src={item.image} alt="" className="h-44"/>
        </div>
        <div className="gap-y-6 flex flex-col mt-10 w-96">
          <h1 className="text-gray-700 font-semibold  text-lg  mt-1">{item.title}</h1>
          <p className="text-gray-400 font-normal  text-xs">{item.description.split(" ").slice(0,20).join(" ") + "..." }</p>
          <div className="flex justify-between items-center">
            <p className="text-green-600 font-semibold">${item.price}</p>
            {/* <p>{item.rate}</p> */}
            <div onClick={removeFromCart}
            className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-red-200">
            <RiDeleteBin6Line></RiDeleteBin6Line>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
