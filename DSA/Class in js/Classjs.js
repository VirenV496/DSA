//es 6
class UserClass {
    constructor(username, email, password){
      this.username = username;
      this.email= email;
      this.password = password;
    }

    classMethod1 = () =>{
        return  `${this.password}`
    }
}

//driver code
const chai  = new UserClass("virender", "Virender@gmail.com", "1234")
console.log(chai.classMethod1());


// using function tyype classes 
function User(username, email, password) {
    this.username=username;
    this.email=email;
    this.password=password;
}
User.prototype.classMethod = function() {
    return `${this.password}`
}

//  driver code
const tea  = new User("virender", "Virender@gmail.com", "teas")
console.log(tea.classMethod());
