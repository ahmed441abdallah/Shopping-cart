import { useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Landing from "./pages/Landing";
import productsData from "../src/data.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  const [products, setProducts] = useState(productsData);
  const [size, setSize] = useState("");
  const [order, setOrder] = useState("");
  const [cartItem, setCartItem] = useState([]);
  const handleSizeChange = (e) => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(productsData);
    } else {
      const filteredProducts = productsData.filter((product) =>
        product.sizes.includes(e.target.value)
      );
      setProducts([...filteredProducts]); // Make a copy of the filtered array
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
    const existingItem = cartItem.find((el) => el.id === item.id);
    if (existingItem) {
      existingItem.qty++;
      setCartItem([...cartItem]);
    } else {
      setCartItem([...cartItem, { ...item, qty: 1 }]); // push
    }
  };
  const removeFromCart = (id) => {
    const filteredItems = cartItem.filter((el) => el.id !== id);
    setCartItem([...filteredItems]);
  };
  return (
    <BrowserRouter>
      <>
        <Header cartItem={cartItem} removeFromCart={removeFromCart}></Header>
        <Routes>
          <Route path="/" index element={<Landing></Landing>} />
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
          ></Route>
          <Route path="shop/checkout" element={<Checkout />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
