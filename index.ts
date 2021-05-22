// https://www.npmjs.com/package/argon2
// https://github.com/ranisalt/node-argon2#readme
// https://github.com/ranisalt/node-argon2/wiki/Options
// https://github.com/ranisalt/node-argon2/wiki/Migrating-from-another-hash-function

import * as argon2 from 'argon2';

async function verifyPassword(pwd) {
    try {
        // set and hash password
        let hash = await argon2.hash('password');

        if (
            // verify password
            await argon2.verify(
                // '$argon2i$v=19$m=4096,t=3,p=1$GqBG+r0sFm0JhENYhbN3RQ$KYe1KazvOohplcZsbozfYBbYyfPLI/+w10SCO64pc80',
                hash,
                pwd,
            )
        ) {
            // password match
            console.log('[O] CORRECT password');
        } else {
            console.log('[X] invalid password');
        }
    } catch (err) {
        console.log(err);
    }
}

verifyPassword('password');
