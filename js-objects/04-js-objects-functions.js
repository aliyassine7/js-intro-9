const person = {
    first_name: 'Adam',
    last_name: 'Smith',
    date_of_birth: 1790,
    isAlive: false,
    fullName: function () {
        console.log(this.first_name, this.last_name)
    }
};

// this is a keyword that refers to the current object

person.fullName();