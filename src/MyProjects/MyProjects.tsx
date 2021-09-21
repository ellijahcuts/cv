import React from 'react';
import style from './MyProjects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./Project/Project";
import scImg from '../common/images/sc.png'
import todoImg from '../common/images/todo.png'
import counterImg from '../common/images/counter.png'


const MyProjects = () => {
    return (
        <div className={style.projectsCore}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <h2>My Projects</h2>
                </div>
                <div className={style.projects}>
                    <Project title={"Social Network"}
                             img={scImg}
                             description={"онлайн-платформа, которая используется для общения, знакомств, создания социальных отношений между людьми, которые имеют схожие интересы или офлайн-связи, а также для развлечения (музыка, фильмы) и работы."}
                    />
                    <Project title={"ToDoList"}
                             img={todoImg}
                             description={"Это простой список задач. Нужен он для того чтобы контролировать и не забывать дела, которые нужно сделать за день."}/>
                    <Project title={"Click Counter"}
                             img={counterImg}
                             description={"Простой счетчик кликов с настройками параметров, задание для IT-incubator'a"}/>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
