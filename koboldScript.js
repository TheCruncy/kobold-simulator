const miningGame = document.querySelector("#miningGame");
const craftingGame = document.querySelector("#craftingGame");
const craftingGamePointer = document.querySelector("#craftingGamePointer");
const inventory = document.querySelector("#inventory");
const inventoryMenu = document.querySelector("#inventoryMenu")
const inventoryContent = [ ]

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
    let invLength = inventoryContent.length
    let idMatch = false
    let currentItem = 0
    // checks if the inventory has the item in it already
    for (let i = 0; i <= invLength; i++) {
        console.log("searching")
        if (inventoryContent[i]?.id === id) {
            console.log("Match found");
            idMatch = true;
            currentItem = i
            break;
        }
    }
    if (idMatch === true) {
        console.log("Attempting to increase quantity of " + name)
        inventoryContent[currentItem].quantity += 1
    }
    else {
        inventoryContent.push(new Item(id, name))
    }
    console.log(inventoryContent);
    updateInventory();
}

function updateInventory() {
    inventoryMenu.replaceChildren();
    let invLength = inventoryContent.length;
    for (let i = 0; i < invLength; i++) {
        console.log(i)    
        const invItem = document.createElement("div");
        const invIcon = document.createElement("img");
        const invName = document.createElement("p");
        const invQuantity = document.createElement("p")

        invName.appendChild(document.createTextNode(inventoryContent[i].name))
        invQuantity.appendChild(document.createTextNode(inventoryContent[i].quantity))
        invQuantity.classList.add("invQuantity")
        invIcon.src = inventoryContent[i].getImageSource()
        invItem.appendChild(invIcon)
        invItem.appendChild(invName)
        invItem.appendChild(invQuantity)
        inventoryMenu.append(invItem)

    }
}