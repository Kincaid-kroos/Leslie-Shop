import { Link } from 'react-router-dom'; 

import { useState  } from 'react';

const TopItems = () => { 
  const [modal,setModal] = useState(false);

  const closeModal = () => {
    setModal(false)
  }
  const modalhandler = () => {
    setModal(true)

  }
  
  return (
    <div className=' pt-4 mx-3 md:mx-5'>
      <div className="bg-green-600 flex justify-end p-3 border-t-8 border-blue-900 border-solid
       rounded-tl-md rounded-tr-md space-x-2 sm:space-x-1">
         <Link to="/cart" className="btn text-white btn-warning text-sm sm:text-base">
          Current Orders
          </Link>


          <Link to="/balance" className="btn btn-success text-sm sm:text-base">
             Add Balance
          </Link>

          <Link to="/history" className="btn btn-primary text-sm sm:text-base">
            Purchase History
          </Link>

          <div to="/register" className="btn btn-danger text-sm sm:text-base" onClick={modalhandler}>
               Register
           </div>
 

    
      {modal && (
        <div
          className={`modal fade show `}
          tabIndex="-1"
          role="dialog"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog bg-[#42d15a]" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-[#0f0f2f]">Login/Register</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body bg-[#cfd142]">
                <form>
                  <div className="mb-3">
                    <label className='text-[#000000]'>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder='lucas@gmail.com'
                    />
                    <div id="emailHelp" className="form-text text-[#0f0f2f]">
                      We`ll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className='text-[#000000]'>Password</label>
                    <input
                      type="password"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label text-[#0f0f2f]">Check me out</label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )
}
    </div>
    </div>
  );
};

export default TopItems;
