"use strict";
// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Surat ";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getCompanyInfo() {
        return `tesla${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = false;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hardik = new User("test@gmail.com", "hardik");
// hardik.city
