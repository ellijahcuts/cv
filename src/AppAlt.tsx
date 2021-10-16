import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyProjects from "./MyProjects/MyProjects";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import NavbarFP from "./Navbar/NavbarForPaginations";


function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <Main/>
            <NavbarFP/>
            <Route path='/skills' render={() =>
                <Skills/>}/>
            <Route path='/projects' render={() =>
                <MyProjects/>}/>
            <Route path='/contacts' render={() =>
                <Contacts/>}/>
            {/*<Footer/>*/}
        </div>
        </BrowserRouter>
    );
}

export default App;
