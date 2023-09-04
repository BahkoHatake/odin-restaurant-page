import { main,addSidePictures } from "./home-page";
import { createMenu } from "./menu-page";


function createContact(){
    const contMain =document.createElement("div");
    contMain.classList.add("menu-main");

    const h1 = document.createElement("h1");
    h1.innerHTML="CONTACT";
    contMain.appendChild(h1);

    const contContainer=document.createElement("div");
    contContainer.classList.add("cont-container");

    const contact1=document.createElement("div");
    contact1.classList.add("contact")
    const title1 =document.createElement("div");
    title1.classList.add("title");
    title1.innerHTML="CEZAR 1";
    const info1 = document.createElement("div");
    info1.classList.add("info");
    info1.innerHTML="062 875 331"+"<br />" +"Cara Dusana br74, Nis"
    contact1.appendChild(title1);
    contact1.appendChild(info1);
    contContainer.appendChild(contact1);

    const contact2=document.createElement("div");
    contact2.classList.add("contact")
    const title2 =document.createElement("div");
    title2.classList.add("title");
    title2.innerHTML="CEZAR 2";
    const info2 = document.createElement("div");
    info2.classList.add("info");
    info2.innerHTML="063 216 2261"+"<br />" +"Ivana Uzelca br114, Split"
    contact2.appendChild(title2);
    contact2.appendChild(info2);
    contContainer.appendChild(contact2);
    
    const contact3=document.createElement("div");
    contact3.classList.add("contact")
    const title3 =document.createElement("div");
    title3.classList.add("title");
    title3.innerHTML="CEZAR 3";
    const info3 = document.createElement("div");
    info3.classList.add("info");
    info3.innerHTML="018 421 1234"+"<br />"+"060 3511 699"+"<br />"+"Bata Baneta br1, Brzi Brod"
    contact3.appendChild(title3);
    contact3.appendChild(info3);
    contContainer.appendChild(contact3);
    
    contMain.appendChild(contContainer);
    

    main.appendChild(contMain);
    addSidePictures();

};

export {createContact}