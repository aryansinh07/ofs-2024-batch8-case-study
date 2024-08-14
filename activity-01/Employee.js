export class Employee{
    constructor(id,name,salary)
    {
        this.id = id ; 
        this.name = name ; 
        this.salary = salary ; 
    }

    display(){
        console.log(`Id is ${this.id} , name is ${this.name} , salary is ${this.salary}`); 
    }
}

