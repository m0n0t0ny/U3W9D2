const initiateAccount = document.getElementById("initiate-account") as HTMLButtonElement;
const deposit = document.getElementById("deposit") as HTMLButtonElement;
const withdraw = document.getElementById("withdraw") as HTMLButtonElement;

initiateAccount.addEventListener("click", set balance init to input value for that account)

class Account {
  account: string;
  balanceInit: number = 0;
  interests: number = 0;

  constructor(_account: string, _initialBalance: number, _interests: number) {
    this.account = _account;
    this.balanceInit = _initialBalance;
    this.interests = _interests;
  }

  balance() {
    return this.balanceInit * this.interests;
  }

  deposit(_amount: number) {
    console.log(`${this.account} - Saldo contabile: ${this.balanceInit}€`);
    this.balanceInit = this.balance() + _amount;
    console.log(`${this.account} - Somma depositata: ${_amount}€`);
    console.log(`${this.account} - Saldo aggiornato: ${this.balance()}€`);
    console.log(`------------------------------`);
  }

  withdraw(_amount: number) {
    if (_amount <= this.balance()) {
      console.log(`${this.account} - Saldo contabile: ${this.balanceInit}€`);
      this.balanceInit = this.balance() - _amount;
      console.log(`${this.account} - Somma prelevata: ${_amount}€`);
      console.log(`${this.account} - Saldo aggiornato: ${this.balance()}€`);
      console.log(`------------------------------`);
    } else {
      console.log("Saldo insufficiente.");
      console.log(`------------------------------`);
    }
  }
}

const SonAccount = new Account("SonAccount 👦", 0, 0);
SonAccount.deposit(300);
SonAccount.withdraw(250);

const MotherAccount = new Account("MotherAccount 👩", 0, 0.1);
MotherAccount.deposit(300);
MotherAccount.withdraw(250);
