import "./App.css";
import Quotes from "./component/Quotes";
import Products from "./component/Products";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import ProductWithId from "./component/ProductWithId";
import HomePage from "./layout/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="quotes" element={<Quotes />} />
            <Route path="products" element={<Products />} />
            <Route path="quotes/:quoteID" element={<Quotes />} />
            <Route path="products/:proID" element={<ProductWithId />} />
            {/* <Route path="/products/:productID" element={<Products />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
