---
description: Generate key
---

# Generate key

This guide show you how to securly generate private key from ronin.

## Prerequisites
[Git](https://git-scm.com/)

[Go](https://go.dev/doc/install)

## Generate private key locally

1. Compiling ethkey tool from ronin source code

```
git clone https://github.com/axieinfinity/ronin
cd ronin
go get ./...
go build ./cmd/ethkey/
ls -l ethkey 
-rwxr-xr-x 1 user staff 16306850 Mar 23 18:13 ethkey
```

2. Generate key

```
./ethkey generate your-key-name
```
Following command will prompt you to set a password

3. Reveal your key

```
$ ./ethkey inspect --private your-key-name
```

Type your password to reveal your key
