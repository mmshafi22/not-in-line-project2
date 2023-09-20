import {BsPerson} from 'react-icons/bs'
import {MdOutlineLocalPhone, MdOutlineLocationOn} from 'react-icons/md'
import './index.css'

const FormSection = () => (
  <div className="form-bg-container">
    <div className="form-section-container">
      <div className="form-container">
        <form className="form-card">
          <p>Fill the details to get a call!</p>
          <div className="input-container">
            <label htmlFor="fullname">
              <BsPerson size={30} color="#138ED1" />
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Full name"
              className="input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">
              <MdOutlineLocalPhone size={30} color="#138ED1" />
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone number"
              className="input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="location">
              <MdOutlineLocationOn size={30} color="#138ED1" />
            </label>
            <input
              type="text"
              id="location"
              placeholder="Phone number"
              className="input"
            />
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="phone"
              placeholder="Phone number"
              className="check-box"
            />
            <label htmlFor="phone">
              By continuing, you agree to our <strong>T&C </strong>and{' '}
              <strong>privacy policy</strong>
            </label>
          </div>
          <button type="button" className="btn-proceed">
            Proceed
          </button>
        </form>
        <div className="offer-line-section">
          <div className="offer-in-lg">
            <div className="offer">
              <p>
                Get a Full Body Checkup
                <strong className="strong-text">
                  Now at <span className="cancel-offer">&#8377;5,999</span>{' '}
                  &#8377;999
                </strong>
              </p>
            </div>
            <div className="discount">
              <p>70% OFF</p>
            </div>
          </div>
        </div>
        <div className="offer-mobile-view">
          <div className="offer">
            <p>
              Get a Full Body Checkup
              <strong className="strong-text">Now at</strong>
            </p>
          </div>
          <div className="discount-mobile">
            <p>
              {' '}
              <span className="cancel-offer">&#8377;5,999</span> &#8377;99970%
              OFF
            </p>
          </div>
        </div>
      </div>
      <div className="form-section-lab-tests">
        <div className="lab-tests-heading">
          <h1>
            <span className="heading-high-light">Best in class</span> lab tests
          </h1>
          <img
            src="https://res.cloudinary.com/shafi-tech/image/upload/v1695130438/Vector_1_gfrb5o.png"
            alt="underline"
          />
        </div>
        <div className="lab-tests-view">
          <div className="lab-card first-card">
            <img
              src="https://res.cloudinary.com/shafi-tech/image/upload/v1695131929/Ellipse_1_ewt5pd.png"
              alt="collection"
            />
            <p>Timely sample collection</p>
          </div>
          <div className="lab-card center-card">
            <img
              src="https://res.cloudinary.com/shafi-tech/image/upload/v1695132024/Ellipse_2_uie45b.png"
              alt="report"
            />
            <p>Complementary report consultation</p>
          </div>
          <div className="lab-card last-card">
            <img
              src="https://res.cloudinary.com/shafi-tech/image/upload/v1695132062/Ellipse_3_uhx8fu.png"
              alt="report accurate"
            />
            <p>Accurate timely reports</p>
          </div>
        </div>
      </div>
    </div>
    <div className="accreditation-container">
      <div className="accreditation-card">
        <img
          src="https://res.cloudinary.com/shafi-tech/image/upload/v1695136200/nabl_img_oj0jqd.png"
          alt="nabl img"
        />
        <p>NABL Accredited Labs</p>
      </div>
      <div className="accreditation-card">
        <img
          src="https://res.cloudinary.com/shafi-tech/image/upload/v1695136293/collectionImg_jwpucb.png"
          alt="sample collection img"
        />
        <p>Free sample collection</p>
      </div>
    </div>
  </div>
)

export default FormSection
