class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        console.log(`PARENT CONSTRUCTOR IS EXECUTED`);
    }

    // methods
    eat() {
        console.log('EAT');
    }
}


class Customer extends Person {
    constructor(fname, lname, age, id) {
        super(fname, lname, age);
        this.id = id;
        console.log(`CHILD CONSTRUCTOR IS EXECUTED`);
    }
}

const cust = new Customer('John', 'Doe', 25, 1);

console.log(cust);
cust.eat();

class VIPCustomer extends Customer {
    constructor(fname, lname, age, id, vipID) {
        super(fname, lname, age, id);
        this.vipID = vipID;
        console.log(`GRANDCHILD CONSTRUCTOR IS EXECUTEED`);
    }
}

const rabe = new VIPCustomer('Rabe', 'A', 25, 2, 1);
console.log(rabe);
console.log(rabe.vipID);