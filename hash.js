const argon2 = require('argon2');

async function hash(password) {
    try {
        const hashPassword = await argon2.hash(password);
        console.log(hashPassword);
    } catch (err) {
        console.error(err);
    }
}

hash(process.argv[2]);
