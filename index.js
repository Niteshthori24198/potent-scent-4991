
let images=["https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp","https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp","https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/738x416.webp","https://is3-ssl.mzstatic.com/image/thumb/Jj8T9VNcfHfMQ4fDwp31-Q/738x416.webp","https://is3-ssl.mzstatic.com/image/thumb/EuF6BWsgBeic_Ap2qeAGBQ/738x416.webp","https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/738x416.webp","https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp","https://is1-ssl.mzstatic.com/image/thumb/NuIOgsGJ11I4jRoa7-GbSA/738x416.webp","https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/738x416.webp","https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/738x416.webp","https://is2-ssl.mzstatic.com/image/thumb/OM7DSB_I6MgAJQDYTEWc5w/738x416.webp"];

var theme=["Comedy","Drama","Drama","Thriller","Thriller","Thriller","Thriller","Drama","Drama","Drama","Documentary"];
var detail=["4 Emmy","Control is an illusion","The epic series comes to an end","New Season","The rescue is only the begining","The very bottom of top secret","We're all different people at work","Family, It's a killer","One man's freedom hides in another man darkness","Inspired by a gripping true story","Who control's the game"];

let cont=document.querySelector(".lbcont");

var i=1;

window.addEventListener("load",function(){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",images[0]);
    img.setAttribute("id","set");
    let btn=document.createElement("button");
    btn.innerText="Stream Now";
    btn.setAttribute("id","btn");
    let txt=this.document.createElement("h2");
    txt.innerText=theme[0];
    txt.innerText+=" : "+detail[0];
    txt.setAttribute("id","text");
    div.append(img,btn,txt);
    cont.append(div);

    this.setInterval(()=>{
        slideshow(images);
    },3000)
})

function slideshow(images){
    cont.innerHTML=null;
    if(i===11){
        i=0;
    }
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",images[i]);
    img.setAttribute("id","set");
    let btn=document.createElement("button");
    btn.innerText="Stream Now";
    btn.setAttribute("id","btn");
    let txt=document.createElement("h2");
    txt.innerText=theme[i];
    txt.setAttribute("id","text");
    txt.innerText+=" : "+detail[i];
    div.append(img,btn,txt);
    cont.append(div);
    i++;

}