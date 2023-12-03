import { Link } from 'react-router-dom';

const TopItems = () => {
  return (
    <div className=' pt-4 mx-3 md:mx-5'>
    <div className="bg-green-600  flex  justify-end p-3 border-t-8 border-blue-900 
    border-solid rounded-tl-md rounded-tr-md space-x-2 sm:space-x-1">
      <Link to="/cart" className="btn text-white btn-warning">
        Current Orders
      </Link>
      <Link to="/balance" className="btn btn-success">
        Add Balance
      </Link>
      <Link to="/history" className="btn btn-primary">
        Purchase History
      </Link>
      <Link to="/register" className="btn btn-danger">
        Register
      </Link>
    </div>
    </div>
  );
};

export default TopItems;
