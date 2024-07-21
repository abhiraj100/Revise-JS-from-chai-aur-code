// class based

class User {
    constructor(email, password) {
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}abhiraj`;
    }

    set password(value){
        // this._password = value.toUpperCase()
        this._password = value;
    }
}

/*

Note 

// Race Condition Starts
// RangeError: Maximum call stack size exceeded.

// error in set then in get

class User {
    constructor(email, password) {
        this.email = email,
        this.password = password
    }

    get email(){
        return this.email.toUpperCase();
    }

    set email(value){
        this.email = value;
    }

    get password(){
        return `${this.password}abhiraj`;
    }

    set password(value){
        this.password = value;
    }
}


*/

// const abhiraj = new User("a@abhiraj.ai", "12345");
// console.log(abhiraj.password);  // 12345
const abhiraj = new User("a@abhiraj.ai", "abcde")
console.log(abhiraj.password);

console.log("----x----x----x----");

const abhiraj2 = new User("a@abhiraj.ai", "abcde")
console.log(abhiraj2.email);


console.log("----x----x----x----");

