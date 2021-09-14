import React from 'react';
import './footer.css'
import logoSocilalVk from '../../img/vk-social-network-logo.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer__block">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="footer__title">Иванов Иван</div>
            <div className="footer__copy">(с) 2021. Все права защищены.</div>
          </div>
          <div className="social">
            <div className="ibg">
              <img src={logoSocilalVk} alt="vk"/>
            </div>
            <div className="ibg">
              <img src={logoSocilalVk} alt="vk"/>
            </div>
            <div className="ibg">
              <img src={logoSocilalVk} alt="vk"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}