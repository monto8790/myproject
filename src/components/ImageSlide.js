import React from "react";

import ImageGallery from "react-image-gallery";
// import one from "../images/img1.jpg";
import one from "../images/img1.jpg";
let default_url = `${process.env.PUBLIC_URL}`;
const images = [
  {
    original: default_url + "/public_images/img2.jpg",
    thumbnail: default_url + "/public_images/img2.jpg",
    fullscreen: default_url + "/public_images/img2.jpg",
  },
  {
    original: default_url + "/public_images/img3.jpg",
    thumbnail: default_url + "/public_images/img3.jpg",
    fullscreen: default_url + "/public_images/img3.jpg",
  },
  {
    original: one,
    thumbnail: one,
    fullscreen: one,
  },
];
console.log(images);
const ImageSlide = () => {
  // <header></header>;
  return (
    <>
      <ImageGallery items={images} />;
    </>
  );
};

export default ImageSlide;
