import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Grandpa from "./components/Grandpa";
import Contact from "./components/Contact";
import OrderReview from "./components/OrderReview";
import Error from "./components/Error";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/grandpa" element={<Grandpa />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<OrderReview />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
