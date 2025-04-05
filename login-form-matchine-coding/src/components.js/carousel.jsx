import { useEffect, useState } from "react";
import useMounted from "../hooks/useMounted";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    caption: "Image 1",
  },
  {
    id: 2,
    url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    caption: "Image 2",
  },
  {
    id: 3,
    url: "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc",
    caption: "Image 3",
  },
];

const Carousel = () => {
  const isMounted = useMounted();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    console.log("rendering");
    if (!isMounted) {
      setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }
  }, []);
  return (
    <div>
      <h1>Carousel</h1>
      <p>{images[currentImageIndex].caption}</p>
      <img
        src={images[currentImageIndex].url}
        alt={images[currentImageIndex].caption}
        width={300}
      />
    </div>
  );
};

export default Carousel;
