# humanpwd

Generate strong but easy to remember passwords.

https://humanpwd.alkatrazstudio.net/

`humanpwd` generates several passwords that consist of four words each.
The passwords will only contain lower-case English words without numbers, special symbols, etc.


## Example list of generated passwords

```
spoilconsiderclaysnake
seedflyjudgeproject
bottomlogicvisapurchase
gapcoyoteslenderportion
meatsilentgaspprison
fatherbadgepumpkinresemble
wetcakeprizebehind
```

**ACHTUNG!**: 4-word passwords are only suitable for online services
(where an attacker can't try millions of passwords per second).
For local passwords (e.g. encrypted archives) use 6-word or 8-word passwords
(concatenate two generated passwords).


## Word list

The word list is taken from [BIP-0039 specification](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
([link to the original word list](https://github.com/bitcoin/bips/blob/b1791c24aa163eb6578d0bfaadcf44997484eeaf/bip-0039/english.txt)).

The word list contains 2048 unique words.
However, `humanpwd` will generate passwords without repeating words (within a single password).

There are around 17.5 trillion possible passwords.


## Web version

Live version: https://humanpwd.alkatrazstudio.net/

To select a password click it (on desktop) or long tap it (on mobile).

The source code for the web version of `humanpwd` is located in the `web` directory.
This source code does not require any bundler, pre-processor or third-party libraries.
It should be uploaded to a web-server as-is.

The web version uses Service Workers to make the site available offline after the first visit.


## Native version

Download pre-built binaries [here](https://github.com/alkatrazstudio/humanpwd/releases).

The native application have no parameters.
Just run the binary and it will output a list of passwords.

The source code for the native version of `humanpwd` is located in the `native` directory.
You will need the [Zig compiler](https://ziglang.org) to build this source code.

Run the appropriate `native/build-*` script to build the native version of `humanpwd`.
The resulting executable will be placed into the `native` directory.


## License

[AGPLv3](LICENSE).
