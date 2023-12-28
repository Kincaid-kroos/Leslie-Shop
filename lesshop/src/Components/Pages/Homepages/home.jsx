import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';


const Home = () => {
  return (
    <div>

      <div className="bg-[#0f0f0f] mx-3 ">
        {/* Item A */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Welcome to CVV store</h1>
          <p className="text-[#a1923e] font-bold mb-2">A safe guide on how to use every product is available !!!</p>
          <p className="text-[#706767] font-semibold">We are happy to see you here!</p>
        
          <button className="py-2 px-4 bg-[#ff3f19] text-white animate-bounce rounded-full mt-4  hover:bg-[#b7db37]  transition duration-300 ease-in-out">
            <span className="font-bold">Go shopping --&gt;</span>
          </button>
        </div>

     {/* Item B */}
<div className="flex flex-col items-center justify-around space-x-8 mt-3 py-5 md:flex-row">
  {/* Item 1 */}
  <div className="mx-auto mb-4 md:mb-0">
    <label className= "text-[#ff3f19]/90 font-extrabold text-3xl md:text-3xl lg:text-4xl flex justify-center">43</label>
    <p className="text-white font-bold text-center text-3xl md:text-3xl lg:text-4xl">Products Sold</p>
  </div>

  {/* Item 2 */}
  <div className="mx-auto text-center mb-4 md:mb-0">
    <label className="text-[#ff3f19]/90 font-extrabold text-3xl md:text-3xl lg:text-4xl flex justify-center">1052</label>
    <p className="text-white font-bold text-3xl md:text-3xl lg:text-4xl">Customers</p>
  </div>

  {/* Item 3 */}
  <div className="mx-auto text-center">
    <label className="items-center gap-2 text-[#ff3f19]/90 font-extrabold text-3xl md:text-3xl lg:text-4xl flex justify-center">
      4.50 <FaStar />
    </label>
  
    <p className="text-white font-bold text-3xl md:text-3xl lg:text-4xl">Trusted</p>
  </div>
</div>

      </div>


  {/* Products  start*/}
  <main className='bg-[#0f0f0f] mx-3 py-2'>
  <div className='bg-[#0f0f0f] mx-3 items-center'>
  <h2 className="text-center text-[#ff3f19] pt-2 pb-2 underline">Latest Products</h2>
 

 {/*flex items*/}
 <div className='grid grid-cols-2 lg:grid-cols-4 md:mx-20 gap-x-4 gap-y-8 items-center justify-between'>
        {/*flex items A*/}

        <div className="border  hover:scale-105 duration-300 "> 
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
          <p className="price text-white pl-2">$57.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to="/" className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>

      
      <div className="border  hover:scale-105 duration-300 "> 
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
          <NavLink to="/" className="btn btn-outline-danger flex animate-bounce">
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
          <p className="price text-white pl-2">$65.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to="/" className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>


      <div className="border  hover:scale-105 duration-300 "> 
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
          <p className="price text-white pl-2">$27.00</p>
          {/*buy*/}
          <div className='flex items-center gap-4 '>
            <span className='ml-2'>
          <FaShoppingBag className="animate-pulse flex text-[#38db53] pl-1" />
          </span>
          <NavLink to="/" className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>


      <div className="border  hover:scale-105 duration-300 "> 
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
          <NavLink to="/" className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>


      <div className="border  hover:scale-105 duration-300 "> 
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
          <NavLink to="/" className="btn btn-outline-danger flex animate-bounce">
                Buy now
          </NavLink>
          </div>
      </div>

   </div>


  <div className='flex justify-center m-4 pb-12 pt-4'>
   <NavLink to="/shop" className="py-2 px-4 bg-[#ff3f19] text-white  hover:bg-[#b7db37] 
       transition duration-300 ease-in-out rounded-tr-3xl rounded-bl-3xl no-underline animate-bounce">
            <span className="font-bold">Click For More --&gt;</span>
          </NavLink>
          </div>
  </div>
  {/* Products  end*/}

  {/*Testimonials start*/}
  
    {/*  Container to heading */}
      <div className=" px-5 text-center">
        {/*Heading*/} 
        <h2 className="font-bold text-center text-[#ff3f19] md:pt-4">
          Customer Reviews?
        </h2>
         {/*Testimonials Container*/} 
        <div className="flex flex-col mt-24 md:flex-row md:gap-12 md:pt-12">
          {/*Testimonial a*/}
          <div className="flex flex-col items-center justify-center p-6 space-y-6 rounded-lg  md:w-1/3">
            <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" className="-mt-14 w-20 h-20 rounded-full object-cover" alt="" />
            <h5 className="text-lg font-bold text-[#ff3f19]">Ann Kandie</h5>
            <p className="text-md  text-[#ffffff]">
            “CVV Shop is the ultimate high tech modern shop. The ability to make the world a little place
              in terms of the currency access status is what is the most amazing thing. Would recommend 
              anyone all day”
             
            </p> 
          </div>

           {/*Testimonial a*/}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg  md:flex md:w-1/3">
            <img src="https://images.pexels.com/photos/6311585/pexels-photo-6311585.jpeg" className="-mt-14 w-20 h-20 rounded-full object-cover" alt="" />
            <h5 className="text-lg font-bold text-[#ff3f19]">Ali Hussein</h5>
            <p className="text-md text-[#ffffff]">
              “We have been able to cancel so many other subscriptions since
              using CVV Shop. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

           {/*Testimonial c*/}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg  md:flex md:w-1/3">
            <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg" className="-mt-14 w-20 h-20 rounded-full object-cover" alt="" />
            <h5 className="text-lg font-bold text-[#ff3f19]">Richard Martin</h5>
            <p className="text-md text-[#ffffff]">
            “CVV Shop has supercharged my life. Right now i own a few businesses in town
              and i&apos;m driving my first car”
             
            </p>
          </div>
        </div>
        
        <div className="my-16 p-12 hover:animate-bounce">
          <NavLink
            to="/shop"
            className="p-3 px-6 text-white bg-[#ff3f19] rounded-xl font-semibold
             no-underline hover:bg-[#b7db37]"
            >Get Started</NavLink >
        </div>

      </div>
      </main>

      <div className='bg-dark mx-3'>
        <h></h>
      </div>
    
   {/*Testimonials end*/}

    </div>
  );
};

export default Home;
