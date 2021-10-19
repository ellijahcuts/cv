import React from 'react';
import style from './Skill.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export type SkillPropsType ={
    title: string
    img: string
    description: string
}

const Skill = (props:SkillPropsType) => {
    return (
        <div className={style.skillCore}>
            <div className={style.icon}>
        <img src={props.img} className={style.icon} />
        </div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <span>
                {props.description}
            </span>
        </div>
    );
};

export default Skill;
