/**
 * public = Default
 * private -> 필드 수정 안됨
 */

export {};

class User {
  name: string;
  private familyName: string = "park";

  constructor(a) {
    this.name = this.familyName + a;
  }

  setFamilyName(a) {
    this.familyName = a;
  }
}

const user1 = new User("woong");
console.log(user1);

user1.setFamilyName("Lee");
console.log(user1);

console.clear();

class Person {
  name: string;
  age: number;
  private id: number = 1;
  constructor(a: string, b: number) {
    this.name = a;
    this.age = b;
  }

  setId(c: number) {
    this.id = c;
  }
}

const per1 = new Person("hello", 27);
console.log(per1);

per1.setId(255);
console.log(per1);
