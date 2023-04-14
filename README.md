# Ronin documentation

The documentation for Ronin is built with [Docusaurus](https://docusaurus.io/).

## Run locally
This site is powered by [Docusaurus](https://docusaurus.io), a static site generator. To preview changes as you edit the files, you can run a local development server that serves the Ronin documentation site and reflects the latest changes. 

Follow these steps to install and run the project locally:
1. Clone this repository to create its copy on your local computer.
2. Install dependencies for Docusaurus and Vale:
   * Node.js version 16.14 or higher: https://nodejs.org/en/download
   * Yarn: https://classic.yarnpkg.com/lang/en/docs/install/
   * Vale: https://vale.sh/docs/vale-cli/installation/
3. In the terminal, navigate to the `ronin-document` directory where the repository is cloned:
   ```
   cd ronin-document
   ```

4. Install the project:
   ```
   yarn install
   ```

5. Start the local server:
   ```
   yarn start
   ```

By default, a browser window opens at [http://localhost:3000](http://localhost:3000). To stop the server, press `Ctrl+C` in the terminal.

## Deploy
Ronin documentation deployments are automated using [Vercel](https://vercel.com/). Every commit to the `main` branch triggers a new deploy request, while a commit to a working branch is deployed to a preview environment, good for review and feedback. 
