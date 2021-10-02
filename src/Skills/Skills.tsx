import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./Skill/Skill";
import jsLogo from '../common/images/js-logo.png'
import cssLogo from '../common/images/css-logo.png'
import reactLogo from '../common/images/react-logo.png'
import githubLogo from '../common/images/github-logo.png'
import tsLogo from '../common/images/ts-logo.png'
import reduxLogo from '../common/images/redux-logo.png'
import storyLogo from '../common/images/story-logo.png'
import htmlLogo from '../common/images/html-logo.png'
import nodeLogo from '../common/images/node-logo.png'
import materialLogo from '../common/images/material-logo.png'
import Title from "../common/components/title/Title";


const Skills = () => {
    return (
        <div className={style.skillBlock}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"HTML"}
                           img={htmlLogo}
                           description={"HTML — стандартизированный язык разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора."}
                    />
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
                    <Skill title={"NodeJS"}
                           img={nodeLogo}
                           description={"Node или Node.js — программная платформа, основанная на движке V8, превращающая JavaScript из узкоспециализированного языка в язык общего назначения."}
                    />
                    <Skill title={"GIT"}
                           img={githubLogo}
                           description={"Git — распределённая система управления версиями."}
                    />
                    <Skill title={"STORYBOOK"}
                           img={storyLogo}
                           description={"Storybook - это инструмент с открытым исходным кодом для изолированного создания компонентов пользовательского интерфейса и страниц. Он упрощает разработку пользовательского интерфейса, тестирование и документацию."}
                    />
                    <Skill title={"MATERIAL UI"}
                           img={materialLogo}
                           description={"Material-UI - это простая и настраиваемая библиотека компонентов."}
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;
