import React from 'react';
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import linkedLogo from '../common/images/linked-logo.png'
import telegramLogo from '../common/images/tg-logo.png'
import instLogo from '../common/images/inst-logo.png'
import gitLogo from '../common/images/git-logo.png'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Ilya Kazak</h2>
                <div className={style.contacts}>
                    <img className={style.image} src={linkedLogo}/>
                    <img className={style.image} src={telegramLogo}/>
                    <img className={style.image} src={instLogo}/>
                    <img className={style.image} src={gitLogo}/>

                </div>
                <span className={style.lastMessage}>All rights reserved</span>
            </div>

        </div>
    );
};

export default Footer;
