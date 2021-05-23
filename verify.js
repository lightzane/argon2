const argon2 = require('argon2');

async function verify(hash, password) {
    try {
        if (await argon2.verify(hash, password)) {
            console.log('[O] CORRECT password');
        } else {
            console.log('[X] Wrong password');
        }
    } catch (err) {
        console.error(err);
    }
}

verify(process.argv[2], process.argv[3]);
