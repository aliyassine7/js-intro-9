const names = ['John', 'Jane', 'Alex', 'Max'];

// Print each name in the array

names.forEach(name => console.log(name));

// Output first letter of each name

names.forEach(name => console.log(name[0]));


// Print each name uppercased
names.forEach(name => console.log(name.toUpperCase()));


// Output each name that starts with 'J'

names.forEach(name => name.toLowerCase().startsWith('j') ? console.log(name) : null);

names.forEach(name => {
    if(name.toLowerCase().startsWith('j')) console.log(name);
})