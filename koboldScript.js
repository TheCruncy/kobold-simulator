const miningGame = document.querySelector("#miningGame");
const craftingGame = document.querySelector("#craftingGame");
const craftingGamePointer = document.querySelector("#craftingGamePointer");
const inventory = document.querySelector("#inventory");
const inventoryMenu = document.querySelector("#inventoryMenu")
const inventoryContent = {}

let leftMenuActive = miningGame;

function makeActiveMenu(x) {
    leftMenuActive.style.display = "none";
    x.style.display = "flex";
    leftMenuActive = x;
}

class Item {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    quantity = 1;
    getImageSource () {
        return `assets/images/${this.id}.png`;
    }
}

function addToInventory(id, name) {
    if (id in inventoryContent) {
        inventoryContent[id].quantity += 1
    }
    else {
        inventoryContent[id] = new Item(id, name)
    }
    updateInventory(id)
}

function obliterateItem(id) {
    if (id in inventoryContent) {
        inventoryContent[id].quantity = 0
        updateInventory(id)
    } else {
        console.log(inventoryContent)
        console.log("Can't see it man")
    }
}

function updateInventory(x) {
    if (inventoryMenu.querySelector(`#${x}`) !== null) {
        if (inventoryContent[x].quantity <= 0) {
            inventoryMenu.removeChild(inventoryMenu.querySelector(`#${x}`));
            delete inventoryContent[x]
        } else {
            let invQuantity = document.querySelector(`#${x}Quantity`)
            invQuantity.textContent = inventoryContent[x].quantity
        }
    } else {
        const invItem = document.createElement("div");
        const invIcon = document.createElement("img");
        const invName = document.createElement("p");
        const invQuantity = document.createElement("p")

        invName.appendChild(document.createTextNode(inventoryContent[x].name))
        invQuantity.appendChild(document.createTextNode(inventoryContent[x].quantity))
        invQuantity.classList.add(`invQuantity`)
        invQuantity.id = `${x}Quantity`
        invIcon.src = inventoryContent[x].getImageSource()
        invItem.appendChild(invIcon)
        invItem.appendChild(invName)
        invItem.appendChild(invQuantity)
        inventoryMenu.append(invItem)
        invItem.id = inventoryContent[x].id
    }
}


