import { motion } from 'framer-motion';
import React from 'react';

const Imagepopup = ({ baseUrl, images, poper, layoutId }) => {
  const singleimage = images[layoutId];

  return (
    <div className="pop_up_container">
      <div className="close_button">
        <p onClick={() => poper(layoutId)}>x</p>
      </div>

      <div className="pop_up_image">
        {singleimage && (
          <motion.img
            src={`${baseUrl}${singleimage.cinema_malody_image}`}
            alt=""
            layoutId={`popup-img-${layoutId}`}
          />
        )}
      </div>

      <div className="pop_tabs">
        {images.map((item, index) => (
          <motion.div
            className="tabs"
            key={index}
            onClick={() => poper(index)}
            layoutId={`popup-tab-${index}`}
          >
            <motion.img
              src={`${baseUrl}${item.cinema_malody_image}`}
              alt="loading...."
              layoutId={`popup-img-${index}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Imagepopup;
