import Header from "./components/Header";
import Shop from "./components/Shop";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
