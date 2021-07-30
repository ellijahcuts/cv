import React from 'react';
import style from "../../MyProjects/Project/Project.module.css";

export type ProjectPropsType ={
    title: string
    img: string
    description: string
}

const Project = (props:ProjectPropsType) => {
    return (
        <div className={style.projectCore}>
            <div className={style.icon}>
                <img src={props.img} className={style.icon} />
            </div>
            <button className={style.button}>Смотреть</button>
            <span>
                <h4>{props.title}</h4>
                {props.description}
            </span>
        </div>
    );
};


export default Project;
