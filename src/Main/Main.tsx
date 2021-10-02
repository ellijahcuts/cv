import React from 'react';
import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css';
import myPhoto from '../common/images/my-photo.png'




const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.containerForMain}>
                <div className={style.text}>
                    <span>Hey</span>
                    <h1>I am Ilya Kazak</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photoContainer}>
                    <img className={style.photo} src={myPhoto} alt={'Sorry this bug :)'}/>
                </div>
            </div>
            <div className={style.videoBg}>
            <video className={style.video} preload={"auto"} muted autoPlay loop>
                <source src={"https://cdn.videvo.net/videvo_files/video/free/2012-07/large_watermarked/FreeSmokeYoutube_preview.mp4"} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
        </div>
    );
};

export default Main;
