
import { useDispatch, useSelector } from "react-redux"
import { remove, add } from "../redux/Slices/CartSlice"
import {toast} from "react-hot-toast"

const Product = ({ post }) => {

  // const[selected, setSelected] = useState(false)
  const { cart } = useSelector((state) => state)
  const dispatch = useDispatch()


  const addToCart = () => {
    dispatch(add(post))
    toast.success("Item added to cart")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id))
    toast.error("Item removed from cart")
  }

  return (
    <div className="flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 border rounded-xl shadow-lg">
      <div>
        <p className="text-gray-700 font-semibold text-lg truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="text-gray-400 font-normal w-40 text-xs">{post.description.split(" ").slice(0,10).join(" ") + "..." }</p>
      </div>
      <div>
        <img src={post.image} alt="" className="h-44" />
      </div>
      <div className="flex justify-between gap-x-12 items-center w-full mt-5">
      <div>
        <p className="text-green-600 font-semibold">${post.price}</p>
      </div>
      <div>
      {
          cart.some((p) => p.id === post.id) ?
          (<button onClick={removeFromCart}
          className="text-gray-700 border-2 border-gray-700 font-semibold text-xs py-1 px-2 rounded-full uppercase hover:text-white hover:bg-gray-700 transition duration-300 ease-in">Remove Item</button>) :
          (<button onClick={addToCart}
          className="text-gray-700 border-2 border-gray-700 font-semibold text-xs py-1 px-2 rounded-full uppercase hover:text-white hover:bg-gray-700 transition duration-300 ease-in">Add to Cart</button>)
      }
      </div>
      </div>

    </div>
  );
};

export default Product;
