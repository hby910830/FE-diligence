//对象的属性重复了，我们就可以用类和构造函数来解决重复问题
class Person {
  name: string
  age: number

  sayHi(): void {
    console.log(this.name)
  }

  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const person1 = new Person('hby', 18)
person1.sayHi()
const person2 = new Person('韩宝亿', 28)
person2.sayHi()
