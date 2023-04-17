---
description: Style guide applied to this documentation.
---

# Content style guide

Ronin documentation adheres to the [Google's developer documentation style
guide](https://developers.google.com/style) as the preferred style guide. 

This page defines our additions and exceptions to the Google style guide:

* Ronin documentation additionally adheres to its own set of [vocabulary](#vocabulary).
* Ronin documentation uses [Markdown](#markdown) instead of HTML.
* Ronin documentation specifies additional
  [rules for diagrams and screenshots](#images)
  that complement the related guidelines from the Google style guide.

## Vocabulary

This section describes the official case-sensitive spelling of Ronin-related
terms and their usage.

| Term                 | Usage                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| archive node         | An archive node retains all historical data right back to genesis.                                                                  |
| bridge               | Run a validator and a bridge together.                                                                                              |
| bridge operator      | A bridge operator is a type of node used for acknowledging events on Ronin Bridge.                                                  |
| bridge operator node | Each validator is expected to run two nodes—a validator node and a bridge operator node.                                            |
| delegator            | To become a delegator, go to **RON Staking > All validators > Delegate**.                                                           |
| full node            | Validator and non-validator are considered _full_ nodes—they store full blockchain data.                                            |
| Governing Validator  | Beside the 12 Governing Validators, top 10 Validator Candidates with the highest staked amount are selected as Standard Validators. |
| Katana               | Katana, also known as the Katana DEX, is a decentralized exchange for Ronin.                                                        |
| mainnet              | To run a node on the mainnet, make sure to comply with the minimum hardware requirements.                                           |
| node                 | Each validator is expected to run two nodes—a validator node and a bridge operator node.                                            |
| node operator        | A node operator is an individual or institution that sets up and configure nodes for the validator.                                 |
| non-validator node   | A non-validator node is also known as an RPC node.                                                                                  |
| RON                  | Deposit 50 RON to your bridge address.                                                                                              |
| RON Staking          | RON Staking is an app where token holders can choose validators.                                                                    |
| Ronin                | Ronin is an EVM blockchain forged for gaming.                                                                                       |
| Ronin Block Explorer | The Ronin Block Explorer is an analytics platform for Ronin.                                                                        |
| Ronin Bridge         | Run a bridge operator to facilitate asset transfers on Ronin Bridge.                                                                |
| Ronin CLI            | Build a Ronin CLI from the binary.                                                                                                  |
| Ronin mainnet        | Run a validator node on the Ronin mainnet.                                                                                          |
| Ronin Wallet         | Confirm the transaction with your Ronin Wallet.                                                                                     |
| Saigon testnet       | Run a validator node on the Saigon testnet.                                                                                         |
| Standard Validator   | Beside the 12 Governing Validators, top 10 Validator Candidates with the highest staked amount are selected as Standard Validators. |
| testnet              | The testnet has different hardware requirements for running a node.                                                                 |
| validator            | Each validator is expected to run two nodes—a validator node and a bridge operator node.                                            |
| Validator Candidate  | Beside the 12 Governing Validators, top 10 Validator Candidates with the highest staked amount are selected as Standard Validators. |
| Validator Dashboard  | To view your performance analytics, go to **Validator Dashboard > Analytics**.                                                      |
| validator node       | Run a validator node on the Ronin mainnet.                                                                                          |

## Markdown

While the Google developer documentation style guide covers both Markdown and
HTML, Ronin documentation is written in Markdown.

Therefore, when reviewing your contributions against the Google style guide,
look specifically for the Markdown-related guidelines.

Because Ronin documentation is built using Docusaurus, it can use MDX as the
parsing engine, which can do more than the standard Markdown syntax. For more
information on MDX and the features it offers, see [Markdown
Features](https://docusaurus.io/docs/markdown-features).

## Images

This section describes our guidelines on screenshots, diagrams, and other images
in addition to those defined in the Google style guide.

### Diagrams

When using diagrams, follow these guidelines:

* For sequence diagrams and flowcharts, use
  [Mermaid](https://mermaid.js.org/intro/). Write a diagram's code directly in
  the Markdown file, inside a code block.
* For diagrams that cannot be designed using Mermaid, use
  [diagrams.net](https://www.diagrams.net/). Store the diagram as an SVG file in
  the `assets/` directory along with other images. When exporting the diagram,
  make sure to select **Include a copy of my diagram** so that the source is
  stored in the SVG file for you to edit it in the future.

### Screenshots

When working with screenshots, follow these guidelines:

* For each screenshot, add a 1-pixel border around the screenshot using
  your favorite image editor. Use HEX color code `#DEE6F1`. Use the native screenshot tool or third-party apps
  such as [Snagit](https://www.techsmith.com/screen-capture.html) or
  [CleanShot](https://cleanshot.com/).
* Use PNG files for screenshots if possible.
* To add screenshots to a page, follow these steps:
  1. Change the format of the Markdown file to `.mdx`. This is required for
     subsequent steps to work.
  2. For each screenshot you want to use on the page, add this line at the top
     of the document, right after the metadata:
    ```
    import customName from './assets/some-image.png';
    ```
    Replace `customName` with a clear and readable name, such as
    `becomeValidatorStepOne`.
  3. Reference the screenshot in the document using this syntax:
    ```
    <img src={becomeValidatorStepOne} width={width} />
    ```
    For multiple screenshots captured on the same platform (desktop or mobile),
    keep the width of each image consistent with other screenshot of the same
    platform on the doc site. Do that by setting `width` to the number of
    pixels—for example, `width={1440}`.
