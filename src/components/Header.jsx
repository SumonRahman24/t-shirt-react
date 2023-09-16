import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <h2 className=" pt-5 text-3xl  font-bold text-center">
          MRS T-SHiRT SHOP
        </h2>
      </div>
      <nav>
        <ul className="bg-blue-400 text-2xl space-x-4 pl-10 p-1 mt-3">
          <Link className="hover:bg-gray-400 rounded-md p-1" to={"/"}>
            Home
          </Link>
          <Link className="hover:bg-gray-400 rounded-md p-1" to={"/review"}>
            Order Review
          </Link>
          <Link className="hover:bg-gray-400 rounded-md p-1" to={"/contact"}>
            Contact
          </Link>
          <Link className="hover:bg-gray-400 rounded-md p-1" to={"/Grandpa"}>
            Grandpa
          </Link>
          <Link className="hover:bg-gray-400 rounded-md p-1" to={"/about"}>
            About
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
