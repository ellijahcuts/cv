import React from 'react';
import style from './Skill.module.scss';


export type SkillPropsType = {
    title: string
    img: any
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skillCore}>
            <div className={style.diamond}>{props.img}</div>
            <div className={style.skillTitleBox}>
            <h3 className={style.skillTitle}>{props.title}</h3>
            </div>
        </div>
    );
};

export default Skill;
