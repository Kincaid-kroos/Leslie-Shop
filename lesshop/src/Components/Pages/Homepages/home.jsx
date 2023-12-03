//import { FaStar } from 'react-icons/fa';


const Home = () => {
  return (
    <div>
    
    <div className="bg-[#0f0f0f] mx-3">
      {/*item a*/}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white ">Welcome to CVV store</h1>
        <p className=" text-[#706767] font-semibold">We are happy to see you here!</p>
        <button className="py-2 px-4 bg-orange-800 text-white rounded-full mt-4 hover:bg-[#5c7731] transition duration-300 ease-in-out">
          <span>Go shopping --&gt;</span>
        </button>
      </div>
          {/*item b*/}
          <div className="flex space-x-7 items-center">
              {/*item b 1*/}
              <div>
              <label className="text-orange-800">43</label>
              <p>Products Sold</p>
              </div>
              {/*item b 2*/}
              <div>
              <label className="text-orange-800 font-extrabold h-10 w-10">43</label>
              <p>Customers</p>
              </div>
              {/*item b 3*/}
              <div>
              <label className="text-orange-800">43</label>
              <p>Products Sold</p>
              </div>

          </div>
      </div> 




      </div>   
  )
}

export default Home
 