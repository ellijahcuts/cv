import React from 'react';
import style from "../../MyProjects/Project/Project.module.css";

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
            <span className={style.description}>
                <h4 className={style.projectTitle}>{props.title}</h4>
                {props.description}
            </span>
        </div>
    );
};


export default Project;
