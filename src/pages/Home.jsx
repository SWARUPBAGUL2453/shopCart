import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  async function fetchProductData() {
    setLoading(true)
    try {
      let result = await fetch(API_URL)
      let data = await result.json()
      console.log(data)
      setPosts(data)
    }

    catch (error) {
      console.log("items not found")
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProductData()
  }, [])

  return (
    <div>
      {
        loading ? (<Spinner></Spinner>) : (
          posts.length > 0 ? (
            <div className="max-w-6xl grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   mx-auto gap-y-10 gap-x-5 p-2">
              {
                posts.map((post) => (
                  <Product key={post.id} post={post}></Product>
                ))
              }
            </div>

          ) :
            (<div className="flex justify-center items-center">
              <p>Post not found</p>
            </div>)

        )
      }
    </div>
  );
};

export default Home;
