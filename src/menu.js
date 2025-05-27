export const menuload = (function () {
    const run = () => {
        const contentContainer = document.querySelector("#content");

        const header = document.createElement("h1");
        header.textContent = "Menu";

        contentContainer.appendChild(header);

        const menuItems = [
            {
                name: "Sip of Coffee",
                description: "A taste of our signature coffee brewed with arabica beans roasted to perfection.",
                price: "$0.50"
            }
        ];

        for (let i = 0; i < menuItems.length; i++) {
            const menuItem = createMenuItem(menuItems[i].name, menuItems[i].description, menuItems[i].price);
            contentContainer.append(menuItem);
        }
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