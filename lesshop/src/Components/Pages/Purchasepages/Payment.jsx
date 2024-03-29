import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import qrcode from './qrcode.jpg';

const Payment = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount = parseFloat(searchParams.get('amount')) || 0;


  const [timer, setTimer] = useState(600); 


  

  function copyAddresss() {
    const btcAddress = '1CS2igFVF3GLGtbXzusVjXLrzw9yxxKFKm';
    const textarea = document.createElement('textarea');
    textarea.value = btcAddress;

    document.body.appendChild(textarea);
    textarea.select();
  
    try {
      document.execCommand('copy');
      alert('Address Copied: ' + btcAddress);
    } catch (err) {
      console.error('Unable to copy: ', err);
    } finally {
      document.body.removeChild(textarea);
    }
  }
  

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

    return (
      <div className="bg-[#0A1929] mx-3 ">
        <div className="md:mx-10">
          <button className="btn btn-danger" onClick={() => window.history.back()}>
            Go Back
          </button>
  
          <h1 className="text-center font-bold text-[#ff3f19] py-2">Item Payment</h1>
  
         <div className="md:mx-10 py-2">
          <button
          className="btn blink_me btn-block border-2 border-success text-white py-8 animate-pulse"   style={{fontSize: '1.5rem'}}>
          Note: Read to understand before making any payment and keep in mind that the payment mode only accepted is BTC
         </button>
         </div>

         <h2 className="text-center font-bold text-[#ff3f19] py-2">Amount to pay: <span className="text-[#44d43f]">
         ${amount}.00
          </span></h2>
  
          <div className="border md:mx-32">
            {/*a*/}
            <div className="flex flex-col items-center pt-4 md:flex-row  md:gap-5 md:justify-center">
              <img className="h-[200px] w-[200px]" src={qrcode} alt="QR code for payment" />
              <button className="btn btn-danger animate-pulse" 
              >
                Scan QR Image to Pay
              </button>
            </div>
             {/*b*/}
            <div className="flex flex-col md:flex-row justify-center gap-2 py-2 container">
              <input type="text" value="1CS2igFVF3GLGtbXzusVjXLrzw9yxxKFKm" className="bg-[#ffffff] mx-20 container"/>
              <span className="btn btn-success animate-pulse mx-20" onClick={copyAddresss}
              >
                Copy to Clipboard
              </span>
            </div>
  
           
  
            <div className="flex items-center justify-center py-2">
              <button
                className="animate-pulse text-white bg-[#30bb4e] rounded-md p-2"
                //onClick={openQRCodeModalSweetAlert}
              >
                View Log
              </button>
            </div>
          </div>
        </div>
  
        
  
        
       <div className="md:mx-10">
        <h6 className="text-left py-2 px-2 text-white font-semibold">YOUR BALANCE WILL BE CREDITED AUTOMATICALLY AFTER 3 CONFIRMATIONS RECEIVED AS WELL MARKED AS SUCCESS HERE</h6>
       </div>
  
      <div className="md:mx-10 text-white">
        <ul className="list-disc">
          <li>Make Payments to the wallet.</li>
          <li>Send funds within 20 minutes.</li>
          <li>Make sure to pay the transaction&apos;s fee to get confirmed faster.</li>
          <li>After your transactions get 3 confirmations, your balance will be added to your account automatically.</li>
          <li>This BTC address will be used to fund your wallet, check.</li>
          <li className="list-none">
            <b>
              <font color="green">WE ISSUE REFUNDS WITHIN 1-2 hours</font>
            </b>
          </li>
        </ul>
        </div>
  
        <div className="border-2 md:mx-10">
          <p className="text-center" style={{ fontSize: '1.5rem', color: 'yellow' }}>
            Your New payment Invoice will be created after the countdown of this time, and this page will refresh automatically{' '}
            <span className='text-[#ff3f19]'>{`${Math.floor(timer / 60)}:${(timer % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}`}</span>  Minutes!
          </p>
        </div>
      </div>
    );
  };
  
  export default Payment;
  