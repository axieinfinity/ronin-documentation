---
description: Guide for contributing to this documentation.
---

# Contribution guide
Thank you for your interest in contributing to the Ronin documentation. As a community member, you're invited and encouraged to contribute to this documentation.

We appreciate all contributions from the community and only ask that you agree to follow this contribution guide and the [style guide](./style-guide.md).

## How is documentation written and served?

## How is documentation organized?
### Directory structure

| Directory             | Purpose                                                                                                                                                                                          |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `docs`                | All documentation files and related static assets are located in this directory.                                                                                                                  |
| `docs/basics`         | General information about Ronin.                                                                                                                                                                 |
| `docs/community`      | Section that explains how to join the Ronin social media and sign up to the newsletter, describes the community initiatives we have, and instructs users how to contribute to the documentation. |
| `docs/delegators`     | Documentation for delegators.                                                                                                                                                                    |
| `docs/developers`     | One page that points readers to the Ronin developer documentation published on the Sky Mavis Developer Portal.                                                                                   |
| `docs/node-operators` | Documentation for node operators.                                                                                                                                                                |
| `docs/validators`     | Documentation for validators.                                                                                                                                                                    |

Each folder contains markdown files and an `assets` folder where screenshots and diagrams are stored.

### Content model
This content model explains the goals of each type of content we create within Ronin documentation, and what to include when writing or updating a page. We use these types across all documentation sets to provide a consistent user experience, and only publish content that follows the model.

It’s also easier to maintain and update consistent content, making it quicker to contribute to docs.

#### Content structure
Documentation is organized into multiple levels of hierarchy on the site:
* Top-level category
  * Category
    * Page

##### Homepage content
The Ronin documentation homepage, [docs.roninchain.com](https://docs.roninchain.com) includes cards linked to all the top-level categories to help people find information about the Ronin feature that they want to use.

The space on the homepage is limited, so we have to carefully consider what goes on this page so that people can find information fast.

Content on the homepage mimics the top-level categories—four cards for different types of audience—delegator, developers, node operators, validators, and two cards covering the Ronin basics and community information.

If a new top-level category is created, it might be added to the homepage after discussions with the community. Regular categories are not published on the homepage.

##### Top-level category
Top-level categories are organized a Ronin audience type—delegators, validators, node operators, developers, and user intention—basics (to learn) and community (to get involved). All top-level categories appear on the homepage. You should only create a top-level category when there is a large amount of content to be contained in it and the content is broken down into multiple nested categories. If the content can fit in any existing top-level category, it should belong in that existing top-level category.

* Top-level categories are equally important to one another, except for [Developers](./../../developers/), which contains only one page.
* Most top-level categories have an auto-generated layout with a brief introduction at the top and the list of doc cards that represent the categories and pages inside that top-level category. There are exceptions, however. For example, the [Node operators](./../../node-operators/) category is a manually written page, where doc cards are displayed using a custom helper, and organized into sections using headings.

##### Category
Categories are usually organized around a feature or a discrete set of tasks within a top-level category—for example, "Manage profile" for validators, or "Saigon testnet" guides for node operators. 

* Categories usually start small and grow with the product.
* When categories have more than ten pages, consider breaking the content into additional sub-categories.
* Every category must have an auto-generated category page with an intro and a list of doc cards, or a manually written page using the custom helper to display the doc cards.

##### Page
A page is the basic unit of content for Ronin docs—while we use multiple content types, they're all published as pages. Each content type has its own purpose, format, and structure, yet we use standard elements in every page type, like intros, to ensure pages provide a consistent user experience.

##### Sidebar
The Ronin docs sidebar is used to group multiple related pages into sub-categories and top-level categories, provide paginated navigation on each page, and generally to structure the documentation in a discoverable way.

* The sidebar is defined in `sidebars.js` at the root level of the Ronin docs repository.
* If you're writing a new page or are organizing a new category, make sure to add it to the sidebar so that it's discoverable.
* Every top-level category and sub-category in the sidebar must have an auto-generated category page with an intro and a list of doc cards, or a manually written page using the custom helper to display the doc cards.
* While Docusaurus can create a sidebar automatically from the filesystem structure, avoid using empty categories—those that can be clicked, but display no content.

##### Content order
We organize content predictably within top-level categories, regular categories, and pages, from broadest applicability to most specific, following this order:
* Concepts (what a feature is)
* Task (how to enable a feature, how to use a feature, how to manage a feature, how to disable a feature)
* Reference (list of related parameters, commands)
* Troubleshooting (how to resolve issues)

#### Content types
Any of these content types can be shared as a page on its own, and some content types can also be used as topics within a larger page. We will therefore refer to the content types as "topics" in the following sections.

##### Concept
A concept topic explains background information and provides context-specific knowledge on a particular concept. The goal of a concept topic is to help readers understanding, not to teach concepts or provide steps in a task.

To write a concept topic, use the [concept template](./).

When writing, follow these tips:
* Answer questions "What is this?" and "Why should I use it?"
* Give context to a subject or topic that your readers might not have.
* Provide essential facts, background, and diagrams to help your readers build a foundational understanding of a product or topic.
* Explain the background about a concept that might not be evident in reference or how-to articles.
* Help readers make connections between related concepts, and form a better understanding of the subject.

To write a title for a concept topic, use a noun or a noun phrase. For example: "Rewards", "Slashing rules", "Introduction to nodes".

Examples of concept pages:
* [Slashing rules](./../../validators/slashing/slashing.mdx)
* [Rewards](./../../basics/rewards.md)
* [Introduction to nodes](./../../node-operators/introduction.md)

##### Task
Link

Guide

Examples

##### Reference
Link

Guide

Examples

##### Troubleshooting
Link

Guide

Examples

##### Multiple topics
Guide

Examples

## How do I make quality contributions?
Three things:
* Follow the style guide.
* Use templates.
* Review your writing.
* In extra time, take the technical writing courses from Google.

### Style guide
See [Style guide](./style-guide.md).

### Templates
See [Templates](./templates.md).

### Review
#### Self-review checklist
Bullet points

## How do I make my first contribution?
### Before contributing
Review this guide.

Consider the following:
* Join Discord and ask your question.

If you want to contribute, fixing mistakes might be a good start:


Your contribution must be submitted as a pull request. Before you create a pull request, make sure it only implements one fix.

### What contributions to make
There are several ways to get involved:
* Suggest improvements to existing content.
* Add review comments to existing pull requests.
* Propose new content.
* Create pull requests to fix issues yourself:
  * Spelling, grammar, or typo mistakes.
  * Code indentation, white spaces, or formatting changes.
  * Broken or missing links.
* Create pull requests for new content that other community members might find useful.

### How to contribute

#### Minor changes
Edit the file on GitHub

#### Major changes
Branch naming convention
Commit message convention

Process to clone, make changes, commit

## How are my contributions reviewed?
After your self-review, your PR is reviewed by Ronin maintainers—engineers and a technical writer.
