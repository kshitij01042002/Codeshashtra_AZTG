import React from 'react'
import WishCard from './components/WishCard'

const Wishlist = (props) => {
  const { data, items,wishItems, setWishItems,cartItems,setCartItems } = props;
 console.log(data);
 console.log(items);
    const products = data.filter(item => {
        return items.includes(String(item.id));
    })
     console.log(products);

  return (
    <div>
    
    <p className='text-xl float-right mx-5 text-black font-bold'>[{products.length} items]</p>
    <h1 className='text-5xl text-center m-10 text-pink-600  font-medium'>Favourites</h1>
    {!products.length ?
   <h1 className='text-3xl text-blue-gray-300 font-medium text-center mt-20 mb-60'>Your Wishlist is Empty!, Start Adding items to Favourites</h1> :
     <div className='w-[80%] mx-auto p-4 flex
     flex-wrap justify-between'>
     {products.map((item)=>{
      return(
      <WishCard title={item.title} imgurl={item.imgurl} desc={item.desc} price={item.price} id={item.id} wishItems={wishItems} setWishItems={setWishItems} cartItems={cartItems} setCartItems={setCartItems}/>)
     })}
    
     
     </div>
     
    }
    </div>
  )
}

export default Wishlist;
