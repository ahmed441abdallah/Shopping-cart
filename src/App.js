import { Fragment, useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page404 from "./pages/404Page";
import Wishlist from "./components/Wishlist ";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route path="/wish" element={<Wishlist></Wishlist>}></Route>
        <Route path="shop" element={<Shop isLogin={isLogin} />} />
        <Route path="shop/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
