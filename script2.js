const inventory = {}

class myDict {
    put(key, value) {
        this[key] = value;
    }
}

function createNewItem(name) {
    let newItem = new myDict;
    newItem.put(`id` , name)
    inventory[name] = newItem
    console.log(inventory[name])
}

function searchForItem(name) {
    if (name in inventory) {
        console.log(inventory[name].id)
    } else {
        console.log("Fuuck")
    }
}