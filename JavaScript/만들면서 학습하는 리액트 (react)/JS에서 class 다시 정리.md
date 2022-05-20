* 순수 JS로 검색폼 구현하는 파트를 수강중에, class 관련해서 자꾸 헷갈리는 부분이 생김   
분명 여러번 공부했다고 생각했는데 뭔가 찝찝한 기분이 들어서 다시 정리!

# Class
* Class는 객체를 생성하기 위한 템플릿
* Class에서 메소드 정의시에는 function 사용하지 않음
```
class Person{
 
}
 
var kim = new Person();
console.log('kim', kim);
 
// kim.sum = function(){
//     return 'this : '+(this.first+this.second);
// }
// var lee = new Person('lee', 10, 10);
// console.log("kim.sum()", kim.sum());
// console.log("lee.sum()", lee.sum());
```

## constructor
```
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
}
 
var kim = new Person('kim', 10, 20);
console.log('kim', kim);
 
// kim.sum = function(){
//     return 'this : '+(this.first+this.second);
// }
// var lee = new Person('lee', 10, 10);
// console.log("kim.sum()", kim.sum());
// console.log("lee.sum()", lee.sum());
```
* 객체가 만들어지기 직전에 실행되는, 객체의 초기 상태를 셋팅해주는 함수
* Class당 한개씩 존재

```
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype : '+(this.first+this.second);
    }
}
```
* 7~9번째 줄은, Person.prototype.sum 과 동일하게 작동

## Class 상속
```
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second;
    }
}
class PersonPlus extends Person{
    avg(){
        return (this.first+this.second)/2;
    }
}
 
var kim = new PersonPlus('kim', 10, 20);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
```
* 상속 사용시 이점
  * 기존 class의 기능은 그대로 가져오면서, 새로운 기능 추가하고자할 때   
    (만약 상속을 사용하지않고 기존의 class를 계속 수정하면서 기능을 추가하면 이 class를 사용하는 다른 부분에 문제가 생길 수도 있고,   
    추가할 기능이 자주 쓰이지 않는 기능일 경우에도 상속을 사용하는 것이 훨씬 편리함)
  * 상속(위 예제 11~13번째 줄)을 사용하면 중복 코드를 줄일 수 있음

## super
```
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second;
    }
}
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}
 
var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
```
* super() : 부모 클래스의 생성자. 즉, 위 예제 13번째 줄에서, Person class의 생성자를 전달 받으며 생성자 내의 프로퍼티가 세팅됨   
  따라서, 자식은 14번째 줄만 추가하면됨
  기존 Person의 인자는 건드리지 않으면서 중복되는 코드를 줄이고, 새로운 third라는 인자 추가 가능
  
* super. : 17번째 줄처럼 사용하게 되면, 부모 클래스의 sum 메소드가 호출됨

> 출처 : 생활코딩 - Javascript 객체 지향 프로그래밍
