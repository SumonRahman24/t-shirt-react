import { PropTypes } from "prop-types";

const Cart = ({ cart, handleRemoveBtn }) => {
  let count = 1;
  const name = cart.map((item) => {
    return (
      <div
        className="bg-violet-400 m-3 p-1 flex justify-between px-3"
        key={item.id}
      >
        <h2>{`${count++}.${item.name}`}</h2>
        <div>
          {" "}
          <button
            onClick={() => handleRemoveBtn(item.id)}
            className="text-red btn-primary p-1 "
          >
            Remove
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="space-y-3">
      <h1 className={cart.length > 0 ? "bg-red-500 text-3xl" : "bg-blue-500"}>
        Order Summary: {cart.length}{" "}
      </h1>
      <h4
        className={cart.length >= 3 ? "bg-green-400" : "bg-slate-400 text-3xl"}
      >
        Something
      </h4>
      <p>{cart.length >= 3 ? "borolok" : "goribs"}</p>
      <p>{cart.length >= 3 ? " " : "3 ta to hoilo na"}</p>
      <p>{name}</p>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveBtn: PropTypes.func.isRequired,
};

export default Cart;
