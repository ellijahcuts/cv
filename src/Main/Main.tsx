import React from 'react';
import style from './Main.module.css';
import styleContainer from'./../common/styles/Container.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Ilya Kazak</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>
                    <img className={style.photo} src={"https://sun9-21.userapi.com/impf/zmgodWDSfAxYWyxk64q3tRbM_SwtdfvjrsMBTQ/dKWBz2E2Z2I.jpg?size=1080x1350&quality=96&sign=04536c369b3d382b5b37e68f6f0ffdd9&type=album"}/>
                </div>
            </div>
        </div>
    );
};

export default Main;
