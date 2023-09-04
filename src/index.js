import './style.css';
import {createHeader,createHome,removeHomePage,createFooter} from './home-page'
import { createMenu } from './menu-page';
import { createContact } from './contact-page';
createHeader();
createHome();
createFooter();


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