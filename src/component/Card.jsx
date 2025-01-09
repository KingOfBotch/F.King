import PropTypes from "prop-types";
import "./Style/card.css";
import rate from "../assets/rate.png";


const Card = ({ foto, avatar }) => {
  return (
    <div className="Card">
      <div>
      <img src={foto} alt="Card Image" />
      </div>
      <div>
        <h6>Big 4 Auditor Financial Analyst</h6>
        <p>
          Mulai transformasi dengan instruktur profesional, harga yang
          terjangkau, dan kurikulum terbaik
        </p>
      </div>
      <div>
      <img src={avatar} alt="Avatar" />
        <div>
          <p>Jenna Ortega</p>
          <p>Senior Accountant</p>
        </div>
      </div>
      <img src={rate} />
    </div>
  );
};

Card.propTypes = {
  foto: PropTypes.string.isRequired, // Pastikan 'foto' bertipe string dan wajib
  avatar: PropTypes.string.isRequired, // Pastikan 'avatar' bertipe string dan wajib
};

export default Card;