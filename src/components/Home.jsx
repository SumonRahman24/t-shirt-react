import { useEffect, useState } from "react";
import Tshirt from "./Tshirt";
import Cart from "./Cart";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [tshirtData, setTshirtData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTshirtData(data));
  }, []);

  const handleShopBtn = (item) => {
    const isMatch = cart.find((cartItem) => cartItem.id === item.id);
    if (isMatch) {
      // return alert("you already select item");
      return toast("Have you Already Selected Shirt");
    }

    const newCart = [...cart, item];
    setCart(newCart);
  };

  const handleRemoveBtn = (id) => {
    const RemoveItem = cart.filter((item) => item.id !== id);
    setCart(RemoveItem);
  };

  return (
    <div>
      <Toaster />
      <div className="grid grid-cols-4">
        <div className="grid col-span-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-y-10">
          {tshirtData.map((tshirt) => (
            <Tshirt
              key={tshirt.id}
              handleShopBtn={handleShopBtn}
              tshirt={tshirt}
            />
          ))}
        </div>
        <div className="grid col-span-1 bg-red-400 mt-10 mr-5 p-4 sticky h-[100vh] top-10">
          <Cart cart={cart} handleRemoveBtn={handleRemoveBtn} />
        </div>
      </div>
    </div>
  );
};

export default Home;
