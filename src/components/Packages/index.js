import {AiFillStar} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
import './index.css'

const Packages = () => (
  <div className="packages-container">
    <div className="packages-view-heading">
      <h1>
        Top <span className="heading-high-light-packages">packages</span> !
      </h1>
      <img
        src="https://res.cloudinary.com/shafi-tech/image/upload/v1695130438/Vector_1_gfrb5o.png"
        alt="underline design"
      />
    </div>
    <p className="caption">
      Explore our wide range of tests! We ensure that you don't miss out on any
      chance to keep yourself healthy.
    </p>
    <ul className="packages-card-lists">
      <li className="package-card">
        <h1>Basic Full Body Checkup</h1>
        <div className="rating-container">
          <p>4.3</p>
          <AiFillStar size={20} color="#E2E700" />
          <p className="review">( 75 reviews )</p>
        </div>
        <p className="test-count">Number of tests - 53</p>
        <div className="price">
          <p className="cancel-price">
            MRP:<span className="prev-price">&#8377;10000</span>
          </p>
          <p className="deal-price">&#8377;8,490</p>
        </div>
        <button type="button" className="btn-book-now">
          Book now
        </button>
      </li>
      <li className="package-card">
        <h1>Advance Full Body Checkup</h1>
        <div className="rating-container">
          <p>4.7</p>
          <AiFillStar size={20} color="#E2E700" />
          <p className="review">( 100 reviews )</p>
        </div>
        <p className="test-count">Number of tests - 70</p>
        <div className="price">
          <p className="cancel-price">
            MRP:<span className="prev-price">&#8377;12000</span>
          </p>
          <p className="deal-price">&#8377;10,000</p>
        </div>
        <button type="button" className="btn-book-now">
          Book now
        </button>
      </li>
      <li className="package-card">
        <h1>Liver Function test (LFT)</h1>
        <div className="rating-container">
          <p>4.3</p>
          <AiFillStar size={20} color="#E2E700" />
          <p className="review">( 43 reviews )</p>
        </div>
        <p className="test-count">Number of tests - 89</p>
        <div className="price">
          <p className="cancel-price">
            MRP:<span className="prev-price">&#8377;13299</span>
          </p>
          <p className="deal-price">&#8377;11,299</p>
        </div>
        <button type="button" className="btn-book-now">
          Book now
        </button>
      </li>
      <li className="arrow-right">
        <BsArrowRight size={30} color="#2f2f2f" />
      </li>
      <li className="see-all">See All</li>
    </ul>
  </div>
)

export default Packages
