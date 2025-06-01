import { useContext, useEffect, useRef, useState } from "react";
import img1 from "/images/1.jpg";
import img2 from "/images/2.jpg";
import img3 from "/images/3.jpg";
import GroupCards from "../components/GroupCards";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import { useParams, Link } from "react-router-dom";
import { BiArrowToLeft } from "react-icons/bi";
import { BiArrowToRight } from "react-icons/bi";

const images = [img1, img2, img3];

const Home = () => {
  const [index, setIndex] = useState(0);
  const { prodData } = useContext(ProductContext);
  const scrollRef = useRef(null);
  const scroll2ndRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

 const scrollJewellery = (direction) => {
  const { current } = scrollRef;
  if (current) {
    current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  }
};

const scrollAllProducts = (direction) => {
  const { current } = scroll2ndRef;
  if (current) {
    current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  }
};

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      category: "electronics",
      titleData: "Electronics for your home",
      offer: "15%",
      link: "/category/electronics",
    },
    {
      category: "women's clothing",
      titleData: "Clothes for women's fashion",
      offer: "20%",
      link: "/category/women's clothing",
    },
    {
      category: "men's clothing",
      titleData: "Clothes for men's fashion",
      offer: "20%",
      link: "/category/men's clothing",
    },
    {
      category: "jewellery",
      titleData: "Jewelery for men & women",
      offer: "10%",
      link: "/category/jewellery",
    },
  ];

  return (
    <section className="relative bg-blue-50 ">
      <div className=" w-full overflow-hidden relative ">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((elem, i) => (
            <img
              className="w-full h-[80vh] shrink-0 object-cover"
              src={elem}
              key={i}
              alt={elem.id}
            />
          ))}
        </div>
      </div>
      <div className="w-full relative">
        <div className=" w-full px-5 flex items-center flex-col gap-5 absolute -top-40">
          <div
            className="px-5 flex gap-8 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((item, index) => {
              return (
                <GroupCards
                  key={index}
                  category={item.category}
                  titleData={item.titleData}
                  offer={item.offer}
                  link={item.link}
                  className="shrink-0"
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full  relative mt-[15rem] px-5 overflow-hidden max-w-[150rem] mx-auto">
        <div className="w-full ">
          <h2 className="pt-5 text-2xl font-bold px-10">
            Select from the range of jewellery
          </h2>
        </div>
        <div className=" w-full relative">
          {!isMobile && (
            <button
              onClick={() => scrollJewellery("left")}
              className="absolute left-5 top-1/2 rounded-full px-2 py-2  bg-blue-100 text-4xl shadow-lg hover:scale-105 cursor-pointer"
            >
              <BiArrowToLeft />
            </button>
          )}
          <div
            ref={scrollRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex overflow-x-auto gap-4 px-10 py-4 "
          >
            {prodData
              .filter((p) => p.category === "jewellery")
              .map((item, index) => {
                return (
                  <div key={index} className="min-w-[200px] shrink-0">
                    <Link to={`/products/${item.id}`}>
                      <ProductCard item={item} />
                    </Link>
                  </div>
                );
              })}
          </div>
          {!isMobile && (
            <button
              onClick={() => scrollJewellery("right")}
              className="absolute right-5 top-1/2 rounded-full px-2 py-2  bg-blue-100 text-4xl shadow-lg hover:scale-105 cursor-pointer"
            >
              <BiArrowToRight />
            </button>
          )}
        </div>
      </div>

      <div className="w-full relative mt-[1rem] px-5 overflow-hidden max-w-[150rem] mx-auto">
        <div className="w-full ">
          <h2 className="pt-5 text-2xl font-bold px-10">
            Select from the range of products
          </h2>
        </div>
        <div className=" w-full relative">
          {!isMobile && (
            <button
              onClick={() => scrollAllProducts("left")}
              className="absolute left-5 top-1/2 rounded-full px-2 py-2  bg-blue-100 text-4xl shadow-lg hover:scale-105 cursor-pointer"
            >
              <BiArrowToLeft />
            </button>
          )}
          <div
            ref={scroll2ndRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex overflow-x-auto gap-4 px-10 py-4 "
          >
            {prodData.map((item, index) => {
              return (
                <div key={index} className="min-w-[200px] shrink-0">
                  <Link to={`/products/${item.id}`}>
                    <ProductCard item={item} />
                  </Link>
                </div>
              );
            })}
          </div>
          {!isMobile && (
            <button
              onClick={() => scrollAllProducts("right")}
              className="absolute right-5 top-1/2 rounded-full px-2 py-2  bg-blue-100 text-4xl shadow-lg hover:scale-105 cursor-pointer"
            >
              <BiArrowToRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
