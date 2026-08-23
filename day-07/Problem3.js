/*Problem 49 — Bank Account Class
Create a BankAccount class with a private #balance field. Implement deposit() and withdraw() methods and use getters/setters where appropriate. The balance should not be directly accessible from outside the class. */
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        }
    }

    get balance() {
        return this.#balance;
    }
}
const account = new BankAccount();

account.deposit(1000);
account.withdraw(300);

console.log(account.balance);