# Ronin documentation

The documentation for Ronin is built with [Docusaurus](https://docusaurus.io/).

## Run locally
This site is powered by [Docusaurus](https://docusaurus.io), a static site generator. To preview changes as you edit the files, you can run a local development server that serves the Ronin documentation site and reflects the latest changes.

### Prerequisites
Install the dependencies:
* Node.js version 16.14 or higher: https://nodejs.org/en/download
* Yarn: https://classic.yarnpkg.com/lang/en/docs/install/
* Vale: https://vale.sh/docs/vale-cli/installation/

### Steps

1. Clone this repository to create its copy on your local computer.
2. Navigate to the `ronin-document` directory:
   ```
   cd ronin-document
   ```

3. Install the project:
   ```
   yarn install
   ```

4. Start the local server:
   ```
   yarn start
   ```

By default, a browser window opens at [http://localhost:3000](http://localhost:3000). To stop the server, press `Ctrl+C` in the terminal.

## Contribute
For information on contributing, read the [Contribution guide](https://docs.roninchain.com/community/contribute/contribution-guide).

## Deploy
Ronin documentation deployments are automated using [Vercel](https://vercel.com/). Every commit to the `main` branch triggers a new deploy request, while a commit to a working branch is deployed to a preview environment, good for review and feedback. 
