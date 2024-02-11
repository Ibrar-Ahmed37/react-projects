import React, { useState } from "react";

const Modal = ({ handleModal, imageUrl }) => {
  console.log("modal clicked");
  return (
    <div className="modal-overlay" onClick={handleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="cross-symbol" onClick={handleModal}>X</span>
        <img src={imageUrl} className="modal-image" />
      </div>
    </div>
  );
};

export const ImageCard = ({ imageData }) => {
  const imageTags = imageData.tags.split(",");
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal); 
  };

  return (
    <>
      {showModal && (
        <Modal handleModal={handleModal} imageUrl={imageData.largeImageURL} />
      )}
      <div
        className="card-image "
        style={{ backgroundImage: `url(${imageData.largeImageURL})` }}
      >
        <div className="image-overlay">
          {/* <img className="card-image" src={imageData.largeImageURL}/> */}
          <div>
            {imageTags.map((imageTag, index) => (
              <span className="image-tags" key={index}>
                #{imageTag.toLowerCase()} &nbsp;
              </span>
            ))}
          </div>
          <span className="image-user">Image By {imageData.user}</span>
        </div>
        <div
          role="img"
          onClick={handleModal}
          aria-label="Magnifier"
          className="image-magnifier"
        >
          🔍
        </div>
      </div>
    </>
  );
};
