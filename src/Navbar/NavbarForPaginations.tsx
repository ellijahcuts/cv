import React from 'react';
import style from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import Title from "../common/components/title/Title";

const NavbarFP = () => {
    return (
        <nav >
            <div className={style.fpCore}>
                <NavLink to="/skills" className={style.noActiveLink} activeClassName={style.activeLink}>Skills</NavLink>
                <NavLink to="/projects" activeClassName={style.activeLink}>My Projects</NavLink>
            </div>
        </nav>
    );
};
export default NavbarFP;
