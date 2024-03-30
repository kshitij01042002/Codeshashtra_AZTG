import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShoeItem from "./ShoeItem";
import CardBanner from './CardBanner';
import { FaAngleDown } from "react-icons/fa";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import Scrollbar from 'smooth-scrollbar';
import Sort from "./Sort";
import equipmentImg1 from '../assets/men/equipmentImg1.webp';
import equipmentImg2 from '../assets/men/equipmentImg2.jpg';
import equipmentImg3 from '../assets/men/equipmentImg3.jpeg';
import equipmentImg4 from '../assets/men/equipmentImg4.jpeg';
import equipmentImg5 from '../assets/men/equipmentImg5.jpeg';
import { ToastContainer, toast } from "react-toastify";



const Women = (props) => {
  var location=useLocation()  
  var hash = location.hash.slice(1);
  const bannerData = [
    {
      title: "Efficient Farming Solutions",
      description: 'Discover a wide range of cutting-edge farming equipment designed to streamline your operations and boost productivity.',
      image: equipmentImg1,
    },
    {
      title: 'Precision Agriculture Tools',
      description: 'Embrace precision farming with our advanced tools and technologies. Increase efficiency and reduce waste with pinpoint accuracy.',
      image: equipmentImg2,
    },
    {
      title: 'Heavy-Duty Machinery',
      description: 'Tackle tough tasks with ease using our rugged and reliable heavy-duty machinery. Built to withstand the rigors of agricultural work.',
      image: equipmentImg3,
    },
    {
      title: 'Smart Irrigation Systems',
      description: 'Optimize water usage and conserve resources with our smart irrigation systems. Achieve better crop yields while saving time and money.',
      image: equipmentImg4,
    },
    {
      title: 'Innovative Harvesting Solutions',
      description: 'Harvest your crops efficiently with our innovative harvesting solutions. Maximize yield and minimize labor with state-of-the-art equipment.',
      image: equipmentImg5,
    },
  ];
  const [selected, setselected] = useState("");
  const { data, sortValue, setSortValue,wishItems, setWishItems} = props;
  const [datalist, setDatalist] = useState([]);
  useEffect(() => {
    setDatalist(data);
  }, [data])
  useEffect(() => {
    // window.location.reload();
    // var hui = document.getElementById('random');
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


  const women = datalist
    .filter((data) => {
      return data.category.includes("equipments");
    })
    .filter((data) => {
      return data.subCategory.startsWith(selected);
    });

  const itemlist = women.map((item, i) => {
    return (
      <ShoeItem
        key={i}
        title={women[i].title}
        desc={women[i].desc}
        price={women[i].price}
        img={women[i].imgurl}
        id={women[i].id}
        wishItems={wishItems}
        setWishItems={setWishItems}
      />
    );
  });
  return (
    <>

<ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("tools")} id="tools">Tools</li>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("machinery")} id="machinery">Machinery</li>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("irrigation")} id="irrigation">Irrigation</li>
          </ul>
        </div>
        <Sort setSortValue={setSortValue} sortValue={sortValue} />
      </div>
      
      {itemlist.length ?
        <div className="w-full font-dmsans flex flex-col justify-center items-center my-10">
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
};

export default Women;
