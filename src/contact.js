export const contactload = (function () {
    const run = () => {
        const contentContainer = document.querySelector("#content");

        const header = document.createElement("h1");
        header.textContent = "Contact Us";

        const phone = document.createElement("p");
        phone.textContent = "Phone: 555-123-4567";

        const email = document.createElement("p");
        email.textContent = "Email: justasip@email.com";

        const address = document.createElement("p");
        address.textContent = "Address: 123 Main St, Flavor Town, USA";

        contentContainer.appendChild(header);
        contentContainer.appendChild(phone);
        contentContainer.appendChild(email);
        contentContainer.appendChild(address);
    };

    return { run };
})();