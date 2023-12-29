
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Recent Reviews
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse show bg-dark text-white"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body bg-info" style={{ color: 'green' }}>
          <div className="pl-2 flex">
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>

          <i className="fa-solid fa-user"></i> <strong> Jasmine Brown</strong> &gt;
          <span style={{ color: 'white' }}>
            Estas son las mejores tarjetas en tor. Ellos son seguros para usar en mi país. Gracias
          </span>
          <br />

          <div className="pl-2 flex">
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>

          <i className="fa-solid fa-user"></i> <strong> Mike Davis</strong> &gt;
          <span style={{ color: 'white' }}>Placed my monthly order.</span>
          <br />

          <div className="pl-2 flex">
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>

          <i className="fa-solid fa-user"></i> <strong> Chris Smith</strong> &gt;
          <span style={{ color: 'white' }}>
            I love you people so much and just I love the benefits that go along with being a VIP
            member on your telegram channel
          </span>
          <br />

          <div className="pl-2 flex">
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
