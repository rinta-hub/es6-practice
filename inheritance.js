class Parents{
    constructor(){
        this.fatherName = "sourov";
    }
}
class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby = new Child('moly');
const baby2 = new Child('mitu');
console.log(baby);
console.log(baby2);