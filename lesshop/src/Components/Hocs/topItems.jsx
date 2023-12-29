import { Link,NavLink } from 'react-router-dom'; 

import { useState  } from 'react';

const TopItems = () => { 
  const [modal,setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }
  const modalhandler = () => {
    setModal(true)

  } 

  const modalLogin = () => {
    setLoginModal(true)
    setModal(false)
    
  }

  const closeLogin = () => {
    setLoginModal(false)
  }

 
  
  return (
    <div className=' pt-4 mx-3 sm:mx-3'>
      <div className="bg-green-600 flex justify-end p-3 border-t-8 border-blue-900 border-solid
       rounded-tl-md rounded-tr-md space-x-2 sm:space-x-4 ">
          <Link  className="bg-warning border rounded text-white text-center py-2 px-1 sm:ml-3  font-bold bg-success
            no-underline ">
      Current Orders
    </Link>

    <Link to="/balance"  className=" border  rounded text-white text-center py-2 px-1 bg-[#204b20]  font-bold
     text-sm sm:text-base  no-underline ">
      Add Balance
    </Link>

    <Link to="/history" className=" border  rounded text-white text-center font-bold
    py-2 px-1  bg-[#524fd4]  no-underline  ">
      Purchase History
    </Link>

    <div to="/register" className=" border  rounded text-white justify-center text-center font-bold
    py-2 px-2 bg-danger  no-underline  " onClick={modalhandler}>
      Register
    </div>
 

       
    {loginModal && (
        <div
          className={`modal fade show`}
          tabIndex="-1"
          role="dialog"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog bg-[#42d15a]" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-[#ff3f19]">Sign In</h5>
                <button
                  type="button"
                  className="btn-close btn btn-success"
                  aria-label="Close"
                  onClick={closeLogin}
                ></button>
              </div>
              <div className="modal-body bg-[#0A1929]">
                <form>
                  <div className="mb-3">
                    <label className='text-success font-bold'>Email</label>
                    <input
                      type="email"
                      className="form-control "
                      aria-describedby="emailHelp"
                      placeholder='jasonowen24@gmail.com'
                    />
                  </div>
                 
                  <div className="mb-3">
                    <label className='text-success font-bold'>Password</label>
                    <input
                      type="password"
                      className="form-control"
                    />
                  </div>
                </form>
           
                   
             
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-success">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      )
}

      {modal && (
        <div
          className={`modal fade show`}
          tabIndex="-1"
          role="dialog"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog bg-[#42d15a]" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-[#ff3f19]">Sign Up</h5>
                <button
                  type="button"
                  className="btn-close btn btn-success"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body bg-[#0A1929]">
                <form>
                <div className="mb-3">
                    <label className='text-success font-bold'>Username</label>
                    <input
                      type="email"
                      className="form-control "
                      placeholder='Jason Owen'
                    />
                  </div>
                  <div className="mb-3">
                    <label className='text-success font-bold'>Email</label>
                    <input
                      type="email"
                      className="form-control "
                      aria-describedby="emailHelp"
                      placeholder='jasonowen24@gmail.com'
                    />
                    <div id="emailHelp" className="form-text text-white">
                      We`ll never share your email with anyone else.
                    </div>
                  </div>
                 
                  <div className="mb-3">
                    <label className='text-success font-bold'>Password</label>
                    <input
                      type="password"
                      className="form-control"
                    />
                  </div>
                </form>
           
                   
             
              </div>
              <div className='bg-[#0A1929] pb-3 px-3'>
              <label className="text-[#68e741] font-bold">Already have an account<span className='text-sucess'>?,</span>  <NavLink onClick={modalLogin}
                className=""> Sign in</NavLink></label>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-success">
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
