import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import toast from 'react-hot-toast'


const Navbar = ({ isLoggedIn, setIsLoggedIn}) => {

  const { cart } = useSelector((state) => state)

  return (
    <div>
      <div className="flex flex-row justify-between h-20 items-center max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5 bg-transparent">
            <img src="../logo-removebg1.png" alt="Image not found" height="100" width="100" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          {isLoggedIn &&
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
          }
          {isLoggedIn &&
            <NavLink to="/cart">

              <div className="relative">
                <FaShoppingCart className="text-2xl"></FaShoppingCart>
                {
                  cart.length > 0 &&
                  <span className="absolute -top-1 -right-2 bg-green-600 text-xs h-5 w-5 flex justify-center items-center rounded-full animate-bounce text-white">{cart.length}</span>
                }
              </div>
            </NavLink>
          }
         {  !isLoggedIn &&
          <Link to="/login">
            <button className=' border-2 border-gray-700 text-white font-semibold text-xs py-[10px] px-[15px] rounded-full uppercase  hover:bg-gray-700 transition duration-300 ease-in '>Log in</button>
            </Link>
            }

           { !isLoggedIn &&
           <Link to="/signup">
            <button className='  border-2 border-gray-700 text-white font-semibold text-xs py-[10px] px-[15px] rounded-full uppercase  hover:bg-gray-700 transition duration-300 ease-in '>Sign up</button>
            </Link>
            }
              { isLoggedIn &&
           <Link to="/">
            <button onClick={() => {
                setIsLoggedIn(false)
                toast.success("Log Out")
            }} className=' border-2 border-gray-700 text-white font-semibold text-xs py-[10px] px-[15px] rounded-full uppercase  hover:bg-gray-700 transition duration-300 ease-in '>Logout</button>
            </Link>
            }
        </div>
      </div>
    </div>
  )
};

export default Navbar;
