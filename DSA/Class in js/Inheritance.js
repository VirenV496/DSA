class UserClassIn {
    constructor(username, email, password){
      this.username = username;
      this.email= email;
      this.password = password;
    }

    method1 = () =>{
        return `${this.password}`
    }
}

class Teacherclass extends UserClassIn {
    constructor(username, email, password){
        super(username)
        this.email= email;
        this.password= password;
    }

    addCourse = () => {
      console.log(`course acessible to this user ${this.username}`);
    }
}

const chai1= new Teacherclass('virender', 'virendergmail', '1234');

chai1.addCourse();
chai1.method1();

const masalachai = new  UserClassIn('virender', 'virendergmail', '1234');

console.log(masalachai.method1());

console.log(chai1 instanceof Teacherclass);