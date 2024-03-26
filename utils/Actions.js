// Task 1 - 4
class Actions {
    static visitUrl(url) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url.startsWith('www') || url.startsWith('https://')) {
                    resolve(console.log('URL visited successfully'));
                }
                else reject("Wrong URL");
            }, 1000);
        })

    }

    static login(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'TechGlobal' && password === 'Test1234') {
                    resolve(console.log('Logged in successfully'));
                }
                else reject(console.log('Wrong credentials'));
            }, 3000);
        })
    }

    static validateTitle(title) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(title !== '' && title !== null && title !== undefined) {
                    resolve(console.log('Title validated successfully'));
                }
                else reject(console.log('Wrong title'));
            }, 500);
        })
    }
}

module.exports.Actions = Actions;