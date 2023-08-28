function Person(name){
    this.name=name;
    this.greeting=function(){
        console.log(`My Name is ${this.name}`);
    }
}
let person=new Person("vimal");
person.greeting();



///////////////////////////////////
class Employee{
    constructor(){
        this.id=101;
        this.name="vimal";
    }
}
var Emp=new Employee();
console.log(Emp.id+"  "+Emp.name);

/////////////////////////////////////////

class CompanyName{
    constructor(company)
    {
        this.company="sbcosmos";
    }
}
class Employee1 extends CompanyName{
    constructor(id,name){
        super();
        this.id;
        this.name;
    }
}
var Emp=new Employee1(1,"vimal");
console.log(Emp.id+" "+Emp.name+""+Emp.company);

///////////////////////////////
class car{
    constructor(brand){
        this.carname=brand
    }
    present(){
        return 'i have a ' + this.carname;
    }
}
class model extends car{
    constructor(brand,mod){
        super(brand);
        this.model=mod;
    }
    show(){
        return this.present() +',it is a ' + this.model;
    }
}
mycar=new model("honda","civic")
console.log(mycar.show());