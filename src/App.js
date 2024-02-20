import { Fragment, useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Landing from "./pages/Landing";
import productsData from "../src/data.json";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page404 from "./pages/404Page";

function App() {
  const [products, setProducts] = useState(productsData);
  const [size, setSize] = useState("");
  const [order, setOrder] = useState("");
  const [cartItem, setCartItem] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleSizeChange = (e) => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(productsData);
    } else {
      const filteredProducts = productsData.filter((product) =>
        product.sizes.includes(e.target.value)
      );
      setProducts([...filteredProducts]);
    }
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
    const filteredProducts = productsData.sort(function (a, b) {
      if (e.target.value === "Lowest") {
        return a.price - b.price;
      } else if (e.target.value === "Highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts([...filteredProducts]);
  };

  const addToCart = (item) => {
    if (isLogin) {
      const existingItem = cartItem.find((el) => el.id === item.id);
      if (existingItem) {
        existingItem.qty++;
        setCartItem([...cartItem]);
      } else {
        setCartItem([...cartItem, { ...item, qty: 1 }]);
      }
    } else {
      navigate("/login");
    }
  };

  const removeFromCart = (id) => {
    const filteredItems = cartItem.filter((el) => el.id !== id);
    setCartItem([...filteredItems]);
  };

  return (
    <Fragment>
      <Header cartItem={cartItem} removeFromCart={removeFromCart} />
      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route
          path="shop"
          element={
            <Shop
              products={products}
              size={size}
              order={order}
              handleOrderChange={handleOrderChange}
              handleSizeChange={handleSizeChange}
              addToCart={addToCart}
            />
          }
        />
        <Route path="shop/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
