import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./Components/Details/Details";
import Nav from "./Components/Nav/Nav";
import Viewed from "./Components/Viewed/Viewed";
import ProductBag from "./Components/ProductBag/ProductBag";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/details" element={<Details />} />
        <Route path="/bag" element={<ProductBag />} />
      </Routes>
      <Nav />
      <Viewed />



    </>
  );
}

export default App;
