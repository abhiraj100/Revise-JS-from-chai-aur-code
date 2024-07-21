class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }

    // createId(){
    //     return `123`;
    // }

    static createId(){  // TypeError: abhiraj.createId is not a function
        return `123`
    }
}

const abhiraj = new User("abhiraj");
// console.log(abhiraj.createId());  in case of static createId() // TypeError: abhiraj.createId is not a function 



class Teacher extends User {
    // order don't depend in the constructor
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();

// console.log(iphone.createId()); // in case of static createId() // TypeError: iphone.createId is not a function




