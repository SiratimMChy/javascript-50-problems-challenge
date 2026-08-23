class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log("Animal sound");

    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        console.log("Baw baw..");

    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        console.log("mew mew..");

    }
}

const dog = new Dog("Buddy");
const cat = new Cat("Mimi");

dog.sound();
cat.sound();