
// 24 hours loop

// 00:01:00
let attempt = 0;

for(let i = 1; i <= 24; i++) {
    console.log(`Hour ${i}`);

    for(let j = 1; j <= 60; j++) {
        console.log(`\tMinute ${j}`);

        for(let k = 1; k <= 60; k++) {
            console.log(`\t\tSecond ${k}`);
            attempt++; 
        }
    }
}

console.log(attempt); // 86400

for (let i = 0; i <= 23; i++) {
    for (let j = 0; j <= 59; j++) {
        for (let k = 0; k <= 59; k++) {
            console.log(i + ':' + j + ':' + k)
        }
    }

}


for(let i = 1; i <= 3; i++) {
    console.log(i);
    console.log(`Inner loop`);

    for(let j = 1; j <= 5; j++) {
        console.log('\t' + j);
    }
}


const students = [
    [
        ['Ameer', 'Ali', 'Hicran'],
        ['Emre', 'Abdullah', 'Tania', 'Mustafa'],
        ['Marta', 'Niko', 'Mykola']
    ],
    [
        ['Jane', 'Alex', 'John'],
        ['Maria', 'Max']
    ]
];

for(let i = 0; i < students.length; i++) {
    for(let j = 0; j < students[i].length; j++) {
        for(let k = 0; k < students[i][j].length; k++) {
            console.log(students[i][j][k]);
        }
    }
}