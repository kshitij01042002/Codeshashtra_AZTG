import React from 'react'
import { useNavigate,NavLink } from 'react-router-dom'
import img1 from "../assets/men/img1.png"
import bin from "../assets/bin.png"
import bag from "../assets/bag.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const WishCard = ({title,price,imgurl,desc,wishItems,setWishItems,id, cartItems, setCartItems}) => {
  const navigate=useNavigate();
  const handleDelete=()=>{
    const index=wishItems.indexOf(String(id));
    if(index>-1) {
      wishItems.splice(index,1);
      setWishItems(wishItems);
      console.log("deleted");
      
       
    }
    navigate('/');
  }
  const notify = () => toast.success('Item added to Bag!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});
  const handleClick = () => {
    console.log(cartItems);

    if (cartItems.includes(String(id)) === false) {
        setCartItems(cartItems.concat(String(id)));
        setTimeout(()=>{
          notify();
        // console.log("Added to cart " + id);
        // console.log(cartItems);
        },100)

        
        
    }
    else {
        console.log("Already present " + id);
        
    }
    handleDelete();
    navigate('/cart');
}
  return (
    
   
     
        <div className='w-[100%] sm:w-[15rem] m-4 rounded-md hover:scale-[100.2%] bg-blue-gray-50 mb-20 shadow-lg shadow-blue-gray-400 h-fit'>
         <NavLink to={`/product/${id}`}><img src={imgurl} className=' rounded-t-md  cursor-pointer hover:opacity-95 '/></NavLink> 
          <div className='rounded-b-md'>
          <img onClick={handleDelete} src={bin} className='h-9 float-right m-3 hover:scale-110 cursor-pointer p-1'/>
           <p className='text-lg font-medium mt-1 mx-2 mb-0'>{title}</p>
           <p className='text-lg font-medium mb-1 mx-2'>Price: Rs {price}</p>
           <p className='text-[17px] mx-2 font-medium'><i>{desc}</i></p>
<button onClick={handleClick} className='p-2.5 bg-black text-xl text-white w-[98%] mx-auto block mt-2'><p className='inline-block'>Add to Bag</p> </button>
          </div>
        </div>
      
   
  )
}

export default WishCard
