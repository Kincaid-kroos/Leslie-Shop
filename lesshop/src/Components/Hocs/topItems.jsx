import {useContext} from 'react'
import { jwtDecode } from "jwt-decode";
import { Link} from 'react-router-dom';
import AuthContext from '../../Context/Acontext';


const TopItems = () => {
  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (token){
    const decoded = jwtDecode(token) 
    var user_id = decoded.user_id
  }
  
  return (
    <div className="pt-4 mx-3 sm:mx-3">
      <div className="bg-green-600 flex justify-end p-3 border-t-8 border-blue-900 border-solid rounded-tl-md rounded-tr-md space-x-2 sm:space-x-4">
        <Link to="/cart" className="bg-warning border rounded text-white text-center py-2 px-1 sm:ml-3 font-bold bg-success no-underline">
          Current Orders
        </Link>

        <Link to="/balance" className="border rounded text-white text-center py-2 px-1 bg-[#204b20] font-bold text-sm sm:text-base no-underline">
          Add Balance
        </Link>

        <Link to="/history" className="border rounded text-white text-center font-bold py-2 px-1 bg-[#524fd4] no-underline">
          Purchase History
        </Link>
        
        {token === null && 
        <Link to="/register" className="border rounded text-white justify-center text-center font-bold py-2 px-2 bg-danger no-underline ">
          Register
        </Link>
         }
         {token !==null && 
          <div to="/" onClick={logoutUser} className="border rounded text-white justify-center text-center font-bold py-2 px-2 bg-danger no-underline ">
          Logout
        </div>
         }

      </div>
    </div>
  );
};

export default TopItems;
