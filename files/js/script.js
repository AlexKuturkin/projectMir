const subheaderImage = document.querySelector(".subheader__image-container");
const subheaderImageApple = document.querySelector(".subheader__image-container-apple");
const subheaderImageGoogle = document.querySelector(".subheader__image-container-google");

const subheaderItemIos = document.querySelector(".subheader__icon-container-item_ios");
const subheaderItemGoogle = document.querySelector(".subheader__icon-container-item_google");

const subheaderTextIos = document.querySelector(".subheader__icon-container_text-ios");
const subheaderTextGoogle = document.querySelector(".subheader__icon-container_text-google");



subheaderImage.addEventListener("click", function () {
    subheaderImageApple.classList.toggle("mod-apple");
    subheaderImageGoogle.classList.toggle("mod-google");
    subheaderItemIos.classList.toggle("subheader__icon-container-item_ios-mod");
	subheaderItemGoogle.classList.toggle("subheader__icon-container-item_google-mod");
	subheaderTextIos.classList.toggle("subheader__icon-container_text-google");
	subheaderTextGoogle.classList.toggle("subheader__icon-container_text-google");
});


// переменные + код, заменяющий числа 1-7 в карусели на картинки + убираем цифры в конце
let a = document.querySelector(".level3");
if (a.textContent == "5") {
	a.style.backgroundImage = `url("./images/screen-1.png")`;
a.textContent = "";
}

let b = document.querySelector(".level2");
if (b.textContent == "6") {
	b.style.backgroundImage = `url("./images/screen-2.png")`;
b.textContent = "";
}

let c = document.querySelector(".level1");
if (c.textContent == "7") {
	c.style.backgroundImage = `url("./images/screen-3.png")`;
c.textContent = "";
}

let d = document.querySelector(".level0");
if (d.textContent == "1") {
	d.style.backgroundImage = `url("./images/slider-4-screen.png")`;
d.textContent = "";
}

let e = document.querySelector(".level-1");
if (e.textContent == "2") {
	e.style.backgroundImage = `url("./images/screen-5.png")`;
e.textContent = "";
}

let f = document.querySelector(".level-2");
if (f.textContent == "3") {
	f.style.backgroundImage = `url("./images/screen-6.png")`;
f.textContent = "";
}

let g = document.querySelector(".level-3");
if (g.textContent == "4") {
	g.style.backgroundImage = `url("./images/screen-7.png")`;
g.textContent = "";
}