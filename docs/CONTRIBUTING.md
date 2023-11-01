---
title: Contribution guide
description: Guidelines for contributing to Ronin documentation.
toc_min_heading_level: 2
toc_max_heading_level: 2
slug: 'community/contribute/guide'
---

## Overview

Thank you for your interest in contributing to the Ronin documentation project. Any contribution you make will be visible on [docs.roninchain.com](https://docs.roninchain.com).

This guide gives an overview of the contribution workflow, provides guidelines on using content templates, and describes the structure of the Ronin documentation site.  

## Before contributing

Before you contribute, take a few minutes to review this contribution guide and
our [Code of Conduct](https://github.com/axieinfinity/ronin-documentation/blob/main/CODE_OF_CONDUCT.md). This guide is intended to make the
contribution process easy and effective for everyone involved in looking at your
issue, assessing changes, and reviewing and merging your pull request.

Consider the following before contributing:

* If you want to report an issue, click **Issues** and describe the problem in
  detail.
* If you have a technical question or need help finding specific information,
  join [Ronin Discord](https://discord.gg/roninnetwork).

If you want to contribute to this repository, here are most common fixes to
make:

* Typos and other spelling and grammar issues.
* Formatting issues such as code indentation and white spaces.
* Missing or broken links.

Any contribution to the Ronin documentation repository needs to be submitted as
a *pull request*. If you are new to working with GitHub repositories and pull
requests, review the [First
Contributions](https://github.com/firstcontributions/first-contributions) guide.

## What to contribute

You can contribute to Ronin documentation in a few ways:

* Open an issue in the
  [repository](https://github.com/axieinfinity/ronin-documentation) if you noticed
  something that needs updating.
* Discuss the documentation and other things Ronin on our Discord server.
* Make changes to existing content and write new content through pull requests.

## How to contribute

The contribution flow differs based on the type of changes you want to make.
Refer to the following sections for step-by-step guidance.

### File an issue

If you notice a problem with the documentation, check our
[existing issues](https://github.com/axieinfinity/ronin-documentation/issues).
If a related issue doesn't exist, you can open a new issue
by clicking **New issue**.

### Resolve an issue

Look through the [existing issues](https://github.com/axieinfinity/ronin-documentation/issues)
to find one you'd like to solve.

### Make changes via UI

For simple edits such as fixing a typo, a broken link, or editing a sentence,
follow these steps:

1. Click **Edit this page**. This takes you to the source file in the GitHub
   file editor.
2. Edit the contents.
3. Click **Commit changes...**.
4. In the **Commit message** field, type a short and meaningful message
   describing the change you made. Follow the [commit message convention](#naming-conventions).
5. Select **Create a new branch for this commit and start a pull request**.
6. Click **Propose file change**.

### Make changes in your own branch

If your contribution is more than a few words or simple fixes, then you need to
create a working branch and submit a pull request.

1. Fork the repository.
2. Install the dependencies as specified in [Run locally](#run-locally).
3. Create a working branch. Fill in `type` and `short-description` according to the [branch naming convention](#naming-conventions).

   ```bash
   git checkout -b type/short-description
   ```

4. Make your changes.
5. Do a [self-review](#self-review-checklist).
6. Add the file or files to your commit:

   ```bash
   git add file-name
   ```

7. Commit your changes, and type a short and meaningful message
   describing the change you made. Follow the [commit message convention](#naming-conventions).

   ```bash
   git commit -m "type: subject"
   ```

8. Push the changes to the repository:

   ```bash
   git push origin type/short-description
   ```

9. Open the repository in your browser, and click **Create pull request** to
   start a new pull request.

### Work with a pull request

After you're done with the changes, create a pull request (PR):

* Write the title for the PR following the [naming convention](#naming-conventions).
* Fill out the PR template so that Ronin maintainers can review your PR.
* If you're solving an issue, link the PR to it by typing `fixes #issue` or `closes #issue`.
* [Allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so that your branch can be reviewed and updated for a merge.
* Maintainers may ask you to make changes before a PR can be merged, either as suggested changes or PR comments.
* As you address maintainers' feedback, mark each item as resolved.

### Next step

After you address feedback from maintainers, your PR will be merged and your contributions will be visible on [docs.roninchain.com](https://docs.roninchain.com).
Congratulations, you're a full-blown contributor!

### Naming conventions

When naming branches, creating PRs, and writing commit messages, follow this
convention.

| Type       | Description                                                   | Branch                                              | Commit                        | Pull request                           |
| ---------- | ------------------------------------------------------------- | --------------------------------------------------- | ----------------------------- | -------------------------------------- |
| `feat`     | Changes that introduce new features.                          | `feat/short-description`                            | `feat: short description`     | feat:  short description               |
| `fix`      | Changes that fix an unexpected behavior.                      | `fix/issue-id or fix/short-description`             | `fix: short description`      | fix: [issue ID] short description      |
| `refactor` | Changes that don't change existing behaviors or add new ones. | `refactor/issue-id` or `refactor/short-description` | `refactor: short description` | refactor: [issue ID] short description |
| `chore`    | Changes that update package versions.                         | `chore/short-description`                           | `chore: short description`    | chore: short description               |

If several commit types are applicable to your change, try breaking it down into
several commits. For example, one `feat` commit, one `fix` commit, and a `chore`
commit. If that's not feasible, use the type that reflects the most important
part of your change.

When writing the `short description` part, follow these guidelines:

* Don't capitalize the first letter, reserve that for proper nouns (product
  names, for example).
* Use the imperative, present tense: "change" not "changed" nor "changes".
* Don't add a period (.) at the end.

## Run locally

This site is powered by [Docusaurus](https://docusaurus.io), a static site
generator. To preview changes as you edit the files, you can run a local
development server that serves the Ronin documentation site and reflects the
latest changes:

1. Clone the [ronin-documentation](https://github.com/axieinfinity/ronin-documentation)
   by running the following command:

   ```bash
   git clone git@github.com:axieinfinity/ronin-documentation.git
   ```

2. Navigate to the `ronin-documentation` directory:

   ```bash
   cd ronin-documentation
   ```

3. Install the project:

   ```bash
   yarn install
   ```

4. Start the local server:

   ```bash
   yarn start
   ```

By default, a browser window opens at
[http://localhost:3000](http://localhost:3000).

## Deployments

Ronin documentation is automatically deployed to production and preview
environments.

### Preview deployments

Preview deployments allow you to preview changes in a live deployment without
merging those changes to the production branch.

Every time you open a new PR or make new commits to an open PR, it's
automatically deployed to a unique preview URL, which is displayed on the PR's
page in GitHub. People you share this URL with can give feedback on the changes
via comments.

### Production deployments

When a PR is merged to the repository's `main` branch, it's automatically
deployed to production and the status is displayed on the PR's page in GitHub.
It can take a few minutes for your changes to be visible on the production site.

After a PR is closed, your working branch is deleted.

## Site structure

### Directories

* Content is written in Markdown files, which reside in the `/docs` directory.
* Screenshots and diagrams are stored in `assets` directories throughout the `/docs` folder.
* Markdown files contain [front matter](https://docusaurus.io/docs/next/create-doc#doc-front-matter).
* The files in the `/docs` are further organized by category as
  described in the following table:

| Directory              | Purpose                                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------------------------- |
| `/docs/basics`         | General information about Ronin.                                                                                |
| `/docs/community`      | Ronin socials, contribution guide, and community initiatives.                                                   |
| `/docs/delegators`     | Documentation for delegators.                                                                                   |
| `/docs/validators`     | Documentation for validators.                                                                                   |
| `/docs/bridge-operators` | Documentation for bridge operators.                                                                               |
| `/docs/rns` | Documentation for Ronin Name Service (RNS).                                                                               |

### Sidebar

An essential means of navigating Ronin documentation, the sidebar is used for
the following:

* Grouping pages into categories.
* Displaying a sidebar in each page.
* Providing paginated navigation with **Previous** and **Next**  navigation
  buttons.

The contents of the sidebar are defined in the `/sidebar.js` file. Every page
must be added to the sidebar.

### Homepage

The homepage is what the user sees when accessing
[docs.roninchain.com](https://docs.roninchain.com).
The contents of the homepage are defined in
`/src/components/homepage-features/Features.tsx`.

We do not recommend making changes to the homepage.

### Header and footer

The header and footer are defined in the `/docusaurus.config.js` file.

## Content model

This content model explains the goals of each type of content we create within
Ronin documentation, and what to include when writing or updating a page. We use
these types across all documentation sets to provide a consistent user
experience, and only publish content that follows the model.

It’s also easier to maintain and update consistent content, making it quicker to
contribute to docs.

### Content structure

Documentation is organized into multiple levels of hierarchy on the site:

* Top-level category
  * Category
    * Page

#### Homepage content

The homepage [docs.roninchain.com](https://docs.roninchain.com)
includes cards linked to all the top-level categories to help
people find information about the Ronin feature
that they want to use.

The space on the homepage is limited, so we have to carefully consider what goes
on this page so that people can find information fast.

Content on the homepage mimics the top-level categories—four cards for different
types of audience—delegator, developers, node operators, validators, and two
cards covering the Ronin basics and community information.

If a new top-level category is created, it might be added to the homepage after
discussions with the community. Regular categories are not published on the
homepage.

#### Top-level category

Top-level categories are organized around Ronin audience types—delegators, validators,
node operators, developers, and user intention—basics (to learn) and community
(to get involved). All top-level categories appear on the homepage. You should
only create a top-level category when there is a large amount of content to be
contained in it and the content is broken down into multiple nested categories.
If the content can fit in any existing top-level category, it should belong in
that existing top-level category.

Most top-level categories have an auto-generated layout with a brief
introduction at the top and the list of doc cards that represent the
categories and pages inside that top-level category. There are exceptions,
however. For example, the [Validators](./validators/index.mdx) category is a
manually written page, where doc cards are displayed using a custom helper,
and organized into sections using headings.

#### Category

Categories are usually organized around a feature or a discrete set of tasks
within a top-level category—for example, "Manage profile" for validators, or
"Saigon testnet" guides for node operators.

* Categories usually start small and grow with the product.
* When categories have more than ten pages, consider breaking the content into
  additional sub-categories.
* Every category must have an auto-generated category page with an intro and a
  list of doc cards, or a manually written page using the custom helper to
  display the doc cards.

#### Page

A page is the basic unit of content for Ronin docs—while we use multiple content
types, they're all published as pages. Each content type has its own purpose,
format, and structure, yet we use standard elements in every page type, like
intros, to ensure pages provide a consistent user experience.

##### Front matter

Each page contains YAML metadata called
[front matter](https://docusaurus.io/docs/next/create-doc#doc-front-matter).
It's located at the top of the page and is used to enrich the default
metadata inferred from the content or other configuration.

Example:

```markdown
---
description: Hardware recommendations and methods of installation.
slug: '/get-started'
sidebar_label: Get started
title: Get started as a developer
---
```

Defintions:

* `description` is used in the head metadata and on the
  [doc card](https://docusaurus.io/docs/sidebar/items#embedding-generated-index-in-doc-page).
* `slug` is used to customize the URL of the page. If no slug is specified, the page's URL location is its file path relative to the `/docs` folder.
* `sidebar_label` defines the text shown in the sidebar for this page. For example, if your page's title is too long to fit in the sidebar, you can write a shorter title using the `sidebar_label` metadata.
* `title` sets the title of the page.

These are just a few of the available front matter attributes.
For a full list, see [Markdown front matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter).

#### Sidebar

The Ronin docs sidebar is used to group multiple related pages into
sub-categories and top-level categories, provide paginated navigation on each
page, and generally to structure the documentation in a discoverable way.

* The sidebar is defined in `sidebars.js` at the root level of the Ronin docs
  repository.
* If you're writing a new page or are organizing a new category, make sure to
  add it to the sidebar so that it's discoverable.
* Every top-level category and sub-category in the sidebar must have an
  auto-generated category page with an intro and a list of doc cards, or a
  manually written page using the custom helper to display the doc cards.
* While Docusaurus can create a sidebar automatically from the filesystem
  structure, avoid using empty categories—those that can be clicked, but display
  no content.

### Content order

We organize content predictably within top-level categories, regular categories,
and pages, from broadest applicability to most specific, following this order:

* Concepts (what a feature is).
* Task (how to enable a feature, how to use a feature, how to manage a feature,
  how to disable a feature).
* Reference (list of related parameters, commands).
* Troubleshooting (how to resolve issues).

### Content types

Any of these content types can be shared as a page on its own, and some content
types can also be used as topics within a larger page. We will therefore refer
to the content types as "topics" in the following sections.

#### Concept

A concept topic explains background information and provides context-specific
knowledge on a particular concept. The goal of a concept topic is to help
readers understanding, not to teach concepts or provide steps in a task.

A concept topic works well when:

* It answers questions "What is this?", "Why should I use it?", "How does it
  work?"
* It gives context to a subject or topic that your readers might not have.
* It provides essential facts, background, and diagrams to help your readers
  build a foundational understanding of a product or topic.
* It explains the background about a concept that might not be evident in
  reference or task topics.
* It helps readers make connections between related concepts, and form a better
  understanding of the subject.

##### Template

To write a concept topic, use the
[concept](./community/contribute/templates.md#concept) template.

##### Guidelines

###### Title metadata

To write a title for a concept topic, use a noun or a noun phrase to describe
the subject. For example: "Rewards", "Introduction to nodes".

###### Concept section

* Write one or two paragraphs describing the main idea of the topic.
* Structure the body of a concept topic like you would a presentation to a group
  who doesn't know anything about the topic. Introduce ideas gradually, so your
  audience can grow their understanding of the topic.
* It can be easy to blend explanations with other types of content, like tasks
  or references. But you should avoid doing so. Here are some tips to avoid
  mixing documentation types:
  * Avoid instructions, procedures, or any content that doesn't focus solely on
    building upon the conceptual understanding of the concept.
  * If you find yourself writing steps or describing how to do something in
    detail in your concept topic, you need to shift your focus away from
    describing the tasks, and go back to the concept. Remind yourself of the
    main goal of your topic.

###### See also

Include a bulleted list of related pages to extend the user's understanding of
the concepts covered in this topic.

##### Examples

* [Slashing rules](./validators/slashing/slashing.mdx)
* [Rewards](./basics/rewards.md)
* [Introduction to nodes](./node-operators/introduction.md)
* Concept topics within another page: [Bailout](./validators/slashing/bailout.mdx)

#### Task

A task (how-to guide, procedure) is used to explain to a user how to use a specific
feature, accomplish a task, and to guide the user through numbered steps. Tasks
reinforce the concepts that were explained in [concept](#concept) topics by
giving one or more examples that might be useful for the users.

A task works well when:

* It focuses only on the task it's describing.
* It doesn't contain conceptual or referential information—that lives elsewhere.
* In potential points of error, it contains troubleshooting tips or links to
  troubleshooting topics where the user can seek help.

##### Template

To write a task, use the [task](./community/contribute/templates.md#task) template.

##### Guidelines

###### Title metadata

To write a title for a task, start with a verb. For example: "Create an
account", "Become a validator", "Run a node". The outcome of the task should be
clear to the user from the title alone.

###### Task section

* Briefly describe the outcome of the task and optionally, what the user should be
able to do after completing the steps.
* Explain what knowledge the user needs to have, or what configuration they must
complete, before starting the task. Use imperative sentences, for example, "Read
the concept guide" or "Download and install the Ronin Wallet app".
* Write a step-by-step instruction to complete the task:
  * Follow the guidelines in [https://developers.google.com/style/procedures](https://developers.google.com/style/procedures).
  * Use a single numbered list.
  * Use screenshots or graphics to assist a user in navigating a UI.
  * Do not explain any concepts in this section. Instead, link to concept topics
  in case a user does not know about a certain concept. For example: 'Configure
  the server with the appropriate configuration. For more information about
  server configurations, see "Server configuration".'
  * Avoid giving the users multiple paths to select when working through tasks.
  When you avoid giving the user choices, your documentation should lead all
  users to the same end result.
  * If the page is meant for beginner users, avoid adding tasks that you might
  consider better suited for advanced users. If your document is intended for
  advanced users, state that up front and give them a list of prerequisites
  before they go through the steps.

###### See also

Include a bulleted list of related pages to extend the user's understanding of
this task and the concepts that it involves.

##### Examples

* [Become a delegator](./delegators/onboarding/become-delegator.mdx)
* [Run a validator node](./node-operators/setup/mainnet/validator.md)
* [Claim rewards](./validators/rewards/claim.mdx)
* Task topics within other pages:
  * [Check your credit score](./validators/slashing/bailout.mdx#check-your-credit-score)
  * [Use secure communication](./node-operators/resources/security.md#use-secure-communication)

#### Reference

A reference topic presents information in an easily scannable format, like a
table or list. The focus of reference topics is an information-oriented
description of specific components or characteristics of a product or feature.
This topic shouldn't contain any procedural content.

A reference topic works well when:

* It is consistent in structure, terminology, and tone.
* It contains concise, descriptive information that is relevant to its overview.
* It avoids high-level usage-instructions or description for the product as a
  whole.

##### Template

To write a reference topic, use the [reference](./community/contribute/templates.md#reference) template.

##### Guidelines

###### Title metadata

To write a title for a reference topic, use nouns that clearly describe the
contents of the topic. Make sure that the title is accessible to users who are
just getting started. For example, "Slashing rules", "Network parameters", "User
roles".

###### Reference section

Write one or two paragraphs summarizing the main idea of the topic. Explain what
all the entries defined in the topic have in common.

* The structure of reference topics varies based on what kind of information you
  are documenting. You might find it helpful to organize the contents using
  tables, lists, interactive object-schemas. For example, if you're writing a
  reference page for an API endpoint, you might define sections such as "General
  requirements", "Request parameters", and "Responses". The format  might be
  different for each section—"General requirements" might be a list, while
  "Request parameters" and "Responses" are tables.
* Use the "don't repeat yourself" (DRY) method and re-use content if it's
  written for the same audience, and it fits within your reference topic without
  modification.
* For consistency in longer reference pages, consider using H2 headers for each
  section, and H3 headers for subsections.

###### See also

Include a bulleted list of related pages to extend the user's understanding of
the concepts covered in this topic.

##### Examples

* [Ronin mainnet](./node-operators/resources/parameters/mainnet.md)
* [Security audits](./basics/audits.md)
* Reference topics within other pages:
  * [Command reference](./node-operators/setup/cli.md#command-reference)
  * [RON unlock schedule](./basics/tokenomics.md#ron-unlock-schedule)

#### Troubleshooting

A troubleshooting topic should be the final topic on a page. If a page has more
than five troubleshooting topics, put the content on a separate page that has
troubleshooting information exclusively. The title can be `Troubleshoot <feature>`
and in the sidebar, you can use just the word `Troubleshoot`.

A troubleshooting topic can be one of three types:

*An introductory topic*

This topic introduces the troubleshooting section of a page.

To create this topic, use the
[Introductory topic](./community/contribute/templates.md#introductory-topic)
template.

*A troubleshooting task*

The format is similar to the standard task, and the title follows the same verb
and noun pattern, such as “Debug a Ronin node."

To create this topic, use the
[troubleshooting task](./community/contribute/templates.md#troubleshooting-task) template.

*A troubleshooting reference*

This topic contains the error message. If the error has a few causes or
workarounds, consider organizing them as a table. To write a title for a
troubleshooting reference, consider including at least a partial error message. 

To create this topic, use the
[troubleshooting reference](./community/contribute/templates.md#troubleshooting-reference)
template.

#### Combined types

It might be helpful to group information in context to help people accomplish a
complex task, understand a set of related tasks, or describe an entire workflow.
You can combine different content types on a long page to ensure all contextual
content can be found in one place. Such a "combined page" also helps remove
duplicate content and makes room for potential growth as more options are added
to the product.

##### Guidelines

* Use concept, task, reference, and troubleshooting topics in a combined page.
  Do not combine with quickstart or tutorials—those are distinct types not
  suitable for combination.
* Separate different content types with section headings, and abide by title
  guidelines for each content type.
* If the combined page contains a task, use a task-based title. Otherwise, use a
  title that's broad enough to reflect all the content on the page.

##### Example

[Build a Ronin CLI](./node-operators/setup/cli.md)

#### Tutorial

Tutorials help people learn about products and solve real world problems by guiding them through the entire workflow to complete a task. Tutorials are more conversational in tone than other content. A tutorial feels like a developer-to-developer conversation while remaining accessible to readers with varied technical knowledge. Products with tutorials must already have a quickstart. For bite-sized workflows, use the quickstart model instead.

Tutorials are useful when someone has a basic understanding of the product and is interested in extending their understanding to solve a specific problem. Tutorials are for people who want expert advice and a detailed discussion of best practices related to their problem. Tutorials can also help people validate whether the solution is appropriate for their needs.

##### Template

To write a tutorial, use the [tutorial](./community/contribute/templates.md#tutorial) template.

##### Guidelines

###### Title metadata

* Follow the title guidelines for procedural articles.
* Don’t use "tutorial” or "guide” in the title.

###### Introduction section

* Clarify audience.
* Clearly state prerequisites and prior knowledge needed.
* State what the user accomplishes or builds.
* Include an example of a successful project.
* Do not include the expected amount of time that it may take users to complete the task-this depends on the experience level of the user and can be demoralizing for beginners.

###### Task section

* Based on the tutorial's audience, the steps can be less explicit and formal than those used in how-to guides.
  * Recommended: "From your profile, click **Settings**, and then click **Developer settings**".
  * Not recommended: "In the upper-right corner of any page, click your profile photo, then click **Settings**. In the left sidebar, click **Developer settings**."
* Link to other pages or resources rather than replicating them, to avoid interrupting the flow of information in the tutorial.
* Give visual cues. Use code blocks and screenshots heavily to help reassure users that they're performing the correct actions.
* Provide real examples. Don't tell a user to "enter a commit message." Instead, give them an appropriate example commit message that matches the previous steps.

###### Troubleshooting section

Acknowledge what may go wrong in the task and list a few common problems readers might run into with solutions.

###### Conclusion section

Review what the user has accomplished or built. Refer back to the project provided in the introduction as an example of a successful project.

###### Next steps

Include two-three actionable next steps that the user can take after completing the tutorial.

#### Quickstart

Quickstarts enable a user to quickly complete a discrete, focused task by illustrating a workflow with only essential steps, in about five minutes or 600 words. Quickstarts can be used for quickly getting set up with a new tool, or for quickly completing another task. For more complex tasks, use a tutorial.

Quickstarts are useful when someone already understands the feature or product and is ready to try it out. Users of quickstarts are not looking for an explanation and don't need to be convinced to use the product––they just want instructions quickly. Users who don't understand a step are willing to dig deeper in a separate doc.

##### Template

To write a quickstart guide, use the [quickstart](./community/contribute/templates.md#quickstart) template.

##### Guidelines

###### Title metadata

* When the guide helps someone get started with a new tool, preface the title with "Quickstart". For example, "Quickstart for Sky Mavis Account."
* For other use cases, follow the title guidelines for procedures and omit the word "Quickstart."

###### Introduction section

Highlight that this guide is quick and to-the-point by using phrasing such as the following:

* Quickly add `feature` to your project.
* The essentials for getting started with `product`.
* Clarify audience.
* Clearly state prerequisites and prior knowledge needed.
* State what the user accomplishes or builds.

###### Task section

* Based on the quickstart's audience, the steps can be less explicit and formal than those used in task content.
* Link to other pages or resources rather than replicating them, to avoid interrupting the flow of information.
* Give visual cues. Use code blocks and screenshots heavily to help reassure users that they're performing the correct actions.

###### Troubleshooting section (optional)

If it exists, link to any relevant troubleshooting content rather than including it in the document.

###### Next steps

* Provide a quick recap of what has been accomplished in the quick start as a means of transitioning to next steps.
* Include two-three actionable next steps that the user take after completing the quickstart. Always link to concepts on the feature or product.

## Content style guide

Ronin documentation adheres to the [content style guide](./community/contribute/style-guide.md).

## Documentation linter

Ronin documentation uses the [Vale](https://vale.sh/) linter to enforce the
style guide.

### Install Vale

Follow the [official installation instruction](https://vale.sh/docs/vale-cli/installation/).

### Run Vale

Run the tool with `vale <file-name` or `vale <directory-name>`.

### Resolve errors

Vale returns three types of alerts—`suggestion`, `warning`, and `error`. You
must resolve all `error` alerts before creating a PR. The other two types are
recommended to resolve but they're not mandatory.

### Add new terms to vocabulary

You can add new approved or rejected spelling rules to the vocabulary used by
Vale. To add a new approved rule, add the word to
[utils/vale/styles/Vocab/Ronin/accept.txt](https://github.com/axieinfinity/ronin-documentation/blob/main/.github/utils/vale/styles/Vocab/Ronin/accept.txt).
For a rejected rule, add the word to
[utils/vale/styles/Vocab/Ronin/reject.txt](https://github.com/axieinfinity/ronin-documentation/blob/main/.github/utils/vale/styles/Vocab/Ronin/reject.txt).
The rule is case-sensitive.

### Ignore Vale inline

If you want to turn off Vale inline, wrap the text in these comments:

```markdown
<!-- vale off -->

This is your text

more text here...

<!-- vale on -->
```

### Vale styles

Ronin uses the [Google](https://github.com/errata-ai/google) style for the
[Google developer documentation style guide](https://developers.google.com/style).
The style definitions are located in the `/static/styles` directory,
and the Vale config lives in `/.vale.ini`.

## Self-review checklist

As a documentation contributor, you should always review your PR against this
checklist:

* [ ] If you created a new page, make sure that it uses one of the
  [templates](./community/contribute/templates.md).
* [ ] Make sure that screenshots and diagrams are stored in the `assets`
  directory in the category where the Markdown file is.
* [ ] Compare your PR's output in the preview environment to confirm that the
  output matches the source and that everything is rendering as expected. Look
  out for typos, issues with lists and tables, or content that doesn't follow
  the style guide.
* [ ] Ensure technical accuracy of the content. Try to test your tasks and run
  all commands by yourself.
* [ ] Run [Vale](#run-vale) in your Markdown files to check adherence to the
  [style guide](./community/contribute/style-guide.md).  
* [ ] Spot and fix any grammar and spelling errors. Vale might not highlight
  those.
* [ ] If there are any failing checks in your PR, such as broken links,
troubleshoot them until they're passing.
