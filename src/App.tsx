import { ImageSlider } from "./ImageSlider";
import landscape1 from "./img/landscape-1.jpg";
import landscape2 from "./img/landscape-2.jpg";
import landscape3 from "./img/landscape-3.jpg";
import landscape4 from "./img/landscape-4.jpg";
import landscape5 from "./img/landscape-5.jpg";
import landscape6 from "./img/landscape-6.jpg";
import style from "./App.module.css";

const IMAGES = [
  landscape1,
  landscape2,
  landscape3,
  landscape4,
  landscape5,
  landscape6,
];

function App() {
  return (
    <div className={style.imageContainer}>
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}

export default App;
