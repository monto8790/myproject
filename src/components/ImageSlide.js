import React from "react";

import ImageGallery from "react-image-gallery";
import one from "../images/img1.jpg";
const images = [
  {
    original: require("../images/img2.jpg"),
    thumbnail: require("../images/img2.jpg"),
    fullscreen: require("../images/img2.jpg"),
  },
  {
    original: require("../images/img3.jpg"),
    thumbnail: require("../images/img3.jpg"),
    fullscreen: require("../images/img3.jpg"),
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
