# Ronin documentation

The documentation for Ronin is built with [Docusaurus](https://docusaurus.io/).

## Local development

This site is powered by [Docusaurus](https://docusaurus.io), a static site
generator. To preview changes as you edit the files, you can run a local
development server that serves the Ronin documentation site and reflects the
latest changes.

### Prerequisites

Install the dependencies:

* Node.js version 16.14 or higher:
  [https://nodejs.org/en/download](https://nodejs.org/en/download)
* Yarn:
  [https://classic.yarnpkg.com/lang/en/docs/install/](https://classic.yarnpkg.com/lang/en/docs/install/)
* Vale:
  [https://vale.sh/docs/vale-cli/installation/](https://vale.sh/docs/vale-cli/installation/)

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

By default, a browser window opens at [http://localhost:3000](http://localhost:3000).

## Contribute

For information on contributing, see
[Contribution guide](http://docs.roninchain.com/docs/community/contribute/guide).

## Deploy

Ronin documentation deployments are automated. When a PR is merged to the `main` branch, it's
automatically deployed to production and the status is displayed on the PR's
page in GitHub.

## License

This project is licensed under the terms of the [GNU General Public License v3.0](LICENSE.md) license.
