import React from 'react';
import './form.css'

export default function Form() {
  return (
    <div className="form__wrapper">
      <div className="form__box">
        <h2 className="form__title">Хотите веб-сайт</h2>
        <div className="form__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</div>
      </div>
      <form action="" method="post" className="form">
        <div className="form__box">
          <div className="form__input-block">
            <input className="form__input" type="text" placeholder="Ваше имя" name="name"/>
            <input className="form__input" type="email" placeholder="Ваш e-mail" name="email"/>
          </div>
          <textarea
            name="message" id="message" cols="30" rows="10"
            placeholder="Сообщение" className="form__area"></textarea>
        </div>
        <button type="submit" className="form__btn">Отправить</button>
      </form>
    </div>
  )
}