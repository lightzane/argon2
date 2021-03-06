# Learning Argon2

```
npm install argon2
npm install -D @types/argon2
```

Argon2 is cryptographic hashing algorithm, most recommended for password hashing.<br>

It is designed by Alex Biryukov, Daniel Dinu, and Dmitry Khovratovich from University of Luxembourg.<br>

Argon2 has 3 variants:<br>
Argon2d, Argon2i and Argon2id. Argon2i is optimized for password hashing. Argon2 has 6 input parameters: password, salt, memory cost (the memory usage of the algorithm), time cost (the execution time of the algorithm and the number of iterations), parallelism factor (the number of parallel threads), hash length.<br>

Source: [argon2.online](https://argon2.online/#:~:text=Argon2%20is%20cryptographic%20hashing%20algorithm,Argon2d%2C%20Argon2i%20and%20Argon2id.)

## Getting Started

### Prerequisites:

-   `npm i -g typescript`

### Steps

1. `npm install`
2. `npm run build`
3. `npm start`

### Errors

After `npm run build`, error may be encountered. Ignore it and just do `npm start`

```
Cannot find name 'Buffer'.
Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
```

### Code Snippet

```typescript
async function verifyPassword(pwd) {
    try {
        // set and hash password
        let hash = await argon2.hash('password');

        if (
            // verify password
            await argon2.verify(hash, pwd)
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
```

### Hash Password

This is the output after running `.hash()`

```
$argon2i$v=19$m=4096,t=3,p=1$GqBG+r0sFm0JhENYhbN3RQ$KYe1KazvOohplcZsbozfYBbYyfPLI/+w10SCO64pc80,
```

## References

-   https://www.npmjs.com/package/argon2
-   https://github.com/ranisalt/node-argon2#readme
-   https://github.com/ranisalt/node-argon2/wiki/Options
-   https://github.com/ranisalt/node-argon2/wiki/Migrating-from-another-hash-function
