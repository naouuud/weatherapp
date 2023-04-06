export function newElement(obj) {
    const element = document.createElement(obj.type);
    for (const property in obj) {
        if (property == "class" || property == "className") element.className = obj[property];
        else if (property == "id") element.id = obj[property];
        else if (property == "text" || property == "textContent") element.textContent = obj[property];
        else if (property != "type" && property != "parent") {
            element.setAttribute(`${property}`, obj[property]);
        }
    }
    if (obj.parent) {
        if (typeof obj.parent === "string") document.querySelector(obj.parent).appendChild(element);
        else obj.parent.appendChild(element);
    }
    return element;
}