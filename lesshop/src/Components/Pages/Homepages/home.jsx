import { FaStar } from 'react-icons/fa';

const Home = () => {
  return (
    <div>

      <div className="bg-[#0f0f0f] mx-3">
        {/* Item A */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Welcome to CVV store</h1>
          <p className="text-[#706767] font-semibold">We are happy to see you here!</p>
          <button className="py-2 px-4 bg-[#ff3f19] text-white rounded-full mt-4 hover:bg-[#121530] transition duration-300 ease-in-out">
            <span className="font-bold">Go shopping --&gt;</span>
          </button>
        </div>

     {/* Item B */}
<div className="flex flex-col items-center justify-around space-x-8 mt-3 py-5 md:flex-row">
  {/* Item 1 */}
  <div className="text-center mb-4 md:mb-0">
    <label className="text-[#ff3f19]/90 font-extrabold text-2xl md:text-3xl lg:text-4xl">43</label>
    <p className="text-white font-bold text-center">Products Sold</p>
  </div>

  {/* Item 2 */}
  <div className="text-center mb-4 md:mb-0">
    <label className="text-[#ff3f19]/90 font-extrabold text-2xl md:text-3xl lg:text-4xl">1052</label>
    <p className="text-white font-bold">Customers</p>
  </div>

  {/* Item 3 */}
  <div className="text-center">
  
    <label className="flex items-center gap-2 text-[#ff3f19]/90 font-extrabold text-2xl md:text-3xl lg:text-4xl">
      4.50 <FaStar />
    </label>
  
    <p className="text-white font-bold">Trusted</p>
  </div>
</div>

      </div>


  {/* Products  start*/}
  <div>

  </div>
  {/* Products  end*/}

    </div>
  );
};

export default Home;
