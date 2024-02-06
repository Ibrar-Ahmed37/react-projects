import React from "react";

export const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden my-8 shadow-lg">
      <img src={image.largeImageURL} className="h-300 image-tile w-full" alt="" />
      <div className="text-left mt-6 ">
        <div className="image-title bg-gray-400  rounded-lg py-2 px-2 my-3 text-left">
          Photo By {image.user}
        </div>
        <div className="image-views">
          <strong className="image-description mx-2"> Views :</strong>{" "}
          {image.views}
        </div>
        <div className="image-downloads">
          <strong className="image-description mx-2">Downloads : </strong>
          {image.downloads}
        </div>
        <div className="image-likes">
          <strong className="image-description mx-2"> Likes :</strong>{" "}
          {image.likes}
        </div>
        <div className="image-tags">
          {tags.map((tag, index) => (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1"
              key={index}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
