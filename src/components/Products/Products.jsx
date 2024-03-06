import React from "react";

import Heading from "../ui/Heading.jsx";
import ProductCard from "./ProductCard";

import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";
import Img8 from "../../assets/product/p-10.jpg";
import Img9 from "../../assets/product/p-3.jpg";
import Img10 from "../../assets/product/p-2.jpg";
import Img11 from "../../assets/product/p-10.jpg";

import Button from "../ui/Button.jsx";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img5,
    title: "Printed ",
    price: "420",
    aosDelay: "600",
  },
  {
    id: 9,
    img: Img8,
    title: "Laptop Silver",
    price: "1120",
    aosDelay: "0",
  },
  {
    id: 10,
    img: Img9,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 11,
    img: Img10,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 12,
    img: Img11,
    title: "Laptop Rock",
    price: "2350",
    aosDelay: "600",
  },
  {
    id: 13,
    img: Img6,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 14,
    img: Img7,
    title: "Printed ",
    price: "420",
    aosDelay: "600",
  },
];

const Products = () => {
  const [noOfElement, setnoOfElement] = React.useState(4)

  const showMore = () => {
    setnoOfElement(noOfElement + 4);
  }
  
  const slice = ProductsData.slice(0, noOfElement)
  
  return (
    <div id="shop">
      <div className="container">
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        <ProductCard data={slice} />
        <div 
          data-aos="fade-up"
          data-aos-delay="400"
          className={noOfElement >= ProductsData.length ? "hidden" : "flex w-full justify-center align-top"}>
            <Button
              children="w-4/12 py-4 text-center"
              text="Show More"
              bgColor="bg-primary"
              textColor="text-white"
              handler={() => showMore()}
            />
        </div>  
      </div>
    </div>
  );
};

export default Products;
