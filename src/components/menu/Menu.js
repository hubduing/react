import React from 'react'
import './menu.css'

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__logo">WD</div>
      <ul className="menu__items">
        <li className="menu__item"><a href="#top" className="menu__link">Главная</a></li>
        <li className="menu__item"><a href="#top" className="menu__link">Об авторе</a></li>
        <li className="menu__item"><a href="#top" className="menu__link">Работы</a></li>
        <li className="menu__item"><a href="#top" className="menu__link">Процесс</a></li>
        <li className="menu__item"><a href="#top" className="menu__link">Контакты</a></li>
      </ul>
    </div>
  )
}