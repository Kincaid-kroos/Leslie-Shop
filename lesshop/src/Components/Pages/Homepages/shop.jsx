import { NavLink } from 'react-router-dom';
import { FaStar, FaShoppingBag } from 'react-icons/fa';
import Reviews from './Reviews.jsx';



const Shop = () => {
  return (
    <div className='bg-[#0A1929]   mx-3 pb-8'>
      <h1 className="text-center text-[#ff3f19] ">Products</h1>

    {/*grid items*/}
    <div className='grid grid-cols-2 lg:grid-cols-5 md:mx-20 gap-x-4 gap-y-8 items-center justify-between'>
        {/*grid items A*/}

    
      <div className="border  hover:scale-105 duration-300 "> 
          <div className="image">
            <img
              className="h-[120px] w-full object-cover rounded-b-lg"
              src="https://hng01.shop/uploads/Logscategory/1697456429.jpg"
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
              src="https://hng01.shop/uploads/Logscategory/1697456429.jpg"
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
