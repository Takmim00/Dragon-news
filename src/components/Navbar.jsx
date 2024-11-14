import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="space-x-5 text-gray-500">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex gap-3 items-center">
        <div className="">
          <img src={userIcon} alt="" />
        </div>
        <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
