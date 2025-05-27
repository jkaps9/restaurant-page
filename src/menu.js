export const menuload = (function () {
    const run = () => {
        const contentContainer = document.querySelector("#content");

        const header = document.createElement("h1");
        header.textContent = "Menu";

        contentContainer.appendChild(header);

        const menuContainer = document.createElement("div");
        menuContainer.classList.add("menu-container");

        const menuItems = [
            {
                name: "Sip of Coffee",
                description: "A taste of our signature coffee brewed with arabica beans roasted to perfection",
                price: "$0.50"
            },
            {
                name: "Sip of Tea",
                description: "A taste of our signature hot teas with your choice of flavor",
                price: "$0.50"
            },
            {
                name: "Sip of Iced Tea",
                description: "A taste of our freshly brewed iced tea",
                price: "$0.75"
            },
            {
                name: "Bite of Lemon Blueberry Scone",
                description: "A taste of our freshly baked lemon blueberry scones",
                price: "$1.25"
            }
        ];


        for (let i = 0; i < menuItems.length; i++) {
            const menuItem = createMenuItem(menuItems[i].name, menuItems[i].description, menuItems[i].price);
            menuContainer.append(menuItem);
        }

        contentContainer.appendChild(menuContainer);
    };

    const createMenuItem = (name, description, price) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemName = document.createElement("h3");
        itemName.textContent = name;
        itemName.classList.add("item-name");

        const itemDescription = document.createElement("p");
        itemDescription.textContent = description;
        itemDescription.classList.add("item-description");

        const itemPrice = document.createElement("p");
        itemPrice.textContent = price;
        itemPrice.classList.add("item-price");

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        return menuItem;
    };

    return { run };
})();