---
description: Guide for contributing to this documentation.
---

# Contribution guide
Welcome to the Ronin documentation contribution guide, and thank you for your interest. Any contribution you make is reflected on [docs.roninchain.com](https://docs.roninchain.com).

You can contribute to Ronin documentation in a few ways:
* Open an issue in the repository if you noticed something that needs updating.
* Discuss the documentation and other things Ronin on our Discord server.
* Make changes to existing content and write new content through pull requests.

## Before contributing
Before you contribute, take a few minutes to review this contribution guidelines. The guide is intended to make the contribution process easy and effective for everyone involved in addressing your issue, assessing changes, and finalizing your pull request.

Consider the following before contributing:
* If you want to report an issue, click **Issues** and describe the problem in detail.
* If you have a technical question or need help finding specific information, join Ronin Discord.

If you want to contribute to this repository, here are most common fixes to make:
* Typos and other spelling and grammar issues.
* Formatting issues such as code indentation and white spaces.
* Missing or broken links.

Any contribution to the Ronin documentation repository needs to be submitted as a *pull request*. If you are new to working with GitHub repositories and pull requests, review the [First Contributions](https://github.com/firstcontributions/first-contributions) guide.

## How to contribute
The contribution workflow differs based on the type of changes you want to make. Refer to the following sections for step-by-step guidance.

### Minor changes
For simple edits such as fixing a typo, a broken link, or editing a sentence, follow these steps:
1. Click **Edit this page**. This takes you to the markdown file in GitHub.
2. Edit the contents.
3. Click **Commit changes...**
4. In the **Commit message** field, type a short, meaningful commit message that describes the change you made to the file. Follow our [commit message convention](#commit-message-convention).
5. Select **Create a new branch for this commit and start a pull request**.
6. Click **Propose file change**.

### Major changes
If what you're contributing is more than a simple change, you need to create a working branch and submit a pull request. 
1. [Run](#run-locally) Ronin documentation locally.
2. Create a working branch for your changes. Replace `type` with the correct type according to our [branch naming convention](#branch-naming-convention).
   ```
   git checkout -b type/name
   ```
3. Make changes and then do a [self-review](self-review).
4. Add the file to your commit:
   ```
   git add path-to-file
   ```
5. Commit your update. Don't forget to write a [commit message](#commit-message-convention):
   ```
   git commit -m "type: subject"
   ```
6. Push the changes to the remote repository:
   ```
   git pus origin type/name
   ```
7. Open the repository in your browser, and click **Create pull request** to start a new pull request.

Someone from the Ronin team will review your PR and approve or request the changes. If your PR looks good, the reviewer will merge it. If the reviewer suggests changes, update your PR and request another review.

When you see your PR merged, find the changes on [docs.roninchain.com](https://docs.roninchain.com). It's done!

### Branch naming convention

### Commit message convention
When writing commit messages for Ronin documentation changes, make sure to follow this convention.

#### Format

```
type: subject (ticket)
```

#### Values
`type`

The `type` part reflects the type of changes in the commit. Available types include the following:
* `feat` Changes that introduce new features/functionalities.
* `fix` Changes that fix an unexpected behavior/result of existing features/functionalities.
* `refactor` Changes that don't change existing behaviors or add new ones.
* `chore` Bump version, changes that don't affect features or bug fixes.

If several types are applicable to your change, try breaking it down into several commits. For example, one `feat` commit, one `fix` commit, and a `chore` commit. If that's not feasible, use the type that reflects the most important part of your change.

`subject`
The `subject` part describes the exact change you're making.

* Don't capitalize the first letter, reserve that for proper nouns (product names, for example).
* Use the imperative, present tense: "change" not "changed" nor "changes".
* No dot (.) at the end.

`ticket`
* Optionally, include a ticket ID in the commit message for future reference.

#### Examples

```
feat: add a guide for validators (RDOC-1)
```

```
fix: remove typos in FAQ (RDOC-2)
```

```
refactor: restructure node operator tutorial
```

```
chore: bump Vale version
```

## Development
This section describes the process for running Ronin documentation on your local computer, and describes the main elements of the site's structure.

### Run locally
This site is powered by [Docusaurus](https://docusaurus.io), a static site generator. To preview changes as you edit the files, you can run a local development server that serves the Ronin documentation site and reflects the latest changes:

1. Install dependencies for Docusaurus and Vale:
   * Node.js version 16.14 or higher: https://nodejs.org/en/download
   * Yarn dependency manager: https://classic.yarnpkg.com/lang/en/docs/install/
   * Vale prose linter: https://vale.sh/docs/vale-cli/installation/
1. Go to the Ronin documentation repository in your browser: https://github.com/axieinfinity/ronin-document
2. Clone the repository to create its copy on your local computer:
   ```
   git clone git@github.com:axieinfinity/ronin-document.git
   ```

3. In the terminal, navigate to the `ronin-document` directory:
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

### Site structure
#### Directories
Content is written in markdown files, which reside in the `/docs` directory. The files are further organized by category as described in the following table.

| Directory             | Purpose                                                                                                                                                                                          |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `docs/basics`         | General information about Ronin.                                                                                                                                                                 |
| `docs/community`      | Section that explains how to join the Ronin social media and sign up to the newsletter, describes the community initiatives we have, and instructs users how to contribute to the documentation. |
| `docs/delegators`     | Documentation for delegators.                                                                                                                                                                    |
| `docs/developers`     | One page that points readers to the Ronin developer documentation published on the Sky Mavis Developer Portal.                                                                                   |
| `docs/node-operators` | Documentation for node operators.                                                                                                                                                                |
| `docs/validators`     | Documentation for validators.                                                                                                                                                                    |

* Inside each folder is an `assets` directory where screenshots and diagrams are stored.
* Markdown files contain [front matter](https://docusaurus.io/docs/next/create-doc#doc-front-matter).

#### Sidebar
An essential means of navigating Ronin documentation, the sidebar is used for the following:
* Grouping pages into categories.
* Displaying a sidebar in each page. 
* Providing paginated navigation with **Previous** and **Next**  navigation buttons. 

The contents of the sidebar are defined in the `/sidebar.js` file. Every page you're writing must be added to the sidebar.

#### Homepage
The homepage is what the user sees when accessing https://docs.roninchain.com.

The contents of the homepage are defined in `/src/components/homepage-features/Features.tsx`.

We do not recommend making changes to this file.

#### Header and footer
The header and footer are defined in the `/docusaurus.config.js` file.

## Deployments
Ronin documentation is deployed in three environments: preview, staging, and production. Deployments are done using [Vercel](https://vercel.com/).

### Preview deployments
Preview deployments allow you to preview changes in a live deployment without merging those changes to the production branch.

Every time you open a new PR or make new commits to an open PR, it's automatically deployed to a unique preview URL, which is displayed on the PR's page in GitHub. People you share this URL with can give feedback on the changes via comments.

### Staging deployments
The staging environment is used internally by Ronin team and is out of scope of documentation contributions.

### Production deployments
When a PR is merged to the repository's main branch, it's automatically deployed to production and the status is deployed on the PR's page in GitHub. It can take a few minutes for your changes to be visible on the production site. After a PR is closed, the working branch is deleted.

## Content model
This content model explains the goals of each type of content we create within Ronin documentation, and what to include when writing or updating a page. We use these types across all documentation sets to provide a consistent user experience, and only publish content that follows the model.

It’s also easier to maintain and update consistent content, making it quicker to contribute to docs.

### Content structure
Documentation is organized into multiple levels of hierarchy on the site:
* Top-level category
  * Category
    * Page

#### Homepage content
The Ronin documentation homepage, [docs.roninchain.com](https://docs.roninchain.com) includes cards linked to all the top-level categories to help people find information about the Ronin feature that they want to use.

The space on the homepage is limited, so we have to carefully consider what goes on this page so that people can find information fast.

Content on the homepage mimics the top-level categories—four cards for different types of audience—delegator, developers, node operators, validators, and two cards covering the Ronin basics and community information.

If a new top-level category is created, it might be added to the homepage after discussions with the community. Regular categories are not published on the homepage.

#### Top-level category
Top-level categories are organized a Ronin audience type—delegators, validators, node operators, developers, and user intention—basics (to learn) and community (to get involved). All top-level categories appear on the homepage. You should only create a top-level category when there is a large amount of content to be contained in it and the content is broken down into multiple nested categories. If the content can fit in any existing top-level category, it should belong in that existing top-level category.

* Top-level categories are equally important to one another, except for [Developers](./../../developers/portal.md), which contains only one page.
* Most top-level categories have an auto-generated layout with a brief introduction at the top and the list of doc cards that represent the categories and pages inside that top-level category. There are exceptions, however. For example, the [Node operators](./../../node-operators/) category is a manually written page, where doc cards are displayed using a custom helper, and organized into sections using headings.

#### Category
Categories are usually organized around a feature or a discrete set of tasks within a top-level category—for example, "Manage profile" for validators, or "Saigon testnet" guides for node operators. 

* Categories usually start small and grow with the product.
* When categories have more than ten pages, consider breaking the content into additional sub-categories.
* Every category must have an auto-generated category page with an intro and a list of doc cards, or a manually written page using the custom helper to display the doc cards.

#### Page
A page is the basic unit of content for Ronin docs—while we use multiple content types, they're all published as pages. Each content type has its own purpose, format, and structure, yet we use standard elements in every page type, like intros, to ensure pages provide a consistent user experience.

#### Sidebar
The Ronin docs sidebar is used to group multiple related pages into sub-categories and top-level categories, provide paginated navigation on each page, and generally to structure the documentation in a discoverable way.

* The sidebar is defined in `sidebars.js` at the root level of the Ronin docs repository.
* If you're writing a new page or are organizing a new category, make sure to add it to the sidebar so that it's discoverable.
* Every top-level category and sub-category in the sidebar must have an auto-generated category page with an intro and a list of doc cards, or a manually written page using the custom helper to display the doc cards.
* While Docusaurus can create a sidebar automatically from the filesystem structure, avoid using empty categories—those that can be clicked, but display no content.

### Content order
We organize content predictably within top-level categories, regular categories, and pages, from broadest applicability to most specific, following this order:
* Concepts (what a feature is)
* Task (how to enable a feature, how to use a feature, how to manage a feature, how to disable a feature)
* Reference (list of related parameters, commands)
* Troubleshooting (how to resolve issues)

### Content types
Any of these content types can be shared as a page on its own, and some content types can also be used as topics within a larger page. We will therefore refer to the content types as "topics" in the following sections.

#### Concept
A concept topic explains background information and provides context-specific knowledge on a particular concept. The goal of a concept topic is to help readers understanding, not to teach concepts or provide steps in a task.

A concept topic works well when:
* It answers questions "What is this?", "Why should I use it?", "How does it work?"
* It gives context to a subject or topic that your readers might not have.
* It provides essential facts, background, and diagrams to help your readers build a foundational understanding of a product or topic.
* It explains the background about a concept that might not be evident in reference or how-to articles.
* It helps readers make connections between related concepts, and form a better understanding of the subject.

*Template*

To write a concept topic, use the [concept template](./templates.md#concept).

*Guidelines*

1\. Title

To write a title for a concept topic, use a noun or a noun phrase to describe the subject. For example: "Rewards", "Introduction to nodes".

2\. An overview section

Write one or two paragraphs describing the main idea of the topic.

3\. A concept body section

* Structure the body of a concept topic like you would a presentation to a group who doesn't know anything about the topic. Introduce ideas gradually, so your audience can grow their understanding of the topic.
* It can be easy to blend explanations with other types of content, like procedures or references. But you should avoid doing so. Here are some tips to avoid mixing documentation types:
  * Avoid instructions, procedures, or any content that doesn't focus solely on building upon the conceptual understanding of the concept.
  * If you find yourself writing steps or describing how to do something in detail in your concept topic, you need to shift your focus away from describing the tasks, and go back to the concept. Remind yourself of the main goal of your topic.

4\. A see also section

Use this optional section to include a bulleted list of related pages to extend the user's understanding of the concepts covered in this topic.

*Examples*

Concept pages:
* [Slashing rules](./../../validators/slashing/slashing.mdx)
* [Rewards](./../../basics/rewards.md)
* [Introduction to nodes](./../../node-operators/introduction.md)

Concept topics within other pages:
* Description of the credit score system in [Bailout](./../../validators/slashing/bailout.mdx)

#### Procedure
A procedure (how-to guide, task) is used to explain to a user how to use a specific feature, accomplish a task, and to guide the user through numbered steps. Procedures reinforce the concepts that were explained in a [concept](#concept) page by giving one or more examples that might be useful for the users.

A procedure works well when:
* It focuses only on the task it's describing.
* It doesn't contain conceptual or referential information—that lives elsewhere.
* In potential points of error, it contains troubleshooting tips or links to troubleshooting topics where the user can seek help.

*Template*

To write a procedure, use the [procedure template](./templates.md#procedure).

*Guidelines*

1\. Title

To write a title for a procedure, start with a verb. For example: "Create an account", "Become a validator", "Run a node". The outcome of the procedure should be clear to the user from the title alone.

2\. Introduction

Use this section to briefly describe the outcome of the procedure and optionally, what the user should be able to do after completing the steps. For example: "This guide demonstrates how you can delegate RON to a validator for the first time".

3\. Prerequisites

Explain what knowledge the user needs to have, or what configuration they must complete, before starting the procedure. Use imperative sentences, for example, "Read the concept guide" or "Download and install the Ronin Wallet app".

4\. Steps

Write a step-by-step instruction to complete the procedure:

* Follow the guidelines in https://developers.google.com/style/procedures
* Use a single numbered list.
* Use screenshots or graphics to assist a user in navigating a UI.
* Do not explain any concepts in this section. Instead, link to concept articles in case a user does not know about a certain concept. For example: 'Configure the server with the appropriate configuration. For more information about server configurations, see "Server configuration".'
* Avoid giving the users multiple paths to select when working through procedures. When you avoid giving the user choices, your documentation should lead all users to the same end result.
* If the page is meant for beginner users, avoid adding procedures that you might consider better suited for advanced users. If your document is intended for advanced users, state that up front and give them a list of prerequisites before they go through the steps.

5\. See also

Link to any concept topics, reference topics, issues, and other related documentation that might reinforce the user's understanding of this procedure and the concepts that it involves.

*Examples*

Procedure pages:
* [Become a delegator](./../../delegators/onboarding/become-delegator.mdx)
* [Run a validator node](./../../node-operators/setup/mainnet/validator.md)
* [Claim rewards](./../../validators/rewards/claim.mdx)

Procedure topics within other pages:
* [Check your credit score](./../../validators/slashing/bailout.mdx#check-your-credit-score)
* [Use secure communication](./../../node-operators/resources/security.md#use-secure-communication)

#### Reference
A reference topic presents information in an easily scannable format, like a table or list. The focus of reference topics is an information-oriented description of specific components or characteristics of a product or feature. This topic shouldn't contain any procedural content.

A reference topic works well when:
* It is consistent in structure, terminology, and tone.
* It contains concise, descriptive information that is relevant to its overview.
* It avoids high-level usage-instructions or description for the product as a whole.

*Template*

To write a reference topic, use the [reference template](./templates.md#reference).

*Guidelines*

1\. Title

To write a title for a reference topic, use nouns that clearly describe the contents of the topic. Make sure that the title is accessible to users who are just getting started. For example, "Slashing rules", "Network parameters", "User roles".

2\. Introduction

Write one or two paragraphs summarizing the main idea of the topic. Explain what all the entries defined in the topic have in common.

3\. Title of reference entry

* The structure of reference topics varies based on what kind of information you are documenting. You might find it helpful to organize the contents using tables, lists, interactive object-schemas. For example, if you're writing a reference page for an API endpoint, you might define sections such as "General requirements", "Request parameters", and "Responses". The format  might be different for each section—"General requirements" might be a list, while "Request parameters" and "Responses" are tables.
* Use the "don't repeat yourself" (DRY) method and re-use content if it's written for the same audience, and it fits within your reference topic without modification.
* For consistency in longer reference pages, consider using H2 headers for each section, and H3 headers for subsections. 

4\. See also

Use this optional section to include a bulleted list of related pages to extend the user's understanding of the concepts covered in this topic.

*Examples*

Reference pages:
* [Ronin mainnet](./../../node-operators/resources/parameters/mainnet.md)
* [Security audits](./../../basics/audits.md)

Reference topics within other pages:
* [Command reference](./../../node-operators/setup/cli.md#command-reference)
* [RON unlock schedule](./../../basics/tokenomics.md#ron-unlock-schedule)

#### Troubleshooting
A troubleshooting topic should be the final topic on a page. If a page has more than five troubleshooting topics, put the content on a separate page that has troubleshooting information exclusively. The title can be `Troubleshoot <feature>` and in the sidebar, you can use just the word `Troubleshoot`.

A troubleshooting topic can be one of three types:

*An introductory topic*
This topic introduces the troubleshooting section of a page. Use the [Introductory topic](./templates.md#introductory-topic) template.

*A troubleshooting procedure*
The format is similar to the standard procedure, and the title follows the same verb and noun pattern, such as “Debug a Ronin node." Use the [Procedure](./templates.md#troubleshooting-procedure) template.

*A troubleshooting reference*
This topic contains the error message. If the error has a few causes or workarounds, consider organizing them as a table. Use the [Troubleshooting reference](./templates.md#troubleshooting-reference) template. To write a title for a troubleshooting reference, consider including at least a partial error message.

#### Combined types
It might be helpful to group information in context to help people accomplish a complex task, understand a set of related tasks, or describe an entire workflow. You can combine different content types on a long page to ensure all contextual content can be found in one place. Such a "combined page" also helps remove duplicate content and makes room for potential growth as more options are added to the product.

*Guidelines*
* Use concept, procedure, reference, and troubleshooting topics in a combined page. Do not combine with get started or tutorials—those are distinct types not suitable for combination.
* Separate different content types with section headings, and abide by title guidelines for each content type.
* If the combined page contains a procedure, use a task-based title. Otherwise, use a title that's broad enough to reflect all the content on the page.

*Examples*
* [Build a Ronin CLI](./../../node-operators/setup/cli.md)

#### Tutorial
A tutorial is page that describes an complete walkthrough of a complex scenario. In general, you might consider using a tutorial when the scenario requires a number of steps where each step consists of sub-steps, and when the steps cover a variety of features or products.

*Template*
To write a tutorial, use the [tutorial template](./templates.md#tutorial).

*Guidelines*
* Unlike a [procedure](#procedure), which gives instructions for one task, a tutorial combines multiple procedures to reach an outcome. 
* A tutorial provides a working example, which means that ideally, the user can create the example that is described in the tutorial, or something similar to it.
* A tutorial might benefit from a friendlier tone. For example, consider being more conversational in your writing, or encourage and congratulate the user after completing a procedure.

#### Get started
A get started topic is a set of steps to help a user get set up quickly to use a single feature or product. It consists of more than one task.

*Template*
To write a get started topic, use the [get started template](./templates.md#get-started).

*Guidelines*
1\. Title

Use the format of `Get started with <feature or product>`.

2\. Introduction

* Describe that the page enables the user to get started quickly.
* State the outcome the user will achieve after following the steps.

3\. Prerequisites

Explain what knowledge the user needs to have, or what configuration they must complete, before starting the procedure. Use imperative sentences, for example, "Read the concept guide" or "Download and install the Ronin Wallet app".

4\. Steps

* If you're writing for beginner audiences, describe steps in a less explicit and formal manner than those in the regular [procedure](#procedure).
* Include code blocks and screenshots to help reassure that the reader is performing the right steps.

5\. Next steps

* Provide a recap of what has been accomplished in this get started page, and include some actionable next steps that the user can take after completing this page.
* Consider linking to concept topics related to this feature or product.


## Content style guide
All Ronin documentation adheres to the [content style guide](./style-guide.md) with no exception.

## Self-review checklist
As a documentation contributor, you should always review your own PR first by doing the following checks:

* [ ] If you created a new page, make sure that it uses one of the [templates](./templates.md).
* [ ] Make sure that static files are stored in the `assets` directory in the correct category.
* [ ] Compare your PR's changes on staging to confirm that the output matches the source and that everything is rendering as expected. Look out for typos, issues with lists and tables, or content that doesn't follow the style guide.
* [ ] Ensure technical accuracy of the content. Test your procedures and run all commands.
* [ ] Review grammar, spelling, and adherence to the [style guide](./style-guide.md).
* [ ] If there are any failing checks in your PR, such as broken links, troubleshoot them until they're passing.