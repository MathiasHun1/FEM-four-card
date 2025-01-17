import './Card.scss';

const Card = ({ fillColor, imgSource, className, children }) => {
  return (
    <div className={`wrapper-card ${className}`}>
      <div className="card">
        <div className="filler" style={{ background: fillColor }}></div>
        <div>{children}</div>
        <img src={imgSource} alt="" />
      </div>

      <div className="hidden"></div>
    </div>
  );
};

export default Card;
