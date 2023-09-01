import { main,addSidePictures } from "./home-page";
import Pic5 from './cezar-proizvod-capricciosa-gcfawf5pvp-min.png';
import Pic6 from './cezar-proizvod-diavolo-t6nwjxejg3-min-p-500.png';
import Pic7 from './cezar-proizvod-margarita-wusw7itnsi-min.png';
import Pic8 from './cezar-proizvod-pepperoni-cut3iwvzln-min-p-500.png'


function createMenu(){
    const menuMain =document.createElement("div");
    menuMain.classList.add("menu-main");

    const h1 = document.createElement("h1");
    h1.innerHTML="MENU";
    menuMain.appendChild(h1);

    const cardContainer=document.createElement("div");
    cardContainer.classList.add("menu-card-container");

    const card1 = document.createElement("div");
    card1.classList.add("menu-card");
    const capr=new Image();
    capr.src=Pic5;
    card1.appendChild(capr)
    const title1 = document.createElement("div");
    title1.classList.add("title");
    title1.innerHTML="CAPRICCIOSA";
    card1.appendChild(title1);
    const info1 = document.createElement("div");
    info1.classList.add("info");
    info1.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttito";
    card1.appendChild(info1);
    cardContainer.appendChild(card1);

    const card2 = document.createElement("div");
    card2.classList.add("menu-card");
    const diav=new Image();
    diav.src=Pic6;
    card2.appendChild(diav);
    const title2 = document.createElement("div");
    title2.classList.add("title");
    title2.innerHTML="DIAVOLO";
    card2.appendChild(title2);
    const info2 = document.createElement("div");
    info2.classList.add("info");
    info2.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttito";
    card2.appendChild(info2);
    cardContainer.appendChild(card2);


    const card3 = document.createElement("div");
    card3.classList.add("menu-card");
    const pepe=new Image();
    pepe.src=Pic8;
    card3.appendChild(pepe);
    const title3 = document.createElement("div");
    title3.classList.add("title");
    title3.innerHTML="PEPPERONI";
    card3.appendChild(title3);
    const info3 = document.createElement("div");
    info3.classList.add("info");
    info3.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttito";
    card3.appendChild(info3);
    cardContainer.appendChild(card3);

    const card4 = document.createElement("div");
    card4.classList.add("menu-card");
    const marg=new Image();
    marg.src=Pic7;
    card4.appendChild(marg);
    const title4 = document.createElement("div");
    title4.classList.add("title");
    title4.innerHTML="MARGARITA";
    card4.appendChild(title4);
    const info4 = document.createElement("div");
    info4.classList.add("info");
    info4.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttito";
    card4.appendChild(info4);
    cardContainer.appendChild(card4);

    menuMain.appendChild(cardContainer)
    
    main.appendChild(menuMain)
    addSidePictures()
};

export {
    createMenu
};