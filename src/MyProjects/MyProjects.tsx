import React from 'react';
import style from './MyProjects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Project from "./Project/Project";
import scImg from '../common/images/sc.png'
import todoImg from '../common/images/todo.png'
import counterImg from '../common/images/counter.png'
import Title from '../common/components/title/Title';
import {Fade} from "react-awesome-reveal";

const MyProjects = () => {

    const social = {
        backgroundImage: `url(${scImg})`
    }
    const todo = {
        backgroundImage: `url(${todoImg})`
    }
    const counter = {
        backgroundImage: `url(${counterImg})`
    }

        return (
        <div className={style.projectsCore}>
            <Fade cascade>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"My projects"}/>
                <div className={style.projects}>
                    <Project title={"Social Network"}
                             style={social}
                             description={"онлайн-платформа, которая используется для общения, знакомств, создания социальных отношений между людьми, которые имеют схожие интересы или офлайн-связи, а также для развлечения (музыка, фильмы) и работы."}
                    />
                    <Project title={"ToDoList"}
                             style={todo}
                             description={"Это простой список задач. Нужен он для того чтобы контролировать и не забывать дела, которые нужно сделать за день."}/>
                    <Project title={"Click Counter"}
                             style={counter}
                             description={"Простой счетчик кликов с настройками параметров, задание для IT-incubator'a"}/>
                </div>
            </div>
        </Fade>
        </div>
    );
};

export default MyProjects;
