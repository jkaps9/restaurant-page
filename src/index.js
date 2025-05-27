import "./styles.css";
import { pageload } from "./pageload.js";
import { menuload } from "./menu.js";

console.log("JavaScript is running, you better go catch it!");
pageload.run()

function clearDiv() {
    const contentContainer = document.querySelector("#content");
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.lastChild);
    }
}

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

homeButton.addEventListener('click', () => {
    clearDiv();
    pageload.run();
});

menuButton.addEventListener('click', () => {
    clearDiv();
    menuload.run();
});

contactButton.addEventListener('click', () => {
    clearDiv();
});