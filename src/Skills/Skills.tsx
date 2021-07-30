import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./Skill/Skill";
import jsLogo from '../common/images/js-logo.png'
import cssLogo from '../common/images/css-logo.png'
import reactLogo from '../common/images/react-logo.png'


const Skills = () => {
    return (
        <div className={style.skillBlock}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                <Skill title={"JS"}
                       img={jsLogo}
                       description={"JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript "}
                />
                <Skill title={"CSS"}
                       img={cssLogo}
                       description={"CSS (Cascading Style Sheets «каскадные таблицы стилей») — формальный язык описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML)."}
                />
                <Skill title={"REACT"}
                       img={reactLogo}
                       description={"React (иногда React.js или ReactJS) — JavaScript-библиотека[4] с открытым исходным кодом для разработки пользовательских интерфейсов."}
                />
                </div>
            </div>
        </div>
    );
};

export default Skills;
