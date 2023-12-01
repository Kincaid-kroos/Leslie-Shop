

const Home = () => {
  return (
   
    <div id="home" className="flex flex-col-reverse md:flex-row items-center px-6 mt-0 md:mt-10  md:space-x-48 space-x-15 space-y-2 md:space-y-0 ">
      {/*item a*/}
      <div className="flex flex-col md:mt-0 space-y-5 md:w-1/2">
      <h1 className="text-[#ff7b00] md:text-5xl text-3xl font-bold text-center md:text-left">
            Welcome to Tassie`s Berbaque, Mombasa
          </h1>

          <p className="text-[#16B97A] uppercase font-bold text-xl md:text-5xl text-center md:text-left">
            We Serve 
          </p>
          <p className="font-semibold text-md text-center md:text-left  uppercase md:text-7xl">
            The best Dishes
          </p>
          <p className="text-gray-400 my-4 text-sm md:text-xl font-semibold  w-[90%] text-center md:text-left">
          Explore a variety of barbecue sauces, from sweet and tangy to spicy and smoky <br/> Enjoy your meal!!!
          </p>
           <div className="flex md:gap-24 gap-8">
            <button className=" bg-[#7ab916] flex gap-2 font-normal md:font-semibold cursor-pointer rounded-tr-3xl rounded-bl-3xl hover:bg-[#FFA300] transition-all duration-300 text-white md:text-md text-sm py-2  px-4 md:px-8 md:py-4 ">
              <p>Follow Us on Instagram</p> 
              
            </button>

            <div className="flex quicksand items-center gap-2">
              <a href="https://www.instagram.com/k_i_n_c_a_i_d_">
            
              </a>
              <p>Instagram</p>
            </div>

      </div>
      </div>
      {/*item b*/}
      <div className="md:w-1/2 "> 
      <img  alt="hero img" className="md:h-[480px] md:w-[420px] rounded-tr-3xl rounded-bl-3xl"/>
        
      </div>
      
    </div>
    
  )
}

export default Home
 