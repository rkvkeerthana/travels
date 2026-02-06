import ReviewCard from "./ReviewCard";

const reviews: Array<{
  type: "text" | "video";
  avatar?: string;
  title?: string;
  text?: string;
  image?: string;
  name: string;
  role: string;
  date: string;
}> = [
  {
    type: "text",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    title: "A Truly Amazing Journey!",
    text: "Everything was perfectly organized. From booking to travel, it was a smooth and unforgettable experience.",
    name: "Alex Morgan",
    role: "Travel Photographer",
    date: "Jan 12, 2025",
  },
  {
    type: "video",
    image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
    name: "Lisa Chen",
    role: "Content Creator",
    date: "April 21, 2025",
  },
  {
    type: "text",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    title: "A Seamless Family Vacation!",
    text: "From hotels to sightseeing, everything exceeded our expectations. Highly recommended!",
    name: "Mark & Sarah Johnson",
    role: "Travelers",
    date: "May 18, 2025",
  },
];

const ReviewsGrid: React.FC = () => {
  return (
    <div className="reviews-grid">
      {reviews.map((item, index) => (
        <ReviewCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ReviewsGrid;
