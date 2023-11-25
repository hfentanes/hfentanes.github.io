const asideMenu = function (data) {
    const menu = document.querySelector("#menu");
    let menuData = "";

    data.map((item) => {
        let subMenuData = "";

        item.children.map((child) => {
            subMenuData += `<li><a href="${child.link}">${child.title}</a></li>`
        });
        menuData += `
        <li class="dropdown">
            <span class="drop-title ${item.open ? "is-active" : ""} "><span class="drop-btn"></span>${item.title}</span>
            <ul>
            ${subMenuData}
            </ul>
        </li>
        `;
    });

    menu.innerHTML = `<ul>${menuData}</ul>`
} 

const getMenuData = function () {
    fetch("./src/data/menu.json").then((response) => {
        return response.json();
    }).then((data) => {
        asideMenu(data);
    }).catch((error) => {
        console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    getMenuData();
});