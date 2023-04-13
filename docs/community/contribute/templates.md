---
title: Templates
description: Templates for Ronin docs content.
---

# Templates for Ronin docs
You can copy any of these templates into a new Markdown file as the first step in creating a new article and opening a pull request:

```
* [Concept](#concept)
* [Task](#task)
* [Reference](#reference)
* [Troubleshooting](#troubleshooting)
* [Get started](#get-started)
* [Tutorial](#tutorial)
```

## Concept

```
---
title: Noun or noun phrase
description: Brief description of the page's contents.
---

# Title (Replicate the title from the metadata. Remove this header if you're not using this template as a separate page.)

## Introduction
Write one or two paragraphs about the main idea of the topic. Call this section "Overview" or "Introduction".

## Concept title
Write a paragraph that explains what this thing is. Add diagrams if necessary. Give this section a title more related to the idea of the topic. Keep adding body sections to describe all parts of the subject until you've completed the topic.

## See also
An optional section that can contain links to other content that the user can read to reinforce the understanding of the information covered in this topic.

* [Page title](Page URL)
```

For guidelines on writing concept topics, see [Content model](./contribution-guide.md#concept).

## Procedure
```
---
title: Start with a verb
description: Brief description of the page's contents.
---

# Title (Replicate the title from the metadata. Remove this header if you're not using this template as a separate page.)

## Introduction
Write one or two paragraphs that explain what the procedure does and its expected outcome. For example: "This guide explains how to <outcome> so that you can <do this after>".

## Prerequisites
Optionally, explain what knowledge the user needs to have, or what configuration they must complete, before starting.

## Procedure title
Write the steps of the procedure following the instructions in https://developers.google.com/style/procedures. Keep adding procedure sections until you've completed the page.

## See also
An optional section that can contain links to other content that the user can read to reinforce the understanding of the information covered in this topic.

* [Page title](Page URL)

```

For guidelines on writing procedure topics, see [Content model](./contribution-guide.md#procedure).

## Reference

```
---
title: Nouns describing the topic
description: Brief description of the page's contents.
---

# Title (Replicate the title from the metadata. Remove this header if you're not using this template as a separate page.)

## Introduction
Write one or two paragraphs about the main idea of the topic.

## Reference title
Optionally, write a paragraph to describe the piece of reference information that follows—a bulleted list, a table, or a code block.
Keep adding body sections to describe all parts of the subject until you've completed the topic.

## See also
An optional section that can contain links to other content that the user can read to reinforce the understanding of the information covered in this topic.

* [Page title](Page URL)
```

For guidelines on writing reference topics, see [Content model](./contribution-guide.md#reference).

## Troubleshooting

### Introductory topic

```
## Troubleshooting

When working with <feature>, you might encounter the following issues.
```

### Troubleshooting procedure

```
---
title: Start with a verb related to resolving the error
description: Brief description of the page's contents.
---

# Title (Replicate the title from the metadata. Remove this header if you're not using this template as a separate page.)

## Introduction
Write one or two paragraphs to clarify the audience, what the error is and when it occurs. For example: "You might get an error that states <error message>. This error occurs when ..."

## Prerequisites
Optionally, explain what knowledge the user needs to have, or what configuration they must complete, before resolving the error.

## Steps
Write the steps of the procedure following the instructions in https://developers.google.com/style/procedures. Keep adding procedure sections until you've completed the page.

## See also
An optional section that can contain links to other content that the user can read to reinforce the understanding of the information covered in this topic.

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
description: Introduce the page and highlight that it's quick and to the point.
---

# Title ("Get started with <feature or product>")

## Introduction
Write one or two paragraphs that explain whom the get started guide is for, and what the user will accomplish after completing it.

## Prerequisites
Optionally, explain what knowledge the user needs to have, or what configuration they must complete, before starting.

## Steps
Write the steps of the procedure following the instructions in https://developers.google.com/style/procedures. Keep adding procedure sections until you've completed the page.

## Next steps
Provide a recap and include actionable next steps that the user can take after completing this page.
```

## Tutorial

```
---
title: Start with a verb
description: Introduce the page and highlight that it's a tutorial.
---

# Tutorial title

## Introduction
Write one or two paragraphs that explain the following:
* Whom the tutorial is for.
* What the user will accomplish after completing the tutorial.
* What technologies the user will use.

## Prerequisites
Optionally, explain what knowledge the user needs to have, or what configuration they must complete, before starting.

## Step 1. Do this thing
Describe in one sentence what the user will need to do in this step. 

Then, write the steps of the task following the instructions in https://developers.google.com/style/procedures. Try to include examples.

## Step 2. Do the next thing
Describe in one sentence what the user will need to do in this step. 

Then, write the steps of the task following the instructions in https://developers.google.com/style/procedures. Try to include examples.

Add more steps until the tutorial is complete.

## Conclusion
Optionally, add a paragraph or two about what the user has accomplished by following this tutorial.

## See also
An optional section that can contain links to other content that the user can read to reinforce the understanding of the information covered in this tutorial.

* [Page title](Page URL)

```

For guidelines on writing tutorials, see [Content model](./contribution-guide.md#tutorial).
