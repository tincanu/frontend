import { Link } from "react-router-dom";
//import data from "../data";
import { useEffect, useState } from "react";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Oferte noi</h1>
      <div className='products'>
        {products.map((product) => (
          <div className={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className='product-info'>
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Adauga in cos</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
