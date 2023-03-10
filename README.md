# Ronin documentation

The documentation for Ronin is built with [Docusaurus](https://docusaurus.io/).

## Run locally

1. Install [Node.js](https://nodejs.org/en/download/) version >= 16.14
2. Install [Yarn](https://classic.yarnpkg.com/en/docs/install) classic
3. Install [Vale](https://vale.sh/docs/vale-cli/installation/) for style guide checks
4. Install dependencies

```bash
yarn install
```

4. Start local server

```bash
yarn start
```


## Check content against the style guide

Ronin documentation is gradually edited to comply with
the [Google developer documentation style guide](https://developers.google.com/style).

Before publishing a new or edited page, you must review the content using
[Vale](https://vale.sh/), a prose linter.

Run the following command: 

```
vale file-name
``` 

to review an individual file or

```
vale directory-name
```

to review all files in a directory.

Examples: `vale view-profile.md` or `vale docs/validator`. 

The output is a list of errors and warnings that you need to review and fix
where applicable. By default, Vale reviews every line in a file,
including commands and variables, so use your best judgement when reviewing.
 
## Deploy

Ronin document is deployed with [Vercel](https://vercel.com/). Every commit to
the `main` branch triggers a new deploy request.
