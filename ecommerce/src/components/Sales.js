import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import CardBanner from './CardBanner';
import SalesItem from './SaleItem';
import { useLocation } from "react-router-dom";
import Scrollbar from 'smooth-scrollbar';
import img1 from '../assets/saleB1.jpg';
import img2 from '../assets/saleB2.jpg';
import img3 from '../assets/saleB3.jpg';
import img4 from '../assets/saleB4.jpg';
import img5 from '../assets/saleB5.jpg';
import saleImg1 from '../assets/sales/sales1.jpg';
import saleImg1A from '../assets/sales/sales1a.jpg';
import saleImg1B from '../assets/sales/sales1b.jpg';
import saleImg2 from '../assets/sales/sales2.jpg';
import saleImg2A from '../assets/sales/sales2a.jpg';
import saleImg2B from '../assets/sales/sales2b.jpg';
import saleImg3 from '../assets/sales/sales3.jpg';
import saleImg3B from '../assets/sales/sales3b.jpg';
import saleImg3A from '../assets/sales/sales3a.jpg';
import saleImg4 from '../assets/sales/sales4.jpg';
import saleImg4B from '../assets/sales/sales4b.jpg';
import saleImg4A from '../assets/sales/sales4a.jpg';
import saleImg5 from '../assets/sales/sales5.jpg';
import saleImg5B from '../assets/sales/sales5b.jpg';
import saleImg5A from '../assets/sales/sales5a.jpg';
import saleImg6 from '../assets/sales/sales6.jpg';
import saleImg6B from '../assets/sales/sales6b.jpg';
import saleImg6A from '../assets/sales/sales6a.jpg';
import saleImg7 from '../assets/sales/sales7.jpg';
import saleImg7B from '../assets/sales/sales7b.jpg';
import saleImg7A from '../assets/sales/sales7a.jpg';
import saleImg8 from '../assets/sales/sales8.jpg';
import saleImg8B from '../assets/sales/sales8b.jpg';
import saleImg8A from '../assets/sales/sales8a.jpg';
import saleImg9 from '../assets/sales/sales9.jpg';
import saleImg9B from '../assets/sales/sales9b.jpg';
import saleImg9A from '../assets/sales/sales9a.jpg';
import saleImg10 from '../assets/sales/sales10.jpg';
import saleImg10B from '../assets/sales/sales10b.jpg';
import saleImg10A from '../assets/sales/sales10a.jpg';

function Sales() {
  var location=useLocation()  
  var hash = location.hash.slice(1);

    const bannerData = [
        {
          title: "Family Fiesta Extravaganza",
          description: 'Dress the family, dazzle the world!',
          image: img1,
        },
        {
          title: 'Soleful Discounts Bonanza',
          description: 'Step into savings, walk in style!',
          image: img2,
        },
        {
          title: 'Tech Marvels Unleashed',
          description: 'Upgrade today, tech tomorrow!',
          image: img3,
        },
        {
          title: 'Fashion Frenzy for Her',
          description: 'Revamp, refresh, redefine your style!',
          image: img4,
        },
        {
          title: "Kid's Corner Bargains Bonanza",
          description: 'Adorable styles, unbeatable prices, pure joy!',
          image: img5,
        },
      ];
 

  const salesItems = [
    // Data for mens wear offer 
    {
      category: "sale",
      subCategory: "mens-wear",
      title: "Extra 20% off auto-applied at checkout",
      desc: "HRX by Hrithik Roshan, Men Maroon Solid Hooded Sweatshirt",
      price: "1199",
      ogprice:"1439",
      imgurl: saleImg1,
      ref1:saleImg1A,
      ref2:saleImg1B,
      id:"36",
    },
    {
      category: "sale",
      subCategory: "mens-wear",
      title: "Style Steals for Him",
      desc: "Louis Philippe, Men White Self Design Classic Pure Cotton Formal Shirt",
      price: "1679",
      ogprice:"2015",
      imgurl: saleImg4,
      ref1:saleImg4A,
      ref2:saleImg4B,
      id:"39",
    },
    {
      category: "sale",
      subCategory: "mens-wear",
      title: "Special Offer for Men",
      desc: "Explore our latest menswear collection at irresistible prices.",
      price: "2999",
      ogprice:"3599",
      imgurl: saleImg3,
      ref1:saleImg3A,
      ref2:saleImg3B,
      id:"27",
    },
    // Data for womens wear
    {
      category: "sale",
      subCategory: "womens-wear",
      title: "Women's Fashion Extravaganza",
      desc: "Upgrade your wardrobe with our trendy womenswear. Shop now!",
      ogprice:"1679",
      price: "1399",
      imgurl: saleImg2,
      ref1:saleImg2A,
      ref2:saleImg2B,
      id:"52",
    },
    {
      category: "sale",
      subCategory: "womens-wear",
      title: "Classic Fashion Wears",
      desc: "Mitera, Cream-Coloured & Red Floral Silk Blend Saree",
      ogprice:"3530",
      price: "2942",
      imgurl: saleImg5,
      ref1:saleImg5A,
      ref2:saleImg5B,
      id:"21",
    },
    {
      category: "sale",
      subCategory: "womens-wear",
      title: "Glamour Galore Sale",
      desc: "Our Glamour Galore Sale brings you exquisite fashion at irresistible prices. ",
      ogprice:"1559",
      price: "1299",
      imgurl: saleImg6,
      ref1:saleImg6A,
      ref2:saleImg6B,
      id:"47",
    },
    // Data for shoes
    {
      category: "sale",
      subCategory: "shoes",
      title: "Shoe Bonanza",
      desc: " Our Shoe Bonanza offers incredible deals on footwear. Walk in style without compromising your budget.",
      ogprice:"14399",
      price: "11999",
      imgurl: saleImg7,
      ref1:saleImg7A,
      ref2:saleImg7B,
      id:"8",
    },
    {
      category: "sale",
      subCategory: "shoes",
      title: "Shoe Paradise Deals",
      desc: "Dive into exclusive deals on the latest styles. Your journey to shoe perfection starts here.",
      ogprice:"12527",
      price: "10439",
      imgurl: saleImg8,
      ref1:saleImg8A,
      ref2:saleImg8B,
      id:"0",
    },
    {
      category: "sale",
      subCategory: "shoes",
      title: "Shoe Obsession Extravaganza",
      desc: "Air Jordan 7 Retro SE",
      ogprice:"23154",
      price: "19295",
      imgurl: saleImg9,
      ref1:saleImg9A,
      ref2:saleImg9B,
      id:"4",
    },
    //data for tech
    {
      category: "sale",
      subCategory: "tech",
      title: "Tech Essentials for Today",
      desc: "MacBook Air with M2 chip, MacBook Pro 13, MacBook Pro 14” and 16",
      ogprice:"224900+",
      price: "119900",
      imgurl: saleImg10,
      ref1:saleImg10A,
      ref2:saleImg10B,
      id:"65",
    },
  ];
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
  return (
    <>
    <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}>
            <CardBanner data={bannerData} />
    </motion.div>

        <motion.div className="text-section bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">About Men's Wear</h2>
            <p className="text-gray-600">Discover exclusive deals on men's fashion. Upgrade your style with our latest collection.</p>
        </motion.div>
      <div className="text-center">
          <h1 className="text-black text-4xl font-bold mb-12 mt-10">Find your style.</h1>
        </div>

      {salesItems
        .filter(item => item.subCategory === 'mens-wear')
        .map((item, index) => (
          <SalesItem key={index} {...item} />
        ))}
 
      <motion.div className="text-section bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">About Women's Wear</h2>
            <p className="text-gray-600">Explore the latest trends in women's fashion. Find the perfect style for any occasion.</p>
        </motion.div>

      {salesItems
        .filter(item => item.subCategory === 'womens-wear')
        .map((item, index) => (
          <SalesItem key={index} {...item} />
        ))}

        <motion.div className="text-section bg-white p-6 mb-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Discover the Latest Trends Of Shoes</h2>
            <p className="text-gray-600">Stay stylish with our curated collection of the latest fashion trends.</p>
        </motion.div>
      {salesItems
        .filter(item => item.subCategory === 'shoes')
        .map((item, index) => (
          <SalesItem key={index} {...item} />
        ))}
        <motion.div className="text-section bg-white p-6 mb-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Explore Tech Innovations, Future Products</h2>
            <p className="text-gray-600">Upgrade your gadgets with cutting-edge technology. Find the latest tech deals here.</p>
        </motion.div>
        {salesItems
        .filter(item => item.subCategory === 'tech')
        .map((item, index) => (
          <SalesItem key={index} {...item} />
        ))}
    </>
  );
}

export default Sales;
