inventory = []

class myDict {
    constructor() {
        this.container= {};
    }
    put(key, value) {
        this.container[key] = value;
    }
    hasKey(key) {
        return key in this.container;
    }
}

function createNewItem(name) {
    name = new myDict;
    name.put("id" , 5)
    inventory.push(name)
    console.log(inventory)
}


