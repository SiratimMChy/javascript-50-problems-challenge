function executeTwice(fn) {
    fn();
    fn();
}

function introduction() {
    console.log("Hello, my name is Tuha. I am a Full-Stack Web Developer.");
}

executeTwice(introduction);
