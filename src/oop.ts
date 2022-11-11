/**
 * public = Default
 * private -> 필드 수정 안됨
 */

export {};

class User1 {
  name: string;
  private familyName: string = "park";

  constructor(a) {
    this.name = this.familyName + a;
  }

  setFamilyName(a) {
    this.familyName = a;
  }
}

const user1 = new User1("woong");
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

console.clear();

/**
 * protect
 */

class Pro {
  protected name: string;
}

class Pro1 extends Pro {
  app() {
    this.name = "kim";
  }
}

const copyPro = new Pro1();
console.log(copyPro);

/**
 * static
 */

class sta {
  static x: number = 10;
}

const copySta = new sta();
console.log(sta.x);

console.clear();

class User2 {
  static skill = "js";
  intro = User2.skill + " world";
}

const ne = new User2();
console.log(ne);

User2.skill = "ts";
console.log(ne);
const ne2 = new User2();
console.log(ne2);

console.clear();

// Q.
// 다음 x, y, z 속성의 특징을 설명해보십시오.
// class User {
//   private static x = 10;
//   public static y = 20;
//   protected z = 30;
// }
// 누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요.
// 친구가 물어봤을 때 어떻게 답해줄 것입니까

class knock {
  private static x = 10;

  tv() {
    knock.x = 5;
  }
}

const copyknock = new knock();
console.log(knock);

copyknock.tv();
console.log(knock);

const ab = new knock();
console.log(knock);

console.clear();

///
class d {
  public static x = 10;

  static df() {
    d.x = 5;
  }
}

const dd = new d();
console.log(d);
console.log(dd);
d.df();
console.log(d);

console.clear();

// Q.
// x 속성에 숫자를 더해주는 함수가 필요합니다.
// class User {
//     private static x = 10;
//     public static y = 20;
//   }
//   User.addOne(3) //이렇게 하면 x가 3 더해져야함
//   User.addOne(4) //이렇게 하면 x가 4 더해져야함
//   User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
//   저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?
//   그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
//   (조건) private static x = 10; 이 코드 수정금지

class User {
  private static x = 10;
  public static y = 20;

  static addOne(x: number) {
    User.x += x;
  }

  static printX() {
    console.log(User.x);
  }
}

// const test5 = new User()
User.printX();
User.addOne(5);
User.printX();
