import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';


const Home = () => {
  return (
    <div>

      <div className="bg-[#0f0f0f] mx-3">
        {/* Item A */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Welcome to CVV store</h1>
          <p className="text-[#a1923e] font-bold mb-2">A safe guide on how to use every product is available !!!</p>
          <p className="text-[#706767] font-semibold">We are happy to see you here!</p>
        
          <button className="py-2 px-4 bg-[#ff3f19] text-white rounded-full mt-4 hover:bg-[#121530] transition duration-300 ease-in-out">
            <span className="font-bold">Go shopping --&gt;</span>
          </button>
        </div>

     {/* Item B */}
<div className="flex flex-col items-center justify-around space-x-8 mt-3 py-5 md:flex-row">
  {/* Item 1 */}
  <div className="mx-auto mb-4 md:mb-0">
    <label className= "text-[#ff3f19]/90 font-extrabold text-2xl md:text-3xl lg:text-4xl flex justify-center">43</label>
    <p className="text-white font-bold text-center">Products Sold</p>
  </div>

  {/* Item 2 */}
  <div className="mx-auto text-center mb-4 md:mb-0">
    <label className="text-[#ff3f19]/90 font-extrabold text-2xl md:text-3xl lg:text-4xl flex justify-center">1052</label>
    <p className="text-white font-bold">Customers</p>
  </div>

  {/* Item 3 */}
  <div className="mx-auto text-center">
    <label className="items-center gap-2 text-[#ff3f19]/90 font-extrabold text-2xl md:text-3xl lg:text-4xl flex justify-center">
      4.50 <FaStar />
    </label>
  
    <p className="text-white font-bold">Trusted</p>
  </div>
</div>

      </div>


  {/* Products  start*/}
  <div className='bg-[#0f0f0f] mx-3 items-center'>
  <h2 className="text-center text-[#ff3f19] pt-2 pb-2 underline">Latest Products</h2>
 

 {/*flex items*/}
 <div className='flex flex-col items-center justify-center sm:flex-row flex-wrap md:gap-16'>
        {/*flex items A*/}

    
        <div className=" m-4  border-[1px]  rounded "> 
          <div className="image">
            <img
              className="h-[150px] w-[200px]"
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
          <p className="price text-white pl-2">$750.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to="/balance" className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>
      
      
      <div className=" m-4  border-[1px] w-[1/3] rounded "> 
          <div className="image">
            <img
              className="h-[150px] w-[200px]"
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
          <p className="price text-white pl-2">$750.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to="/balance" className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>

      
      <div className=" m-4  border-[1px] rounded"> 
          <div className="image">
            <img
              className="h-[150px] w-[200px]"
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
          <p className="price text-white pl-2">$750.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to="/balance" className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>
   
   </div>
  <div className='flex justify-center m-4 pb-8'>
   <NavLink to="/shop" className="py-2 px-4 bg-[#ff3f19] text-white  hover:bg-[#69cc56] 
       transition duration-300 ease-in-out rounded-tr-3xl rounded-bl-3xl no-underline">
            <span className="font-bold">Click For More --&gt;</span>
          </NavLink>
          </div>
  </div>
  {/* Products  end*/}

  {/*Testimonials start*/}
  <div>

  </div>
   {/*Testimonials end*/}

    </div>
  );
};

export default Home;
