import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsCore}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                    <form className={style.contactsBlock}>
                    <input className={style.input}  placeholder={"Email"} />
                    <input className={style.input} placeholder={"Heading"}/>
                    <textarea className={style.textArea} placeholder={"Text"}/>
                    </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;