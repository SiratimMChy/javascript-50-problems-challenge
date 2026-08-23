/*Problem 50 — Animal Inheritance & Polymorphism Create an Animal parent class and Dog and Cat child classes. Use extends, super(), method overriding, and polymorphism. Each child class should implement its own version of the sound() method.*/
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