import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import styles from "./ImageSlider.module.css";
type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div className={styles.container}>
      <img
        src={imageUrls[imageIndex]}
        className={styles.imgSlider}
        style={{ left: 0 }}
      />
      <button onClick={showPrevImage} className={styles.imgSlideButton}>
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className={styles.imgSlideButton}
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}
