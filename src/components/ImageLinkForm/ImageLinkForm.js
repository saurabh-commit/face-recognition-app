import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onPictureSubmit, imageUrl, id }) => {
  return (
    <div>
      <p className="f3">
        {
          "This Magic Brain will detect faces in your pictures. Give it a try by simply submitting some image URLs."
        }
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 f4 link hover-near-white ph3 pv2 dib"
            onClick={() => onPictureSubmit(imageUrl, id)}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;