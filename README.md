# Ronin Document

Ronin's Document is built with [docusaurus](https://docusaurus.io/).

## Running locally

1. Install [Node.js](https://nodejs.org/en/download/) version >= 14.0
2. Install [Yarn](https://classic.yarnpkg.com/en/docs/install) classic
3. Install dependencies

```bash
yarn install
```

4. Start local server

```bash
yarn start
```

## Deploy

Ronin Document is deployed with [Vercel](https://vercel.com/). Every commit to
the `main` branch will trigger a new deploy request.

## Troubleshoot
### Unable to fetch package
When installing dependencies for the project, you may run into the following error: 

```
yarn install
yarn install v1.22.19
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
error An unexpected error occurred: "https://npm.pkg.github.com/download/@axieinfinity/eslint-config/1.1.0/7d37b16e03a9f39260d38aa52652aa2fe3eaace77d3106ac6d54a39e6e6fd80d: Request failed \"401 Unauthorized\"".
```
The error occurs because you don't have the permission to download private packages from GitHub.

To resolve the error, follow the steps in [npm configuration for developers](https://www.notion.so/skymavis/Implement-GitHub-private-package-3454bb9a47c645409d68dd790d3302c5?pvs=4#3cada2180b444214abc5316488f14c34).  