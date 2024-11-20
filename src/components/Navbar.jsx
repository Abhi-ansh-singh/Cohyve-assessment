import { GoNorthStar } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = () => {
  const listItems = [
    { name: "Comet", link: "/" },
    { name: "Manifesto", link: "/Manifesto" },
    { name: "Discover", link: "/Discover" },
  ];


  return (
    <div className="fixed bg-black flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-10">
      <ul className="flex gap-6 text-xl">
        {listItems.map((item, index) => (
          <Link to={item.link} key={index} className="flex items-center gap-x-2">
            {index === 0 ? (
              <>
                <GoNorthStar />
                {item.name}
              </>
            ) : (
              item.name
            )}
          </Link>
        ))}
      </ul>
      <div>
        <Link to="/login">
          <button className="py-2 px-6 rounded-3xl mx-2 shadow-2xl text-white bg-black text-lg font-semibold">
            Log In
          </button>
        </Link>
        <Link to="/signup">
          <button className="py-2 px-6 rounded-3xl shadow-2xl text-black bg-white text-lg font-semibold">
            Sign UP
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
