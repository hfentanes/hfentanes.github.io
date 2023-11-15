const short = function (text, max) {
    let newText = text.substr(0, max).split(" ");
    newText.pop();
    newText = newText.join(" ") + "...";
    return newText;
};

const switchLength = function (element, close = false) {
    const active = element.getAttribute("data-active");
    const original = element.getAttribute("data-original");
    const elButton = element.querySelector("button");
    const elParagraph = element.querySelector("p");
    const longDescription = elParagraph.innerHTML;
    const shortDescription = short(original || elParagraph.innerHTML, 140);

    if (!original) {
        element.setAttribute("data-original", longDescription);
    }

    if (active === "true" || close) {
        elParagraph.innerHTML = shortDescription;
        element.setAttribute("data-active", "false");
        elButton.innerHTML = "Ver más";
    } else {
        elParagraph.innerHTML = original;
        element.setAttribute("data-active", "true");
        elButton.innerHTML = "Ver menos";
    }
};

const addShortifySystem = function (element, elShortify) {
    const elButton = element.querySelector("button");

    elButton.addEventListener("click", function () {
        elShortify.forEach(shortify => {
            if (shortify !== element) {
                switchLength(shortify, true);
            }
        });
        switchLength(element);
    });
};

document.addEventListener("DOMContentLoaded", function () {
    const elShortify = document.querySelectorAll(".shortify");

    elShortify.forEach(shortify => {
        switchLength(shortify);
        addShortifySystem(shortify, elShortify);
    });
});
