import { FaStar } from 'react-icons/fa';
import '../InnerStyle/Reviews.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

//const csrfAxios = axios.create();
//csrfAxios.defaults.xsrfCookieName = 'csrftoken';
//csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReview = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/reviews/`);
      console.log('See the review:', res.data);
      setReviews(res.data);
    } catch (err) {
      // Handle error if needed
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  return (
    <div className="text-white mx-3 ">
      <h2 className="font-bold text-center text-[#ff3f19] pt-2">
        Recent Reviews
      </h2>

      <div className='pb-4 md:px-24'>
        {/* Mapping over the reviews  */}
        {reviews.map((review) => (
          <div key={review.id} className='py-2 faint rounded-xl px-2'>
            <i className="font-extrabold"></i> <strong>{review.name}</strong> &gt;
            <span className='text-white'>
              {review.comments}
            </span>
            <div className="pl-2 flex">
              <FaStar className='text-[#b7db37]' />
              <FaStar className='text-[#b7db37]' />
              <FaStar className='text-[#b7db37]' />
              <FaStar className='text-[#b7db37]' />
              <FaStar className='text-[#b7db37]' />
            </div>
          </div>
        ))}
       

        {/* Other items */}
        <div className='py-2 faint rounded-xl px-2'>
          <i className="font-extrabold"></i> <strong>Ann Kandie</strong> &gt;
          <span className='text-white'>
            I&apos;ve been brainstorming some ways to come up with extra cash working from home.
            Just when I thought I had conceived every possible legitimate plan, I found this gem
          </span>
          <div className="pl-2 flex">
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
        </div>

        <div className='py-2 faint rounded-xl px-2'>
          <i className="font-extrabold"></i> <strong>Jasmine Brown</strong> &gt;
          <span className='text-white'>
            I do not know what to say. I’m shocked that it works !!! Paid out 67$ for a UK CVV
          </span>
          <div className="pl-2 flex">
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
          </div>
        </div>

        <div className='py-2 faint rounded-xl px-2'>
          <i className="font-extrabold"></i> <strong>No name</strong> &gt;
          <span className='text-white'>
            Simple. Fast. Secure. Easy. 5*****
          </span>
          <div className="pl-2 flex">
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
        </div>

        <div className='py-2 faint rounded-xl px-2'>
          <i className="font-extrabold"></i> <strong>Ian Webb</strong> &gt;
          <span className='text-white'>
            i never thought of such a dark web thing, until my guy introduced me to this
          </span>
          <div className="pl-2 flex">
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
        </div>

        <div className='py-2 faint rounded-xl px-2'>
          <i className="font-extrabold"></i> <strong>Kevin Kibe</strong> &gt;
          <span className='text-white'>
            I love the way that the delivery is fast
          </span>
          <div className="pl-2 flex">
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
        </div>

        <div className='py-2 faint rounded-xl px-2'>
          <i className="font-extrabold"></i> <strong>Mason Ogbenna</strong> &gt;
          <span className='text-white'>
            Just placed my monthly order for the new year
          </span>
          <div className="pl-2 flex">
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
        </div>

        {/* ... (other items) */}
      </div>
    </div>
  );
};

export default Reviews;
