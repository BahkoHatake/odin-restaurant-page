import './style.css';
import {createHeader,createHome,addSidePictures, removeHomePage} from './home-page'
import { createMenu } from './menu-page';
import { createContact } from './contact-page';
createHeader();
createHome();



const menuBtn=document.querySelector(".menu-btn");
menuBtn.addEventListener("click",()=>{
    removeHomePage();
    createMenu();
})
const homeBtn=document.querySelector(".home-btn");
homeBtn.addEventListener("click",()=>{
    removeHomePage();
    createHome();
})
const contBtn=document.querySelector(".contact-btn");
contBtn.addEventListener("click",()=>{
    removeHomePage();
    createContact();
})