import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillBlock}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                <Skill title={"JS"}
                       img={"http://w3.org.ua/wp-content/uploads/2017/01/icon.javascript.png"}
                       description={"WHITE / Охлаждающий спрей для машинок,смазывание ножей, чистка машинок 650 мл CLIPPER BLADE CARE SPRAY 7 in1 "}
                />
                <Skill title={"CSS"}
                       img={"https://itproger.com/img/courses/1476977488.jpg"}
                       description={"WHITE / Охлаждающий спрей для машинок,смазывание ножей, чистка машинок 650 мл CLIPPER BLADE CARE SPRAY 7 in1 "}
                />
                <Skill title={"REACT"}
                       img={"https://ru.reactjs.org/logo-og.png"}
                       description={"WHITE / Охлаждающий спрей для машинок,смазывание ножей, чистка машинок 650 мл CLIPPER BLADE CARE SPRAY 7 in1 "}
                />
                </div>
            </div>
        </div>
    );
};

export default Skills;
