import {Component} from 'react'
import {IoMdClose, IoIosArrowForward} from 'react-icons/io'
import './index.css'

class WhyChooseUsSection extends Component {
  state = {card: 'nabl0'}

  changeNumber = a => {
    this.setState({card: a})
  }

  render() {
    const {num, card} = this.state
    return (
      <div className="why-choose-us-bg-container">
        <div className="why-choose-us-heading">
          <h1>
            Why <span className="heading-high-light">choose</span> us?
          </h1>
          <img
            src="https://res.cloudinary.com/shafi-tech/image/upload/v1695130438/Vector_1_gfrb5o.png"
            alt="underline img"
          />
        </div>
        <p className="caption">
          We want you and your heart to be healthy so you can live in happy
          life!
        </p>
        <ul className="reason-cards-lists">
          <li className="reason-card">
            <h1>NABL Acrredited Labs</h1>
            <p>
              Get accurate and safe results from NABL-certified lab partners.
            </p>
            <img
              src="https://res.cloudinary.com/shafi-tech/image/upload/v1695136200/nabl_img_oj0jqd.png"
              alt="nabl reason"
            />
          </li>
          <li className="reason-card second-card">
            <h1>Value experience</h1>
            <p>
              Experience seamless care without the hassle of waiting in long
              lines for an appointment. Book with us for a healthier lifestyle.
            </p>
            <img
              src="https://res.cloudinary.com/shafi-tech/image/upload/v1695183280/Ellipse_14_tcjna2.png"
              alt="experience reason"
            />
          </li>
          <li className="reason-card">
            <h1>Timely collections</h1>
            <p>
              We collect samples timely to prevent treatment delays and ensure
              your continued well-being.{' '}
            </p>
            <img
              src="https://res.cloudinary.com/shafi-tech/image/upload/v1695183499/Ellipse_13_kuaqou.png"
              alt="timely collection reason"
            />
          </li>
          <li className="reason-card second-card">
            <h1>Transparency</h1>
            <p>
              Enjoy hassle free medical assistance with our transparent
              approach. We prioritize transparency for your smooth
              medical journey.
            </p>
            <img
              src="https://res.cloudinary.com/shafi-tech/image/upload/v1695183612/Ellipse_15_fd5b94.png"
              alt="transparency reason"
            />
          </li>
        </ul>
        <ul className="reason-mobile-view-cards-list">
          <li className="reason-card-mobile">
            <div className="closed-card">
              <img
                src="https://res.cloudinary.com/shafi-tech/image/upload/v1695136200/nabl_img_oj0jqd.png"
                alt="nabl reason"
              />
              <p>NABL Acrredited Labs</p>
              {card === 'nabl1' ? (
                <button
                  type="button"
                  className="button-icon"
                  onClick={() => this.changeNumber('nabl0')}
                >
                  <IoMdClose size={30} color="#2f2f2f" className="arrow-icon" />
                </button>
              ) : (
                <button
                  type="button"
                  className="button-icon"
                  onClick={() => this.changeNumber('nabl1')}
                >
                  <IoIosArrowForward
                    size={30}
                    color="#2f2f2f"
                    className="close-icon"
                  />
                </button>
              )}
            </div>
            {card === 'nabl1' && (
              <div className="hide-content">
                <p>
                  Get accurate and safe results from NABL-certified lab
                  partners.
                </p>
              </div>
            )}
          </li>
          <li className="reason-card-mobile">
            <div className="closed-card">
              <img
                src="https://res.cloudinary.com/shafi-tech/image/upload/v1695183499/Ellipse_13_kuaqou.png"
                alt="timely reason"
              />
              <p>Timely collections</p>
              {card === 'timely1' ? (
                <button
                  type="button"
                  className="button-icon"
                  onClick={() => this.changeNumber('timely0')}
                >
                  <IoMdClose size={30} color="#2f2f2f" className="arrow-icon" />
                </button>
              ) : (
                <button
                  type="button"
                  className="button-icon"
                  onClick={() => this.changeNumber('timely1')}
                >
                  <IoIosArrowForward
                    size={30}
                    color="#2f2f2f"
                    className="close-icon"
                  />
                </button>
              )}
            </div>
            {card === 'timely1' && (
              <div className="hide-content">
                <p>
                  We collect samples timely to prevent treatment delays and
                  ensure your continued well-being.
                </p>
              </div>
            )}
          </li>
          <li className="reason-card-mobile">
            <div className="closed-card">
              <img
                src="https://res.cloudinary.com/shafi-tech/image/upload/v1695183280/Ellipse_14_tcjna2.png"
                alt="experience reason"
              />
              <p>Value experience</p>
              {card === 'exp1' ? (
                <button
                  type="button"
                  className="button-icon"
                  onClick={() => this.changeNumber('exp0')}
                >
                  <IoMdClose size={30} color="#2f2f2f" className="arrow-icon" />
                </button>
              ) : (
                <button
                  type="button"
                  className="button-icon"
                  onClick={() => this.changeNumber('exp1')}
                >
                  <IoIosArrowForward
                    size={30}
                    color="#2f2f2f"
                    className="close-icon"
                  />
                </button>
              )}
            </div>
            {card === 'exp1' && (
              <div className="hide-content">
                <p>
                  Experience seamless care without the hassle of waiting in long
                  lines for an appointment. Book with us for a
                  healthier lifestyle.
                </p>
              </div>
            )}
          </li>
          <li className="reason-card-mobile">
            <div className="closed-card">
              <img
                src="https://res.cloudinary.com/shafi-tech/image/upload/v1695183612/Ellipse_15_fd5b94.png"
                alt="value reason"
              />
              <p>Transparency</p>
              {card === 'tra1' ? (
                <button
                  type="button"
                  className="button-icon"
                  onClick={() => this.changeNumber('tra0')}
                >
                  <IoMdClose size={30} color="#2f2f2f" className="arrow-icon" />
                </button>
              ) : (
                <button
                  type="button"
                  className="button-icon"
                  onClick={() => this.changeNumber('tra1')}
                >
                  <IoIosArrowForward
                    size={30}
                    color="#2f2f2f"
                    className="close-icon"
                  />
                </button>
              )}
            </div>
            {card === 'tra1' && (
              <div className="hide-content">
                <p>
                  Enjoy hassle free medical assistance with our transparent
                  approach. We prioritize transparency for your smooth
                  medical journey.
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>
    )
  }
}
export default WhyChooseUsSection
