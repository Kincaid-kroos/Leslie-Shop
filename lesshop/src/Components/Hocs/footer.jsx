import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const timeline = new Date().getFullYear();
 
  return (
    <footer className="bg-[#0f0f2f] text-[#e7dede] mx-3">
      <div className="md:mx-auto  flex flex-col md:flex-row sm:items-center justify-around items-start px-10 mt-0 md:mt-10 md:space-x-32 space-x-15 space-y-2 md:space-y-0">
        {/* item 1 */}
        <div className="flex flex-col md:mt-0 space-y-2 md:w-1/2">
          <h2 className="font-bold text-[#ff3f19]   text-2xl md:text-2xl lg:text-3xl">The CVV store</h2>
          <p>The best online store for online services</p>

         
        </div>

        {/* item b */}
        <div className="flex flex-col sm:ml-4  md:mt-0 sm:mt-5 space-y-2 md:w-1/2 sm:w-full">
          <h2 className="font-semibold text-[#ff3f19]  text-2xl md:text-2xl lg:text-3xl">Quick Links</h2>
          <div className="flex flex-col ">
            <div>
            <Link to="/">Home</Link>
            </div>
            <NavLink to="/how-to-order">How to Place Order</NavLink>
            <Link to="/shop">Products</Link>
            <Link to="/about">What is CVV shop?</Link>
          </div>
        </div>
   
      </div>

  
      <div className="flex flex-col md:mx-20 items-center text-[#c9c1bd] mt-10 ">
        Copyright©{timeline}: || All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
