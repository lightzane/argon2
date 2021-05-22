# Learning Argon2

Argon2 is cryptographic hashing algorithm, most recommended for password hashing.<br>

It is designed by Alex Biryukov, Daniel Dinu, and Dmitry Khovratovich from University of Luxembourg.<br>

Argon2 has 3 variants:<br>
Argon2d, Argon2i and Argon2id. Argon2i is optimized for password hashing. Argon2 has 6 input parameters: password, salt, memory cost (the memory usage of the algorithm), time cost (the execution time of the algorithm and the number of iterations), parallelism factor (the number of parallel threads), hash length.

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
