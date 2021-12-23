# class
* template (붕어빵 틀처럼)
* declare once
* no data in
* introduced in ES6
* syntactical sugar over prototype-based inheritance
* inheritance ```ex)class Rectangle extends Shape{}```
* polymorphism ```ex)class Triangle extends Shape{ getArea() {return (this.width*this.height) / 2} }``` : overriding
    * super로 부모의 성질 물려받으며 새롭게 추가 가능
* class checking : instanceOf

# object
* instance of a class (팥 붕어빵)
* created many times
* data in

# getter & setter
```
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
  //그냥 this.age로 하면 위의 this.age가 이 getter를 호출하게 됨
  그래서 this._age와 같이 사용
    return this._age;
  }
  set age(value) {
  //이것도 마찬가지로, this.age = age 값을 할당할 때
  setter를 호출하게 되고, 할당된 value가 다시 setter 호출하며
  콜스택이 넘치게 되므로 이것도 this._age와 같이 사용
    this._age = value < 0 ? 0 : value;
  }
}
```

# public & private
```
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField) //2
console.log(experiment.privateField) //undefined
```

# static
```
class Article {
  //class 자체에 부여할 때 사용. Article.publisher 처럼 사용해야함
  static publisher = 'Dream Coding';
  ...
}
```

> 출처 : 유튜브 드림코딩 엘리 JS
