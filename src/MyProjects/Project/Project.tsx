import React from 'react';
import style from "../../MyProjects/Project/Project.module.css";

export type ProjectPropsType = {
    title: string
    img: string
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.projectCore}>
            <div className={style.iconContainer}>
                <img src={props.img} className={style.icon}/>
            </div>
            <button className={style.button}>Смотреть</button>
            <div className={style.projectInfo}>
            <span className={style.description}>
                <h4 className={style.projectTitle}>{props.title}</h4>
                {props.description}
            </span>
            </div>
        </div>
    );
};


export default Project;
