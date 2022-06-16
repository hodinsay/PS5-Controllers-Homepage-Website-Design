const whiteCon = document.querySelector('#white')
const blackCon = document.querySelector('#black')
const redCon = document.querySelector('#red')
const blueCon = document.querySelector('#blue')
const pinkCon = document.querySelector('#pink')
const purpleCon = document.querySelector('#purple')
const controller = document.querySelector('.container')

whiteCon.addEventListener("click", () => {
    controller.style.backgroundImage = "url(img/dualsense-ps5-controller-white-accessory-front.webp)";
    document.querySelector('span').innerText = "White"
});

blackCon.addEventListener("click", () => {
    controller.style.backgroundImage = "url(img/dualsense-ps5-controller-black-accessory-front.webp)";
    document.querySelector('span').innerText = "Midnight Black"
});

redCon.addEventListener("click", () => {
    controller.style.backgroundImage = "url(img/dualsense-ps5-controller-red-accessory-front.webp)";
    document.querySelector('span').innerText = "Cosmic Red"
});

blueCon.addEventListener("click", () => {
    controller.style.backgroundImage = "url(img/dualsense-ps5-controller-starlight-blue-accessory-front.webp)";
    document.querySelector('span').innerText = "Starlight Blue"
});

pinkCon.addEventListener("click", () => {
    controller.style.backgroundImage = "url(img/dualsense-ps5-controller-nova-pink-accessory-front.webp)";
    document.querySelector('span').innerText = "Nova Pink"
});

purpleCon.addEventListener("click", () => {
    controller.style.backgroundImage = "url(img/dualsense-ps5-controller-galactic-purple-accessory-front.webp)";
    document.querySelector('span').innerText = "Galatic Purple"
});