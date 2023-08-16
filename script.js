const startbtn = document.querySelector(".startbtn");
const popupinfo = document.querySelector(".popup-info");
const exitbtn = document.querySelector(".popup-exit-btn");
const main = document.querySelector(".main");

startbtn.onclick = () =>{
    popupinfo.classList.add("activate");
    main.classList.add("activate");
}
exitbtn.onclick = () =>{
    popupinfo.classList.remove("activate");
    main.classList.remove("activate");
}