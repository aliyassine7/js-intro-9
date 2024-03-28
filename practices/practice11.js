// Task Part 1
class Customer {
    constructor(name, age, membershipType, membershipCost) {
        this.name = name;
        this.age = age;
        this.membershipType = membershipType;
        this.membershipCost = membershipCost;
    }

    getDetails() {
        return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}.`;
    }

    upgradeMembership() {
        this.membershipType = 'Premium'
        return this.membershipCost = this.membershipCost + (this.membershipCost * .2);
    }
}

// Task Part 2
class VipCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost) {
        super(name, age, membershipType, membershipCost);
    }

    applyDiscount() {
        return this.membershipCost *= .9;
    }
}

// Task Part 3
class BusinessCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost, duration) {
        super(name, age, membershipType, membershipCost);
        this.duration = duration;
    }

    extendContract() {
        this.duration += 1;
        return this.membershipCost *= .85;
    }
}

// Taks Part 4
const customer1 = new Customer('John Doe', 30, 'Basic', 50);

// Task Part 5
const vipCustomer = new VipCustomer('Jane Smith', 35, 'Gold', 100);

// Task Part 6
const businessCustomer = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2);

// Task Part 7
/*
Execute the upgradeMembership() method for customer1
    -this will upgrade the membership type of customer1 to 'Premium'

Execute the applyDiscount() method for vipCustomer
    -this will apply a discount of 10% to the membership type of vipCustomer

Execute the extendContract() method for businessCustomer
    -this will extend the contract of businessCustomer by 1 year
*/

customer1.upgradeMembership();
vipCustomer.applyDiscount();
businessCustomer.extendContract();

// Task Part 8
for(const customer of [customer1, vipCustomer, businessCustomer]) {
    console.log(customer.getDetails());
}