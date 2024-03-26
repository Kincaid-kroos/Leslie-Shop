import { NavLink } from 'react-router-dom';
import { FaStar, FaShoppingBag } from 'react-icons/fa';
import Reviews from './Reviews.jsx';
import { useState,useEffect } from 'react';
import axios from 'axios';



const Shop = () => {
  const[cart,setCartItems] = useState([])

  const fetchCartItem = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/cart/`)
      console.log('check latest:', res.data);
      setCartItems(res.data)

    }
    catch(err) {
       console.error
    }
   
  }
  
  useEffect(() => {
    fetchCartItem();
  }, []); 
 



    
  return (
    <div className='bg-[#0A1929]   mx-3 pb-8'>
      <h1 className="text-center text-[#ff3f19] ">Products</h1>

    {/*grid items*/}
    <div className='grid grid-cols-2 lg:grid-cols-5 md:mx-20 gap-x-4 gap-y-8 items-center justify-between'>
        {/*grid items A*/}
       {cart.map(items => (
        <div key={items.id}
        className="border  hover:scale-105 duration-300 "> 
        <div className="image">
          <img
            className="h-[120px] w-full object-cover rounded-b-lg"
            src={items.image}
            alt="image"
          />
        </div>
        <small className="name text-white text-center pl-2">{items.name}</small>
        <br />
        <div className="pl-2 flex">
          {/* React Icons for stars */}
          <FaStar className='text-[#b7db37]' />
          <FaStar className='text-[#b7db37]' />
          <FaStar className='text-[#b7db37]' />
          <FaStar className='text-[#b7db37]' />
          <FaStar className='text-[#ffffff]' />
        </div>
        <p className='text-[#ff3f19] text-md pl-2 my-0 animate-pulse'><span className='text-success'>{items.available}</span> available</p>
        <p className="price text-white pl-2">${items.amount}.00</p>
        {/*buy*/}
        <div className='flex items-center gap-4 '>
          <span className='ml-2'>
        <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
        </span>
        <NavLink
        to={{
          pathname: "/cart-payment",
          search: `?amount=${items.amount}`, 
          state: { amount: items.amount },
        }}
        className="btn btn-outline-danger flex animate-bounce">
              Buy now
        </NavLink>
        </div>
    </div>


       ))}
        
    
      <div className="border  hover:scale-105 duration-300 "> 
          <div className="image">
            <img
              className="h-[120px] w-full object-cover rounded-b-lg"
              src="https://cdn.pixabay.com/photo/2015/06/01/09/05/facebook-793048_1280.jpg"
              alt=""
            />
          </div>
          <small className="name text-white text-center pl-2">CITI BANK</small>
          <br />
          <div className="pl-2 flex">
            {/* React Icons for stars */}
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
          <p className='text-[#ff3f19] text-md pl-2 my-0 animate-pulse'><span className='text-success'>10</span> available</p>
          <p className="price text-white pl-2">$68.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to={{ pathname: "/cart-payment", search: `?amount=$68.00` }} 
          className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>

      <div className="border  hover:scale-105 duration-300 "> 
          <div className="image">
            <img
              className="h-[120px] w-full object-cover rounded-b-lg"
              src="https://cdn.pixabay.com/photo/2015/06/01/09/05/facebook-793048_1280.jpg"
              alt=""
            />
          </div>
          <small className="name text-white text-center pl-2">CITI BANK</small>
          <br />
          <div className="pl-2 flex">
            {/* React Icons for stars */}
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
          <p className='text-[#ff3f19] text-md pl-2 my-0 animate-pulse'><span className='text-success'>10</span> available</p>
          <p className="price text-white pl-2">$68.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to={{ pathname: "/cart-payment", search: `?amount=$68.00` }} className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>

      
      <div className="border  hover:scale-105 duration-300 "> 
          <div className="image">
            <img
              className="h-[120px] w-full object-cover rounded-b-lg"
              src="https://hng01.shop/uploads/product/1697541035.jpg"
              alt=""
            />
          </div>
          <small className="name text-white text-center pl-2">USA CVV</small>
          <br />
          <div className="pl-2 flex">
            {/* React Icons for stars */}
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
          <p className='text-[#ff3f19] text-md pl-2 my-0 animate-pulse'><span className='text-success'>4</span> available</p>
          <p className="price text-white pl-2">$57.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to={{ pathname: "/cart-payment", search: `?amount=$57.00` }} className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>
        
      
      <div className="border  hover:scale-105 duration-300"> 
          <div className="image">
            <img
              className="h-[120px] w-full object-cover rounded-b-lg"
              src="https://hng01.shop/uploads/Logscategory/1697456459.jpg"
              alt=""
            />
          </div>
          <small className="name text-white text-center pl-2">Bank of America</small>
          <br />
          <div className="pl-2 flex">
            {/* React Icons for stars */}
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
          <p className='text-[#ff3f19] text-md pl-2 my-0 animate-pulse'><span className='text-success'>3</span> available</p>
          <p className="price text-white pl-2">$62.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to={{ pathname: "/cart-payment", search: `?amount=$62.00` }} className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>


      <div className="border  hover:scale-105 duration-300 "> 
          <div className="image">
            <img
              className="h-[120px] w-full object-cover rounded-b-lg"
              src="https://hng01.shop/uploads/product/1697541035.jpg"
              alt=""
            />
          </div>
          <small className="name text-white text-center pl-2">USA CVV</small>
          <br />
          <div className="pl-2 flex">
            {/* React Icons for stars */}
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
          <p className='text-[#ff3f19] text-md pl-2 my-0 animate-pulse'><span className='text-success'>4</span> available</p>
          <p className="price text-white pl-2">$57.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to={{ pathname: "/cart-payment", search: `?amount=$57.00` }} className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>
      
       
       
      <div className="border  hover:scale-105 duration-300"> 
          <div className="image">
            <img
              className="h-[120px] w-full object-cover rounded-b-lg"
              src="https://hng01.shop/uploads/Logscategory/1697456374.jpg"
              alt=""
            />
          </div>
          <small className="name text-white text-center pl-2">WOODFOREST BANK</small>
          <br />
          <div className="pl-2 flex">
            {/* React Icons for stars */}
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
          <p className='text-[#ff3f19] text-md pl-2 my-0 animate-pulse'><span className='text-success'>3</span> available</p>
          <p className="price text-white pl-2">$72.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to={{ pathname: "/cart-payment", search: `?amount=$72.00` }} className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>

      
      <div className="border  hover:scale-105 duration-300"> 
          <div className="image">
            <img
              className="h-[120px] w-full object-cover rounded-b-lg"
              src="https://hng01.shop/uploads/Logscategory/1697456374.jpg"
              alt=""
            />
          </div>
          <small className="name text-white text-center pl-2">WOODFOREST BANK</small>
          <br />
          <div className="pl-2 flex">
            {/* React Icons for stars */}
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
          <p className='text-[#ff3f19] text-md pl-2 my-0 animate-pulse'><span className='text-success'>3</span> available</p>
          <p className="price text-white pl-2">$72.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to={{ pathname: "/cart-payment", search: `?amount=$72.00` }} className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>

       
      <div className="border  hover:scale-105 duration-300"> 
          <div className="image">
            <img
              className="h-[120px] w-full object-cover rounded-b-lg"
              src="https://hng01.shop/uploads/product/1697540918.jpg"
              alt=""
            />
          </div>
          <small className="name text-white text-center pl-2">UK Cvv</small>
          <br />
          <div className="pl-2 flex">
            {/* React Icons for stars */}
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
          <p className='text-[#ff3f19] text-md pl-2 my-0 animate-pulse'><span className='text-success'>4</span> available</p>
          <p className="price text-white pl-2">$57.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to={{ pathname: "/cart-payment", search: `?amount=$57.00` }} className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>

      
      <div className="border  hover:scale-105 duration-300"> 
          <div className="image">
            <img
              className="h-[120px] w-full object-cover rounded-b-lg"
              src="https://hng01.shop/uploads/Logscategory/1697537265.jpg"
              alt=""
            />
          </div>
          <small className="name text-white text-center pl-2">Paypal Logins</small>
          <br />
          <div className="pl-2 flex">
            {/* React Icons for stars */}
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
          <p className='text-[#ff3f19] text-md pl-2 my-0 animate-pulse'><span className='text-success'>21</span> available</p>
          <p className="price text-white pl-2">$17.50</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to={{ pathname: "/cart-payment", search: `?amount=$17.50` }} className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>

       
      <div className="border  hover:scale-105 duration-300"> 
          <div className="image">
            <img
              className="h-[120px] w-full object-cover rounded-b-lg"
              src="https://hng01.shop/uploads/Logscategory/1697456374.jpg"
              alt=""
            />
          </div>
          <small className="name text-white text-center pl-2">WOODFOREST BANK</small>
          <br />
          <div className="pl-2 flex">
            {/* React Icons for stars */}
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
          <p className='text-[#ff3f19] text-md pl-2 my-0 animate-pulse'><span className='text-success'>3</span> available</p>
          <p className="price text-white pl-2">$72.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to={{ pathname: "/cart-payment", search: `?amount=$72.00` }} className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>

      
      <div className="border  hover:scale-105 duration-300"> 
          <div className="image">
            <img
              className="h-[120px] w-full object-cover rounded-b-lg"
              src="https://hng01.shop/uploads/Logscategory/1697456374.jpg"
              alt=""
            />
          </div>
          <small className="name text-white text-center pl-2">WOODFOREST BANK</small>
          <br />
          <div className="pl-2 flex">
            {/* React Icons for stars */}
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
          <p className='text-[#ff3f19] text-md pl-2 my-0 animate-pulse'><span className='text-success'>3</span> available</p>
          <p className="price text-white pl-2">$72.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to={{ pathname: "/cart-payment", search: `?amount=$72.00` }} className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>




  

     











     


      </div>
      <Reviews />
    </div>
  );
};

export default Shop;
