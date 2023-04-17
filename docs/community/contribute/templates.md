---
title: Templates
description: Templates for Ronin docs content.
---

# Templates for Ronin docs
You can copy any of these templates into a new Markdown file as the first step
in creating a new article and opening a pull request:

* [Concept](#concept)
* [Task](#task)
* [Reference](#reference)
* [Troubleshooting](#troubleshooting)
* [Get started](#get-started)
* [Tutorial](#tutorial)

## Headers
In the templates, H1 header is always reserved for the title of the page:

```
# Title

## A section header

Some text

### A sub-section header

Some other text
```

For sections headers, use H2 and lower levels, and don't skip levels (for
example, don't use H2 then H4).

If you're using a template not for creating a whole new page, but to add a new
topic to an existing page, then remove the H1 title header from the template,
and adjust the other header styles accordingly so that they match the existing
headers on the page.

## Title metadata
All the templates contain the `title` metadata attribute. By default, Docusaurus
generates a page title from the H1 header at the top of the page. But sometimes
the title can get so long it gets truncated in the sidebar. To prevent that, you
can give the page a shorter, mode sidebar-friendly title by using the `title`
metadata. Another reason is the page title might not be consistent with other
pages in a section. You can again edit the title metadata to achieve
consistency.

Example when no `title` is used:

```
# Security hardening for your validator node
```

Example with a shorter title defined in the `title` metadata:

```
---
title: Security hardening
---

# Security hardening for your validator node
```

## Concept

```
---
title: Noun or noun phrase
description: Brief description of the page's contents.
---

# Title 
(Replicate the title from the metadata. Remove this header if you're
not using this template as a separate page.)

## Introduction
Write one or two paragraphs about the main idea of the topic.
Call this section "Overview" or "Introduction".

## Concept body
Write a paragraph that explains what this thing is. Add diagrams if
necessary. Give this section a title more related to the idea of the
topic. Keep adding body sections to describe all parts of the subject
until you've completed the topic.

## See also
An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered
in this topic.

* [Page title](Page URL)
```

For guidelines on writing concept topics, see [Content
model](./contribution-guide.md#concept).

## Task
```
---
title: Start with a verb
description: Brief description of the page's contents.
---

# Title
(Replicate the title from the metadata. Remove this header if you're
not using this template as a separate page.)

## Introduction
Write one or two paragraphs that explain what the task does and its
expected outcome. For example: "This guide explains how to <outcome>
so that you can <do this after>".

## Prerequisites
Optionally, explain what knowledge the user needs to have, or what
configuration they must complete, before starting.

## Task body
Write the steps of the task following the instructions in
https://developers.google.com/style/procedures. You can call this section
"Steps" or use a name similar to the page title. For example: "Run a
validator node" is the page title, and "Install the node" is the
task body title.

## See also
An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered
in this topic.

* [Page title](Page URL)

```

For guidelines on writing task topics, see [Content
model](./contribution-guide.md#task).

## Reference

```
---
title: Nouns describing the topic
description: Brief description of the page's contents.
---

# Title

(Replicate the title from the metadata. Remove this header if you're
not using this template as a separate page.)

## Introduction

Write one or two paragraphs about the main idea of the topic.

## Reference body

Optionally, write a paragraph to describe the piece of reference
information that follows—a bulleted list, a table, or a code block.
Keep adding body sections to describe all parts of the subject until
you've completed the topic.

## See also

An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered
in this topic.

* [Page title](Page URL)
```

For guidelines on writing reference topics, see [Content
model](./contribution-guide.md#reference).

## Troubleshooting

### Introductory topic

```
## Troubleshooting

When working with <feature>, you might encounter the following issues:
```

### Troubleshooting task

```
---
title: Start with a verb related to resolving the error
description: Brief description of the page's contents.
---

# Title

(Replicate the title from the metadata. Remove this header if you're
not using this template as a separate page.)

## Introduction

Write one or two paragraphs to clarify the audience, what the error is
and when it occurs. For example: "You might get an error that states
<error message>. This error occurs when ..."

## Prerequisites

Optionally, explain what knowledge the user needs to have,
or what configuration they must complete, before resolving the error.

## Troubleshooting body

Write the steps of the task following the instructions in
https://developers.google.com/style/procedures. You can call this section
"Steps" or use a name similar to the page title. For example: "Debug a
validator node" is the page title, and "Debug the node" is the
troubleshooting body title.

## See also

An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered
in this topic.

* [Page title](Page URL)
```

### Troubleshooting reference

```
### Error message or its description

You might get an error that states <error message>.

This error occurs when ...

To resolve, ...
```

## Get started
```
---
title: Get started with <feature>
description: Introduce the page and highlight that it's quick
and to the point.
---

# Title
("Get started with <feature or product>")

## Introduction
Write one or two paragraphs that explain whom the get started guide
is for, and what the user will accomplish after completing it.

## Prerequisites
Optionally, explain what knowledge the user needs to have, or what
configuration they must complete, before starting.

## Get started body
Write the steps of the task following the instructions in
https://developers.google.com/style/procedures. You can call this section
"Steps" or use a name similar to the page title. For example: "Get started
with Ronin CLI" is the page title, and "Set up the CLI" is the get started
body title.

## Next steps
Provide a recap and include actionable next steps that the user can take
after completing this page.
```

## Tutorial

```
---
title: Start with a verb
description: Introduce the page and highlight that it's a tutorial.
---

# Title
(Replicate the title from the metadata.)

## Introduction
Write one or two paragraphs that explain the following:
* Whom the tutorial is for.
* What the user will accomplish after completing the tutorial.
* What technologies the user will use.

## Prerequisites
Optionally, explain what knowledge the user needs to have, or
what configuration they must complete, before starting.

## Step 1. Do this thing
Describe in one sentence what the user will need to do in this step. 

Then, write the steps of the task following the instructions in
https://developers.google.com/style/procedures. Try to include examples.

## Step 2. Do the next thing
Describe in one sentence what the user will need to do in this step. 

Then, write the steps of the task following the instructions in
https://developers.google.com/style/procedures. Try to include examples.

Add more steps until the tutorial is complete.

## Conclusion
Optionally, add a paragraph or two about what the user has
accomplished by following this tutorial.

## See also
An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered in
this tutorial.

* [Page title](Page URL)

```

For guidelines on writing tutorials, see [Content
model](./contribution-guide.md#tutorial).
