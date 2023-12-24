

const Add = () => {
  return (
    <div className="bg-[#0A1929] mx-3 ">
      <div>
        <button className="btn btn-danger" onClick={() => window.history.back()}>
          Go Back
        </button>

        <h1 className="text-center font-bold text-[#ff3f19] py-2">Wallet Payment Page</h1>

       <div className="md:mx-10 py-2">
        <button
        className="btn blink_me btn-block border-2 border-success text-white py-8 animate-pulse"   style={{fontSize: '1.5rem'}}>
        Note: Read to understand before making any payment and keep in mind that the payment mode only accepted is TRC 20
       </button>
       </div>

        <div className="border md:mx-10">
          {/*a*/}
          <div className="flex flex-col items-center pt-4 md:flex-row md:gap-5 md:justify-center">
            <img className="h-[200px] w-[200px]" src="http://hng01.shop/uploads/wallet/1703292170.jpg" alt="QR code for payment" />
            <button className="btn btn-danger animate-pulse" 
            //onClick={openQrimage}
            >
              Scan QR Image to Pay
            </button>
          </div>
           {/*b*/}
          <div className="flex flex-col md:flex-row justify-center gap-3 py-2">
            <input type="text" value="12FvGewD34TgpMNq4js99Am4Gus96aWX9q" className="bg-[#ffffff]"/>
            <span className="btn btn-success animate-pulse" //onClick={copyAddress}
            >
              Copy to Clipboard
            </span>
          </div>

          <br />

          <div className="self">
            <button
              className="btn blink_me"
              //onClick={openQRCodeModalSweetAlert}
              style={{ color: 'white', background: 'rgb(128, 62, 0)' }}
            >
              View Log
            </button>
          </div>
        </div>
      </div>

      <button className="btn" style={{ background: 'yellow' }} 
      //onClick={openSweetAlert}
      >
        Click to Copy
      </button>

      <button className="btn blink_me" 
      //onClick={openQRCodeModalSweetAlert}
       style={{ marginLeft: '1rem', color: 'white', background: 'purple' }}>
        Click to Scan
      </button>

      <h6 className="text-center">YOUR BALANCE WILL BE CREDITED AUTOMATICALLY AFTER 3 CONFIRMATIONS RECEIVED AS WELL MARKED AS SUCCESS HERE</h6>

      <br />

      <ul>
        <li>Make Payments to the wallet.</li>
        <li>Send funds within 20 minutes.</li>
        <li>Make sure to pay the transaction&apos;s fee to get confirmed faster.</li>
        <li>After your transactions get 3 confirmations, your balance will be added to your account automatically.</li>
        <li>This Bitcoin address will be used to fund your wallet, check.</li>
        <li>
          <b>
            <font color="red">WE ISSUE REFUNDS WITHIN 1-2 hours</font>
          </b>
        </li>
      </ul>

      <div style={{ border: '2px solid white' }}>
        <p className="text-center" style={{ fontSize: '1.5rem', color: 'orange' }}>
          Your New Invoice will be created after the countdown of this time, and this page will refresh automatically{' '}
          <span id="time">05:00</span> Minutes!
        </p>
      </div>
    </div>
  );
};

export default Add;
