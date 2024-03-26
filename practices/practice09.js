const { Actions } = require("../utils/Actions.js");

function test1() {
    Actions.visitUrl('www.amazon.com')
        .then(() => Actions.login("TechGlobal", 'Test1234'))
        .then(() => Actions.validateTitle('Title'))
        .catch(err => console.log(err))

}

test1();


async function test2() {
    try {
        await Actions.visitUrl('www.amazon.com');
        await Actions.login('TechGlobal', 'Test1234');
        await Actions.validateTitle('Title');

    } catch (err) {
        console.log(err);
    }
}

test2()