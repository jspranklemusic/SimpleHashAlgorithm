# SimpleHashAlgorithm
A cryptographic Javascript hashing program that will accept a string, encrypt an encoded string, and decrypt the string.

## How to Use

### 1. Randomize the Base Characters
First, randomize the array with your base set of characters, and then re-save the file with your randomized array. The library can now be used. 

`this.shuffle(this.fullChars)`

### 2. Hash a string
Strings can be hashed with the basicHash method.

`this.basicHash("YourSuperCoolString")`

### 3. Unhash a string
Strings can be unhashed with the basicUnhash method, which will return your original string if it matches the unhashed string.

`this.basicHash("G@5b25483hh!35gSrr1q279zaYV?")`
