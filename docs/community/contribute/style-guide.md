---
description: Style guide applied to this documentation.
---

# Content style guide
Ronin documentation adheres to the [Google's developer documentation style guide](https://developers.google.com/style) as the preferred style guide. 

This page defines our additions and exceptions to the Google style guide:
* Ronin documentation additionally adheres to its own [vocabulary](#vocabulary).
* Ronin documentation uses [markdown](#markdown) instead of HTML.
* Ronin documentation specifies additional [rules for diagrams and screenshots](#diagrams-figures-and-other-images) that complement the related guidelines from the Google style guide.

## Vocabulary
When contributing to the documentation, follow the official capitalization for the names of Ronin software, products, services, features, and terms defined in this style guide.

### Product names
| Product             | URL                                | Spelling                                       |
|---------------------|------------------------------------|------------------------------------------------|
| Ronin               | https://roninchain.com/            | Ronin, the Ronin network, the Ronin blockchain |
| Ronin App           | https://app.roninchain.com         | Ronin App                                      |
| Ronin Bridge        | https://bridge.roninchain.com/     | Ronin Bridge                                   |
| Ronin CLI           | -                                  | Ronin CLI                                      |
| Ronin Safe          | https://multisig.roninchain.com/   | Ronin Safe                                     |
| Ronin Wallet        | https://wallet.roninchain.com/     | Ronin Wallet                                   |
| RON Staking         | https://app.roninchain.com/staking | RON Staking, the RON Staking app               |
| Validator Dashboard | https://validator.roninchain.com   | Validator Dashboard                            |

### User role names
#### General terms
When referring to user roles on Ronin in general, use these terms:
* Delegator
* Validator
* Node operator

The standard [capitalization rules](https://owl.purdue.edu/owl/general_writing/mechanics/help_with_capitals.html) for American English apply.

#### Specific roles
When writing about specific validator roles, use these terms:
* Validator Candidate
* Standard Validator
* Governing Validator

Capitalize both words. For example: "Complete these steps to register as a Validator Candidate".

### Node names
If you're writing a document that mentions nodes, then use the spelling defined in the following sections.

#### By purpose
When talking about the purpose of the nodes, use these terms:
* Archive node
* Bridge operator node, bridge operator, bridge
* Non-validator node
* Validator node

Follow the standard capitalization rules for American English.

#### By sync mode
When writing about the sync mode used by the node, use the following terms:
* Full node
* Archive node

Follow the standard capitalization rules for American English.

#### By type
When writing about nodes in general, use the following terms: 
* Ronin node
* Bridge operator node

For Ronin nodes, always capitalize the word "Ronin". For bridge operator nodes, follow the standard capitalization rules for American English.

## Markdown
While the Google developer documentation style guide covers both Markdown and HTML, Ronin documentation is written in Markdown.

Therefore, when reviewing your contributions against the Google style guide, look specifically for the Markdown-related guidelines.

Because Ronin documentation is built using Docusaurus, it can use MDX as the parsing engine, which can do more than the standard Markdown syntax. For more information on MDX and the features it offers, see [Markdown Features](https://docusaurus.io/docs/markdown-features).

## Diagrams and screenshots
This section describes guidelines on diagrams and screenshots in addition to those defined in the Google style guide.

### Diagrams
* To create a diagram, use [mermaid](https://mermaid.js.org/intro/) or [diagrams.net](https://www.diagrams.net/).
* For diagrams (architectural drawings, flow diagrams, and so on, as distinct from screenshots), use SVG files if possible.

### Screenshots
* For each screenshot, add a 1-px #DEE6F1 border around the screenshot using your favorite image editor. Use the native screenshot tool or third-party apps such as [Snagit](https://www.techsmith.com/screen-capture.html) or [CleanShot](https://cleanshot.com/).
* Use PNG files for screenshots if possible.
* To add screenshots to a page, follow these steps:
  1. Change the format of the Markdown file to `.mdx`. This is required for subsequent steps to work.
  2. For each screenshot you want to use on the page, add this line at the top of the document, right after the metadata:
    ```
    import customName from './assets/some-image.png';
    ```
    Replace `customName` with a clear and readable name, such as `becomeValidatorStepOne`.
  3. Reference the screenshot in the document using this syntax:
    ```
    <img src={becomeValidatorStepOne} width={number} />
    ```
    For screenshots taken from the same platform (desktop or mobile), keep the width consistent by setting `number` to the width in pixels. For example, `1440`.
