import { NavLink, useParams } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const navElem = [
  { title: "Home", link: "/" },
  { title: "Products", link: "/products" },
  { title: "Men", link: "/category/men's clothing" },
  { title: "Women", link: "/category/women's clothing" },
  { title: "Electronics", link: "/category/electronics" },
  { title: "Jewellery", link: "/category/jewellery" },
];

const Navbar = () => {
  return (
    <>
      <section className="w-full bg-purple-900">
        <div className=" w-full  max-w-[150rem] mx-auto px-12 py-3 bg-purple-900 flex justify-between items-center">
          <h2 className="text-white font-extrabold text-3xl">
            <span className="text-amber-500">e</span>comm
          </h2>
          <div className="w-1/3 flex">
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search"
              className="bg-white w-full outline-0 rounded-l-lg px-3 py-2 text-sm"
            />
            <button className="py-2 px-2 bg-amber-500 rounded-r-lg text-purple-950 cursor-pointer">
              <IoSearchOutline />
            </button>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div className="text-white text-2xl cursor-pointer">
              <IoMdCart />
            </div>
            <button className="px-3 py-1 w-[7rem] hover:bg-amber-500 border-solid border-[1px] border-amber-50 transition duration-300 ease-in rounded-lg text-white text-sm font-semibold cursor-pointer">
              Hello, Sign in
            </button>
          </div>
        </div>
        <div className="w-full py-2 flex justify-center items-center bg-purple-950">
          <div className="flex justify-center items-center gap-10">
            {navElem.map((elem) => (
              <NavLink
                to={elem.link}
                key={elem.link}
                className="text-white hover:text-amber-200 text-sm"
              >
                {elem.title}
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
