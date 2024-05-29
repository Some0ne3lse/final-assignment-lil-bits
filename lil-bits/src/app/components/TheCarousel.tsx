"use client";
import Image, { StaticImageData } from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import UseEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import image1 from "../../../public/carousel/first-carousel-image.webp";
import image2 from "../../../public/carousel/second-carousel-image.webp";
import image3 from "../../../public/carousel/third-carousel-image.webp";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const carouselImages = [image1, image2, image3];

// const images = [
//   "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-day-after-dish-katsudon-219e470.jpg?quality=90&webp=true&resize=440,400",
//   "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-48574_11-bafd62c.jpg?quality=90&webp=true&resize=440,400",
//   "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-12141_11-fd804a3.jpg?quality=90&webp=true&resize=440,400",
// ];

// TODO Change type

const shuffle = (array: StaticImageData[]) =>
  [...array].sort(() => Math.random() - 0.5);

export default function TheCarousel() {
  const [emblaRef, emblaApi] = UseEmblaCarousel({ loop: true }, [Autoplay()]);

  const [imageList, setImageList] = useState(carouselImages);
  useEffect(() => {
    const mountArray = shuffle(carouselImages);
    setImageList(mountArray);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <button
        aria-label="go to previous slide"
        onClick={scrollPrev}
        className="carousel-button-left"
      >
        <ChevronLeftIcon className="chevron-buttons" />
      </button>
      <button
        aria-label="go to previous slide"
        onClick={scrollNext}
        className="carousel-button-right"
      >
        <ChevronRightIcon className="chevron-buttons" />
      </button>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {imageList.map((data, index) => (
            <div className="embla__slide" key={index}>
              <Image
                className="carousel-images"
                src={data}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
                alt="Image of one of our dishes"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
