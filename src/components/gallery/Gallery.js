import React from 'react';
import './gallery.css'
import view from '../../img/view.png'
import gallery1 from '../../img/gallery1.png'
import gallery2 from '../../img/gallery2.png'

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__box">
        <img src={gallery1} alt="gallery"/>
      </div>
      <div className="gallery__box">
        <img src={gallery2} alt="gallery"/>
      </div>
      <div className="gallery__box">
        <img src={gallery1} alt="gallery"/>
      </div>
      <div className="gallery__box">
        <img src={gallery2} alt="gallery"/>
      </div>

      <div className="gallery__box">
        <img src={gallery2} alt="gallery"/>
      </div>
      <div className="gallery__box">
        <img src={gallery1} alt="gallery"/>
      </div>
      <div className="gallery__box">
        <img src={gallery2} alt="gallery"/>
      </div>
      <div className="gallery__box">
        <img src={gallery1} alt="gallery"/>
      </div>
    </div>
  )
}
