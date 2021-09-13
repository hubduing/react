import React from 'react';
import './skills.css'

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills__box">
        <h2 className="skills__title title">Мои навыки</h2>
        <div className="skills__items">
          <p className="skills__text">HTML</p>
          <progress class="progress" max="100" value="100"></progress>
        </div>
        <div className="skills__items">
          <p className="skills__text">CSS</p>
          <progress class="progress" max="100" value="75"></progress>
        </div>
        <div className="skills__items">
          <p className="skills__text">JS</p>
          <progress class="progress" max="100" value="75"></progress>
        </div>
      </div>
      <img src="./skills.png" alt="skills"/>

    </div>
  )
}