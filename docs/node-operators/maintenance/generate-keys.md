---
description: Securely generate private keys.
---

# Generate keys
This guide demonstrates how to generate a private key for your nodes.

## Prerequisites
You need to have [Golang](https://go.dev/doc/install) installed.

## Generate your private key locally
1. Compile the `ethkey` tool from the Ronin source code by running the 
following commands:
```
git clone https://github.com/axieinfinity/ronin
cd ronin
go get ./...
go build ./cmd/ethkey/
ls -l ethkey 
-rwxr-xr-x 1 user staff 16306850 Mar 23 18:13 ethkey
```

2. Generate the key and set a password:
```
./ethkey generate your-key-name
```

3. Reveal the key and enter the password:

```
$ ./ethkey inspect --private your-key-name
```
