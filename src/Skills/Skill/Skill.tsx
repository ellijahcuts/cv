import React from 'react';
import style from './Skill.module.scss';


export type SkillPropsType = {
    title: string
    img: any
    description: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skillCore}>
            <div className={style.diamond}>{props.img}</div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <span>
                {props.description}
            </span>
        </div>
    );
};

export default Skill;
