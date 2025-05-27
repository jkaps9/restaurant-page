import coffeeImage from "./coffee-mugs.webp";

export const pageload = (function () {
    const contentContainer = document.querySelector("#content");
    console.log(contentContainer);

    const header = document.createElement("h1");
    header.textContent = "Just A Sip";

    const image = document.createElement("img");
    image.src = coffeeImage;
    image.setAttribute("height", "350px");
    image.setAttribute("width", "350px");

    const para = document.createElement("p");
    para.textContent = "Have you ever wanted to try a drink but didn't want to commit to a full cup? Now you can have Just A Sip!";

    contentContainer.appendChild(header);
    contentContainer.appendChild(image);
    contentContainer.appendChild(para);
})();