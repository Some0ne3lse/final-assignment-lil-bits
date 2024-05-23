"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-day-after-dish-katsudon-219e470.jpg?quality=90&webp=true&resize=440,400",
  "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-48574_11-bafd62c.jpg?quality=90&webp=true&resize=440,400",
  "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-12141_11-fd804a3.jpg?quality=90&webp=true&resize=440,400",
];

// TODO Change type

const shuffle = (array: string[]) => [...array].sort(() => Math.random() - 0.5);

export default function TheCarousel() {
  const [list, setList] = useState(images);
  useEffect(() => {
    const mountArray = shuffle(images);
    setList(mountArray);
  }, []);

  return (
    <div className="carouselBox">
      <Carousel
        useKeyboardArrows={true}
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        {list.map((data, index) => (
          <div key={index}>
            <img alt="Image of one of our dishes" src={data} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
