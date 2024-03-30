import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShoeItem from "./ShoeItem";
import { FaAngleDown } from "react-icons/fa";
import Sort from "./Sort";
import CardBanner from './CardBanner';

import img1 from '../assets/shoeB1.jpg';
import img2 from '../assets/shoeB2.jpg';
import img3 from '../assets/shoeB3.jpg';
import img4 from '../assets/shoeB4.jpg';
import img5 from '../assets/shoeB5.jpg';
import { useLocation } from "react-router-dom";
import Scrollbar from 'smooth-scrollbar';
function Shoes(props) {
  var location=useLocation()  
  var hash = location.hash.slice(1);
  const bannerData = [
    {
      title: "Step into Style",
      description: 'Elevate your fashion with our latest shoe collection. Step into style and comfort, crafted for every occasion.',
      image: img1,
    },
    {
      title: 'Footwear Finesse',
      description: '"Discover the finesse in every step. Our footwear collection blends fashion with functionality, ensuring a stylish journey.',
      image: img2,
    },
    {
      title: 'Soleful Elegance',
      description: 'Walk with elegance! Our exquisite footwear range combines sophistication with comfort. Find your soleful match.',
      image: img3,
    },
    {
      title: 'Casual Chic Footwear',
      description: 'Casual meets chic in our trendy footwear lineup. From laid-back weekends to stylish outings, step out in fashion.',
      image: img4,
    },
    {
      title: 'Adventure-Ready Shoes',
      description: 'Gear up for adventures! Our durable and stylish shoes are designed to take you places, one step at a time.',
      image: img5,
    },
  ];
  const [selected, setselected] = useState("");
  const { data, sortValue, setSortValue,wishItems, setWishItems } = props;
  const [datalist, setDatalist] = useState([]);
  useEffect(() => {
    setDatalist(data);
  }, [data])
  useEffect(() => {
    if (hash) {
      var targetElement = document.getElementById(hash);
      if (targetElement) {
        Scrollbar.get(document.body).scrollTo(0, targetElement.getBoundingClientRect().top, 1000);
      }
    }
  }, [hash]);
  const sorting = () => {
    if (sortValue === 'Name: A-Z') {
      const newSortData = data.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setDatalist(newSortData);
    }
    else if (sortValue === 'Name: Z-A') {
      const newSortData = data.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      setDatalist(newSortData);
    }
    else if (sortValue === 'Price: Low to High') {
      const sortFun = (a, b) => {
        return a.price - b.price;
      }
      const newSortData = data.sort(sortFun);
      setDatalist(newSortData);
    }
    else if (sortValue === 'Price: High to Low') {
      const sortFun = (a, b) => {
        return b.price - a.price;
      }
      const newSortData = data.sort(sortFun);
      setDatalist(newSortData);
    }
  };
  useEffect(() => {
    sorting();
  }, [sortValue])

  const shoes = datalist.filter((data) => {
    return data.category.includes("shoes");
  }).filter((data) => {
    return data.subCategory.startsWith(selected);
  });

  const itemlist = shoes.map((item, i) => {
    return (
      <ShoeItem
        key={i}
        title={shoes[i].title}
        desc={shoes[i].desc}
        price={shoes[i].price}
        img={shoes[i].imgurl}
        id={shoes[i].id}
        wishItems={wishItems}
        setWishItems={setWishItems}
      />
    );
  });

  return (
    <>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            // className="flex flex-row justify-center items-center"
          >
      <CardBanner data={bannerData} />
      </motion.div>
      <div className="flex justify-between p-4 w-full">
      <div className='group  p-2 cursor-pointer text-center absolute bg-white' style={{padding:"0px", marginTop:"3px", marginLeft:"2px"}}>
          <div className="heading flex justify-center items-center" style={{padding:"0px", margin:"6px"}}>
            <h3 className='font-semibold text-xl' style={{marginBottom:"4px"}}>Filter:</h3>
            <span className='font-normal' style={{marginBottom:"4px"}}> &nbsp;{selected === "" ? " All" : " " + selected[0].toUpperCase() + selected.slice(1)}</span>
            <div className='grid place-items-center ml-3' style={{marginBottom:"4px"}}> <FaAngleDown /></div>
          </div>
          <ul className='sort_css hidden group-hover:block pt-4'>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("")} id="all">All</li>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("shirt")} id="shirt">Shirts</li>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("tshirt")} id="tshirt">T-shirts</li>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("pant")} id="pant">Pants</li>
          </ul>
        </div>
        <Sort setSortValue={setSortValue} sortValue={sortValue} />
      </div>

      {itemlist.length ? <div className="w-full font-dmsans flex flex-col justify-center items-center my-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row space-x-2 justify-center items-center"
        >
          <h1 className="text-black text-4xl font-bold mb-12">Find your style.</h1>
        </motion.div>
        <div className="grid lg:grid-cols-3 grid-cols-2 md:gap-[40px] gap-[20px] md:w-[80%] w-[90%]">
          {itemlist}
        </div>
      </div> :
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row space-x-2 justify-center items-center my-10"
        >
          <h1 className="text-black text-4xl font-bold space-10">
            Sorry, Couldn't Find your Item
          </h1>
        </motion.div>
      }
    </>
  );
}

export default Shoes;
