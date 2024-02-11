import React, { useEffect } from "react";
import { ImageCard } from "./ImageCard";

export const ImageGallery = (props) => {
  return (
    <ul className='card-section'>
      {props.imagesData.map((imageData, index) => (
        <li key={index}>
          <ImageCard  imageData={imageData} />
        </li>
      ))}
    </ul>
  );
};
