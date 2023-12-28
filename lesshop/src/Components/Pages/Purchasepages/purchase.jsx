

const Purchase = () => {
  return (
    <div className="mx-3 bg-[#0A1929] py-2">
      <h1 className="text-center text-[#ff3f19] py-2">Latest Purchases</h1>

      <div className="text-white overflow-x-auto">
        <div className="bg-[#0A1929]">
          <table className="sm:w-full table-auto">
            <thead>
              <tr>
                <th className="p-2">Order ID</th>
                <th className="p-2">Payment Method</th>
                <th className="p-2">Item Name</th>
                <th className="p-2">Date</th>
                <th className="p-2">Price</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <td className="p-2">253b73a37a324</td>
                <td className="p-2">Bitcoin</td>
                <td className="p-2">UK Cvv</td>
                <td className="p-2">2023-10-26 14:49:04</td>
                <td className="p-2">$85.00</td>
                <td className="p-2">
                  <button className="btn btn-danger">Completed</button>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="border-t border-white"></td>
              </tr>
              <tr>
                <td className="p-2">253b0d545bacc</td>
                <td className="p-2">Bitcoin</td>
                <td className="p-2">WOODFOREST BANK</td>
                <td className="p-2">2023-10-25 17:28:52</td>
                <td className="p-2">$105.00</td>
                <td className="p-2">
                  <button className="btn btn-danger">Completed</button>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="border-t border-white"></td>
              </tr>
              <tr>
                <td className="p-2">253a4c8263e70</td>
                <td className="p-2">Bitcoin</td>
                <td className="p-2">CITI BANK</td>
                <td className="p-2">2023-10-25 03:46:10</td>
                <td className="p-2">$104.00</td>
                <td className="p-2">
                  <button className="btn btn-danger">Completed</button>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="border-t border-white"></td>
              </tr>
              <tr>
                <td className="p-2">253a0cc89442a</td>
                <td className="p-2">Bitcoin</td>
                <td className="p-2">Canada Cvv</td>
                <td className="p-2">2023-10-24 23:14:16</td>
                <td className="p-2">$63.00</td>
                <td className="p-2">
                  <button className="btn btn-warning">Pending</button>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="border-t border-white"></td>
              </tr>
              <tr>
                <td className="p-2">2538e4e36aaf9</td>
                <td className="p-2">Bitcoin</td>
                <td className="p-2">USA Cvv</td>
                <td className="p-2">2023-10-24 02:11:47</td>
                <td className="p-2">$90.00</td>
                <td className="p-2">
                  <button className="btn btn-danger">Completed</button>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="border-t border-white"></td>
              </tr>
              <tr>
                <td className="p-2">25379f52d4a7c</td>
                <td className="p-2">Bitcoin</td>
                <td className="p-2">Paypal Logins</td>
                <td className="p-2">2023-10-23 03:02:42</td>
                <td className="p-2">$17.00</td>
                <td className="p-2">
                  <button className="btn btn-danger">Completed</button>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="border-t border-white"></td>
              </tr>
              <tr>
                <td className="p-2">253799832f5ad</td>
                <td className="p-2">Bitcoin</td>
                <td className="p-2">BANK OF AMERICA</td>
                <td className="p-2">2023-10-23 02:37:55</td>
                <td className="p-2">$67.00</td>
                <td className="p-2">
                  <button className="btn btn-warning">Pending</button>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="border-t border-blue"></td>
              </tr>
              <tr>
                <td className="p-2">25375e1863916</td>
                <td className="p-2">Bitcoin</td>
                <td className="p-2">Citi Bank</td>
                <td className="p-2">2023-10-22 22:24:24</td>
                <td className="p-2">$300.00</td>
                <td className="p-2">
                  <button className="btn btn-danger">Completed</button>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="border-t border-white"></td>
              </tr>
              <tr>
                <td className="p-2">2537440a446ba</td>
                <td className="p-2">Bitcoin</td>
                <td className="p-2">USA Cvv</td>
                <td className="p-2">2023-10-22 20:33:14</td>
                <td className="p-2">$90.00</td>
                <td className="p-2">
                  <button className="btn btn-danger">Completed</button>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="border-t border-white"></td>
              </tr>
              <tr>
                <td className="p-2">25370b7388350</td>
                <td className="p-2">Bitcoin</td>
                <td className="p-2">Paypal Logins</td>
                <td className="p-2">2023-10-22 16:31:47</td>
                <td className="p-2">$17.00</td>
                <td className="p-2">
                  <button className="btn btn-warning">Pending</button>
                </td>
              </tr>
              <tr className=""> 
                <td colSpan="6" className="border-t border-white pb-8"></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="py-4 flex justify-center ">
      <button className="rounded-xl bg-[#ff3f19] p-2 text-white font-bold" onClick={() => window.history.back()}>
          Go Back
        </button>
        </div>
    </div>
  );
};

export default Purchase;
