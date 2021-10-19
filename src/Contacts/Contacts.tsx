import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";


const Contacts = () => {
    return (
        <div className={style.contactsCore}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactsBlock}>
                    <input className={style.input} placeholder={"Email"}/>
                    <input className={style.input} placeholder={"Heading"}/>
                    <textarea className={style.textArea} placeholder={"Type comment"}/>
                    <button className={style.button}>Send</button>
                </form>

            </div>
        </div>
    );
};

export default Contacts;
