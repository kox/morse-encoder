# Morse Encoder

## Introduction

Program to encode and, optionally, obfuscate a message to morse code.

## Installation

Clone the repository and install all dependencies. (you can use `npm` or `yarn`).

```zsh
yarn

# or

npm install
```

## Run

The simplest way is:

```zsh
yarn encode
```

If you want to run as an app

```zsh
chmod +x bin/index.js

npm link

morse-encoder
```

## Usage

List of commands

```zsh
yarn encode -h
# or
yarn encode --help
```

Encode message to morse code:

```zsh
yarn encode -m "This is an example"
```

Encode & obfuscate message:

```zsh
yarn encode -m "This is an example" -o
```

If you prefer to encode a list a messages, it's preferable to use a file. Create a file in "files" folder and run

```zsh
yarn encode -f <file>

# or

yarn encode -f <file> -o
```

# Testing

```zsh
yarn test

# or

yarn coverage
```
