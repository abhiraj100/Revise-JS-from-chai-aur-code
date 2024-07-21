// object based

// we have to take hardcoded value 
// also take Object.create using factory function

// _ defines private (which means not access able from outside the scope)

const User = {
    _email: 'a@ay.com',
    _password: "ary",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    },

    get password(){
        return this._password.toUpperCase();
    },

    set password(value){
        this._password = value;
    }
}

// use factory function 

// const tea = Object.create()
const tea = Object.create(User);

console.log(tea.email);
console.log(tea.password);


