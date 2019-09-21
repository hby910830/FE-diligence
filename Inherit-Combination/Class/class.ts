//对象的属性重复了，我们就可以用类和构造函数来解决重复问题
// class Person {
//   name: string
//   age: number
//
//   sayHi(): void {
//     console.log(this.name)
//   }
//
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }
//
// const person1 = new Person('hby', 18)
// person1.sayHi()
// const person2 = new Person('韩宝亿', 28)
// person2.sayHi()


class Person {
  sayHi(): void { //共用方法
    console.log(this.name)
  }
  mySay = () => { //自用方法
    console.log(`Hi,${this.name}`)
  }
  //public是公有属性，可以对this.name = name,this.age = age进行简化处理
  constructor(public name: String, public age: Number) {
    /*tsconfig.json里添加了 "noImplicitAny",
     *为 false 时，如果编译器无法根据变量的使用来判断类型时，将用 any 类型代替。
     *为 true 时，进行强类型检查，会报错
    */
  }
}

const person1 = new Person('hby', 18)
console.log(person1);
//Person {
//  name: 'hby',
//  age: 18,
//  mySay: [Function],
//  __proto__: {
//    sayHi: [Function]
//  }
// }
const person2 = new Person('韩宝亿', 28)
console.log(person2);
//Person {
//  name: '韩宝亿',
//  age: 28,
//  mySay: [Function],
//  __proto__: {
//    sayHi: [Function]
//  }
// }

console.log(person1.mySay === person2.mySay); //false
console.log(person1.sayHi === person2.sayHi); //true

class Person3{
  name:string
}
const p1 = new Person3()
console.log(p1); //Person3 {name: undefined}

class Person4{
  //@ts-ignore
  static name:string
}
const p2 = new Person4()
console.log(p2);
//Person4 {
//  __proto__: {
//    constructor: class Person4{
//      name: undefined
//    }
//  }
// }