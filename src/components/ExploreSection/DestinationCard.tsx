import { FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  image: string;
  title: string;
  location: string;
  price: string;
}

const DestinationCard: React.FC<Props> = ({
  image,
  title,
  location,
  price,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <div className="card-body">
        <h4>{title}</h4>

        <div className="meta">
          <span>
            <FaMapMarkerAlt /> {location}
          </span>
        </div>

        <div className="price">
          <strong>{price}</strong>
          <span>/person</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
