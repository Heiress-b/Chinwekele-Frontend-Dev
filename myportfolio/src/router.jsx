import React from "react";
import Myportfolio from "./heiress";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function Myrouter () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element ={<Myportfolio/>}></Route>
                    <Route path='/projects' element ={<Projects/>}></Route>
                    <Route path='/about' element ={<About/>}></Route>
                    <Route path='/contact' element ={<Contact/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}