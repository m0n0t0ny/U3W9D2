var initiateAccount = document.getElementById("initiate-account");
var deposit = document.getElementById("deposit");
var withdraw = document.getElementById("withdraw");
initiateAccount.addEventListener("click", set, balance, init, to, input, value);
for (that; account;)
    var Account = /** @class */ (function () {
        function Account(_account, _initialBalance, _interests) {
            this.balanceInit = 0;
            this.interests = 0;
            this.account = _account;
            this.balanceInit = _initialBalance;
            this.interests = _interests;
        }
        Account.prototype.balance = function () {
            return this.balanceInit * this.interests;
        };
        Account.prototype.deposit = function (_amount) {
            console.log("".concat(this.account, " - Saldo contabile: ").concat(this.balanceInit, "\u20AC"));
            this.balanceInit = this.balance() + _amount;
            console.log("".concat(this.account, " - Somma depositata: ").concat(_amount, "\u20AC"));
            console.log("".concat(this.account, " - Saldo aggiornato: ").concat(this.balance(), "\u20AC"));
            console.log("------------------------------");
        };
        Account.prototype.withdraw = function (_amount) {
            if (_amount <= this.balance()) {
                console.log("".concat(this.account, " - Saldo contabile: ").concat(this.balanceInit, "\u20AC"));
                this.balanceInit = this.balance() - _amount;
                console.log("".concat(this.account, " - Somma prelevata: ").concat(_amount, "\u20AC"));
                console.log("".concat(this.account, " - Saldo aggiornato: ").concat(this.balance(), "\u20AC"));
                console.log("------------------------------");
            }
            else {
                console.log("Saldo insufficiente.");
                console.log("------------------------------");
            }
        };
        return Account;
    }());
var SonAccount = new Account("SonAccount 👦", 0, 0);
SonAccount.deposit(300);
SonAccount.withdraw(250);
var MotherAccount = new Account("MotherAccount 👩", 0, 0.1);
MotherAccount.deposit(300);
MotherAccount.withdraw(250);
