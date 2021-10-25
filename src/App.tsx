import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import MyProjects from "./MyProjects/MyProjects";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import MainAlt from "./Main/MainAlt";

function App() {
    return (
        <div className="App">
            {/*<Header/>*/}
            <MainAlt/>
            <Skills/>
            <MyProjects/>
            <Contacts/>
            <Footer/>

        </div>
    );
}
export default App;
