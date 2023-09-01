import './style.css';
import {createHeader,createHome,addSidePictures, removeHomePage} from './home-page'
import { createMenu } from './menu-page';
createHeader();
createHome();
addSidePictures();


const menuBtn=document.querySelector(".menu-btn");
menuBtn.addEventListener("click",()=>{
    removeHomePage();
    createMenu();
})

const homeBtn=document.querySelector(".home-btn");
menuBtn.addEventListener("click",()=>{
    removeHomePage();
    createHome();
})
