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
                                   style={{color: "#FFC93C"}}
                                   className={style.icon}
                               />}
                               description={"HTML — стам HTTP/HTTPS или бражаться на экране монитора."}
                        />
                        <Skill title={"JS"}
                               img={<SiJavascript
                                   style={{color: "#FFC93C"}}
                                   className={style.icon}
                               />}
                               description={"JavaScript — мулцификации ECMAScript "}
                        />
                        <Skill title={"TS"}
                               img={<SiTypescript
                                   style={{color: "#FFC93C"}}
                                   className={style.icon}
                               />}
                               description={"TypeScript —возможности JavaScript."}
                        />
                        <Skill title={"CSS"}
                               img={<SiCss3
                                   style={{color: "#FFC93C"}}
                                   className={style.icon}
                               />}
                               description={"CSS — нтам, например, к SVG или XUL."}
                        />
                        <Skill title={"REACT"}
                               img={<SiReact
                                   style={{color: "#FFC93C"}}
                                   className={style.icon}
                               />}
                               description={"React —cebook, Instagильных приложений."}
                        />
                        <Skill title={"REDUX"}
                               img={<SiRedux
                                   style={{color: "#FFC93C"}}
                                   className={style.icon}
                               />}
                               description={"Redища через контекст."}
                        />
                        <Skill title={"NodeJS"}
                               img={<SiNodeDotJs
                                   style={{color: "#FFC93C"}}
                                   className={style.icon}
                               />}
                               description={"Node и."}
                        />
                        <Skill title={"GIT"}
                               img={<SiGit
                                   style={{color: "#FFC93C"}}
                                   className={style.icon}
                               />}
                               description={"Git —."}
                        />
                        <Skill title={"STORYBOOK"}
                               img={<SiStorybook
                                   style={{color: "#FFC93C"}}
                                   className={style.icon}
                               />}
                               description={"Storельс"}
                        />
                        <Skill title={"MATERIAL UI"}
                               img={<SiMaterialUi
                                   style={{color: "#FFC93C"}}
                                   className={style.icon}
                               />}
                               description={"Mater"}
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Skills;
