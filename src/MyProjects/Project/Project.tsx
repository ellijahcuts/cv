import React from 'react';
import style from "./Project.module.scss";

export type ProjectPropsType = {
    title: string
    style: { backgroundImage: string; }
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.projectCore}>
            <div className={style.projectImg} style={props.style}>
                <button className={style.button}>Смотреть</button>
            </div>
            <div className={style.projectInfo}>
                <h4 className={style.projectTitle}>{props.title}</h4>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};


export default Project;
