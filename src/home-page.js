const container = document.getElementById("container");
import Icon from './icon.png';
import Icon1 from './IMG_5142-min.png';
import Pic1 from './1.svg';
import Pic2 from './2.svg';
import Pic3 from './Rectangle-1-min.png';
import Pic4 from './Rectangle-2-min.png';


function createHeader(){
    const header = document.createElement("div");
    header.classList.add("header");

    const icon = document.createElement("div");
    icon.classList.add("icon");
    const myIcon = new Image();
    myIcon.src = Icon;
    icon.appendChild(myIcon);
    header.appendChild(icon);

    const nav = document.createElement("div");
    nav.classList.add("nav");
    const home = document.createElement("button");
    home.innerHTML="HOME";
    home.classList.add("home-btn");
    nav.appendChild(home);
    const menu = document.createElement("button");
    menu.innerHTML="MENU";
    menu.classList.add("menu-btn");
    nav.appendChild(menu);
    const contact = document.createElement("button");
    contact.innerHTML="CONTACT";
    contact.classList.add("contact-btn");
    nav.appendChild(contact);
    header.appendChild(nav);

    const placeholder=document.createElement("div");
    placeholder.classList.add("placeholder")
    header.appendChild(placeholder)
    
    container.appendChild(header)
};

const main=document.createElement("div");
main.classList.add("main");

function createHome(){
    
    const mainHome = document.createElement("div");
    mainHome.classList.add("main-home");

    const location = document.createElement("div");
    location.classList.add("location");

    const h1 = document.createElement("h1");
    h1.innerHTML="LOCATION";
    location.appendChild(h1);
    
    const cardContainer=document.createElement("div");
    cardContainer.classList.add("card-container");
    
    const card1 = document.createElement("div");
    card1.classList.add("card");
    const title1 = document.createElement("div");
    title1.classList.add("title");
    title1.innerHTML="CEZAR 1";
    card1.appendChild(title1);
    const info1 = document.createElement("div");
    info1.classList.add("info");
    info1.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttito";
    card1.appendChild(info1);
    cardContainer.appendChild(card1);

    const card2 = document.createElement("div");
    card2.classList.add("card");
    const title2 = document.createElement("div");
    title2.classList.add("title");
    title2.innerHTML="CEZAR 2";
    card2.appendChild(title2);
    const info2 = document.createElement("div");
    info2.classList.add("info");
    info2.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttito";
    card2.appendChild(info2);
    cardContainer.appendChild(card2);


    const card3 = document.createElement("div");
    card3.classList.add("card");
    const title3 = document.createElement("div");
    title3.classList.add("title");
    title3.innerHTML="CEZAR 3";
    card3.appendChild(title3);
    const info3 = document.createElement("div");
    info3.classList.add("info");
    info3.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttito";
    card3.appendChild(info3);
    cardContainer.appendChild(card3);
    
    location.appendChild(cardContainer);
    mainHome.appendChild(location)

    const pic=document.createElement("div");
    pic.classList.add("pic");
    const myIcon1 = new Image();
    myIcon1.src = Icon1;
    pic.appendChild(myIcon1);
    
    mainHome.appendChild(pic)

    const about = document.createElement("div");
    about.classList.add("about");
    
    const h2 = document.createElement("h1");
    h2.innerHTML="About";
    about.appendChild(h2);

    const aboutInfo = document.createElement("div");
    aboutInfo.classList.add("info");
    aboutInfo.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod";
    about.appendChild(aboutInfo);

    mainHome.appendChild(about);

    main.appendChild(mainHome);

    container.appendChild(main)
};


function addSidePictures(){
 
 
    const main=document.querySelector(".main");
 
    const sidePicHolder1=document.createElement("div");
    const sidePic1=new Image();
    sidePic1.src=Pic1
    
    sidePicHolder1.classList.add("pic-tomato1");
    sidePicHolder1.classList.add("side-pic");
    sidePicHolder1.appendChild(sidePic1);
    main.appendChild(sidePicHolder1);
    
    const sidePicHolder2=document.createElement("div");
    const sidePic2=new Image();
    sidePic2.src=Pic2
    
    sidePicHolder2.classList.add("pic-tomato2");
    sidePicHolder2.classList.add("side-pic");
    sidePicHolder2.appendChild(sidePic2);
    main.appendChild(sidePicHolder2);
    
    const sidePicHolder3=document.createElement("div");
    const sidePic3=new Image();
    sidePic3.src=Pic3
    
    sidePicHolder3.classList.add("pic-sauce1");
    sidePicHolder3.classList.add("side-pic");
    sidePicHolder3.appendChild(sidePic3);
    main.appendChild(sidePicHolder3);
    
    const sidePicHolder4=document.createElement("div");
    const sidePic4=new Image();
    sidePic4.src=Pic4
    
    sidePicHolder4.classList.add("pic-sauce2");
    sidePicHolder4.classList.add("side-pic");
    sidePicHolder4.appendChild(sidePic4);
    main.appendChild(sidePicHolder4);
    
};
function removeHomePage(){
    const main=document.querySelector(".main");
    main.innerHTML="";
};

export {
    createHeader,
    createHome,
    addSidePictures,
    removeHomePage,
    main
  };
