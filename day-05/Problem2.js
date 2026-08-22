/*Problem 34: Create a createUser() function using Closure to keep user data private and provide a function to access it.*/
function createUser() {
    let name = "Asif";
    let email = "asif@gmail.com";

    return function getUser(){
        return console.log(`He is ${name} and his email is ${email}`);
    }
}
const user = createUser();
user();