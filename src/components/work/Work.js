import React from 'react'
import './work.css'

export default function Work() {
  return (
    <div className="work">
      <div className="work__block">
        <h2 className="work__title title">Как я работаю</h2>
        <p className="work__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
      </div>
      <iframe width="1110" height="600" src="https://www.youtube.com/embed/xXBTwb7cc88" title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
    </div>
  )
}