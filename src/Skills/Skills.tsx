import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./Skill/Skill";
import Title from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal"
import {SiHtml5} from "@react-icons/all-files/si/SiHtml5";
import {SiJavascript} from "@react-icons/all-files/si/SiJavascript";
import {SiTypescript} from "@react-icons/all-files/si/SiTypescript";
import {SiCss3} from "@react-icons/all-files/si/SiCss3";
import {SiReact} from "@react-icons/all-files/si/SiReact";
import {SiRedux} from "@react-icons/all-files/si/SiRedux";
import {SiNodeDotJs} from "@react-icons/all-files/si/SiNodeDotJs";
import {SiGit} from "@react-icons/all-files/si/SiGit";
import {SiStorybook} from "@react-icons/all-files/si/SiStorybook";
import {SiMaterialUi} from "@react-icons/all-files/si/SiMaterialUi";



const Skills = () => {
    return (
        <div className={style.skillBlock}>
            <Fade cascade>
                <div className={`${styleContainer.container} ${style.skillContainer}`}>
                    <Title text={"Skills"}/>
                    <div className={style.skills}>
                        <Skill title={"HTML"}
                               img={<SiHtml5
                                   style={{color: "#e34e0d"}}
                                   className={style.icon}
                               />}
                        />
                        <Skill title={"CSS"}
                               img={<SiCss3
                                   style={{color: "#0463d0"}}
                                   className={style.icon}
                               />}
                        />
                        <Skill title={"JS"}
                               img={<SiJavascript
                                   style={{color: "#FFC93C"}}
                                   className={style.icon}
                                   />}
                        />
                        <Skill title={"TS"}
                               img={<SiTypescript
                                   style={{color: "#3888ff"}}
                                   className={style.icon}
                               />}
                        />
                        <Skill title={"NodeJs"}
                               img={<SiNodeDotJs
                                   style={{color: "#179d08"}}
                                   className={style.icon}
                                   />}
                        />
                        <Skill title={"React"}
                               img={<SiReact
                                   style={{color: "#06e9ff"}}
                                   className={style.icon}
                               />}

                        />
                        <Skill title={"Redux"}
                               img={<SiRedux
                                   style={{color: "#7403ff"}}
                                   className={style.icon}
                               />}
                        />
                        <Skill title={"Git"}
                               img={<SiGit
                                   style={{color: "#ff1f25"}}
                                   className={style.icon}
                               />}
                        />
                        <Skill title={"STORYBOOK"}
                               img={<SiStorybook
                                   style={{color: "#e755ff"}}
                                   className={style.icon}
                               />}
                        />
                        <Skill title={"MATERIAL UI"}
                               img={<SiMaterialUi
                                   style={{color: "#3d6aff"}}
                                   className={style.icon}
                               />}
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Skills;
