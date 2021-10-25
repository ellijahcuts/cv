import React from 'react';
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import myPhoto from '../common/images/my-photo.png'
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';
import {Fade} from "react-awesome-reveal";


const particlesOptions = {
    particles: {
        number: {
            value: 110
        },
        move: {
            speed: 0.40
        },
        size: {
            random: true,
            value: 3,
        },
        shape: {
            type: "triangle",
        }
    }
}


const MainAlt = () => {

    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions}/>
            <div className={styleContainer.container}>
                <Fade cascade>
                    <div className={style.textBlock}>
                        <span>Hello my friend</span>
                        <h1>I am Ilya Kazak</h1>
                        <ReactTypingEffect className={style.readingText} speed={50} eraseSpeed={50}
                                           text={["Frontend Developer " +
                                           "| React, TypeScript"]}/>
                    </div>
                    <div className={style.photoContainer}>
                        <img className={style.photo} src={myPhoto}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default MainAlt;
