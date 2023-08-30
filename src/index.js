import './style.css';
import Icon from './icon.png';

 const iconPlace=document.querySelector(".icon")

 const myIcon = new Image();
 myIcon.src = Icon;

 iconPlace.appendChild(myIcon);

 import Icon1 from './IMG_5142-min.png';

 const picHolder=document.querySelector(".pic")

 const myIcon1 = new Image();
 myIcon1.src = Icon1;

 picHolder.appendChild(myIcon1);






const main=document.querySelector(".main");

const sidePicHolder1=document.createElement("div");
import Pic1 from './1.svg'
const sidePic1=new Image();
sidePic1.src=Pic1

sidePicHolder1.classList.add("pic-tomato1");
sidePicHolder1.classList.add("side-pic");
sidePicHolder1.appendChild(sidePic1);
main.appendChild(sidePicHolder1);

const sidePicHolder2=document.createElement("div");
import Pic2 from './2.svg'
const sidePic2=new Image();
sidePic2.src=Pic2

sidePicHolder2.classList.add("pic-tomato2");
sidePicHolder2.classList.add("side-pic");
sidePicHolder2.appendChild(sidePic2);
main.appendChild(sidePicHolder2);

const sidePicHolder3=document.createElement("div");
import Pic3 from './Rectangle-1-min.png'
const sidePic3=new Image();
sidePic3.src=Pic3

sidePicHolder3.classList.add("pic-sauce1");
sidePicHolder3.classList.add("side-pic");
sidePicHolder3.appendChild(sidePic3);
main.appendChild(sidePicHolder3);

const sidePicHolder4=document.createElement("div");
import Pic4 from './Rectangle-2-min.png'
const sidePic4=new Image();
sidePic4.src=Pic4

sidePicHolder4.classList.add("pic-sauce2");
sidePicHolder4.classList.add("side-pic");
sidePicHolder4.appendChild(sidePic4);
main.appendChild(sidePicHolder4);