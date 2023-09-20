import './index.css'

const Expanding = () => (
  <div className="expanding-view-container">
    <div className="expanding-view-heading">
      <h1>
        We keep <span className="heading-high-light-expanding">expanding</span>{' '}
        !
      </h1>
      <img
        src="https://res.cloudinary.com/shafi-tech/image/upload/v1695130438/Vector_1_gfrb5o.png"
        alt="underline design"
      />
    </div>
    <ul className="expanding-details-card-list">
      <li className="li-item">
        <p className="bold-number">5+</p>
        <p>Labs</p>
      </li>
      <li className="li-item">
        <p className="bold-number">100+</p>
        <p>Collection center</p>
      </li>
      <li className="li-item">
        <p className="bold-number">1000+</p>
        <p>Monthly tests</p>
      </li>
      <li className="li-item">
        <p className="bold-number">2200</p>
        <p>Test menu</p>
      </li>
      <li className="li-item">
        <p className="bold-number">5+</p>
        <p>Cities present in</p>
      </li>
    </ul>
  </div>
)

export default Expanding
