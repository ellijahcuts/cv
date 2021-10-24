import React from 'react';
import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css';
import myPhoto from '../common/images/my-photo.png'
import Particles from "react-particles-js";


const particlesOptions = {
    particles: {
        number:{
          value: 170
        },
        move: {
            speed: 0.40
        },
        size: {
            random: true,
            value: 2,
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
                <div className={style.text}>
                    <span>Hey</span>
                    <h1>I am Ilya Kazak</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photoContainer}>
                    <img className={style.photo} src={myPhoto}/>
                </div>
            </div>
        </div>
    );
};

export default MainAlt;
