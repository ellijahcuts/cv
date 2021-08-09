import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./Skill/Skill";
import jsLogo from '../common/images/js-logo.png'
import cssLogo from '../common/images/css-logo.png'
import reactLogo from '../common/images/react-logo.png'
import githubLogo from '../common/images/github-logo.png'
import tsLogo from '../common/images/ts-logo.png'
import reduxLogo from '../common/images/redux-logo.png'


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
                <Skill title={"TS"}
                       img={tsLogo}
                       description={"TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript."}
                />
                <Skill title={"CSS"}
                       img={cssLogo}
                       description={"CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Также может применяться к любым XML-документам, например, к SVG или XUL."}
                />
                    <Skill title={"REACT"}
                       img={reactLogo}
                       description={"React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений."}
                />
                    <Skill title={"REDUX"}
                       img={reduxLogo}
                       description={"Redux — библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст."}
                />
                    <Skill title={"GIT"}
                       img={githubLogo}
                       description={"Git — распределённая система управления версиями."}
                />
                </div>
            </div>
        </div>
    );
};

export default Skills;
