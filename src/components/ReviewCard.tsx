interface Props {
  type: "text" | "video";
  avatar?: string;
  image?: string;
  title?: string;
  text?: string;
  name: string;
  role: string;
  date: string;
}

const ReviewCard: React.FC<Props> = ({
  type,
  avatar,
  image,
  title,
  text,
  name,
  role,
  date,
}) => {
  return (
    <div className="review-card">
      {type === "video" ? (
        <div className="video-box">
          <img src={image} alt="video review" />
          <span className="play">▶</span>
        </div>
      ) : (
        <>
          <img className="avatar" src={avatar} alt={name} />
          <h4>{title}</h4>
          <p>{text}</p>
        </>
      )}

      <div className="author">
        <strong>{name}</strong>
        <span>{role}</span>
        <small>{date}</small>
      </div>
    </div>
  );
};

export default ReviewCard;
