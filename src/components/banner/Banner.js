import React from 'react'
import './banner.css'

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__img _ibg">
        <img src="./banner.png" alt="banner"/>
      </div>
      <div className="banner__items">
        <h1 className="banner__title">Дизайн и верстка</h1>
        <p className="banner__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
        <button className="banner__btn"><span className="banner__btn-text">Написать мне</span></button>
      </div>
    </div>
  )
}