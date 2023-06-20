---
title: Templates
description: Markdown templates for Ronin documentation.
toc_min_heading_level: 2
toc_max_heading_level: 2
---

You can copy any of these templates into a new Markdown file as the first step
in creating a new page and opening a pull request (PR):

- [Headers](#headers)
- [Title metadata](#title-metadata)
- [Concept](#concept)
- [Task](#task)
- [Reference](#reference)
- [Troubleshooting](#troubleshooting)
  - [Introductory topic](#introductory-topic)
  - [Troubleshooting task](#troubleshooting-task)
  - [Troubleshooting reference](#troubleshooting-reference)
- [Quickstart](#quickstart)
- [Tutorial](#tutorial)

## Headers

In the templates, H2 header is a top-level header. Do not use  always reserved for the title of the page:

```markdown
---
title: Document title is set in metadata
---

## Section header

Content

### Sub-section header

Content
```

For sections headers, use H2 and lower levels, and don't skip levels (for
example, don't use H2 then H4).

## Title metadata

All the templates contain the `title` metadata attribute. By default, Docusaurus
generates a page title from the H1 header at the top of the page. But sometimes
the title can get so long it gets truncated in the sidebar. To prevent that, you
can give the page a shorter, mode sidebar-friendly title by using the `title`
metadata. Another reason is the page title might not be consistent with other
pages in a section. You can again edit the title metadata to achieve
consistency.

Example when no `title` is used:

```markdown
# Security hardening for your validator node
```

Example with a shorter title defined in the `title` metadata:

```markdown
---
title: Security hardening
---

# Security hardening for your validator node
```

## Concept

```markdown
---
title: Noun or noun phrase
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Concept section header

<!-- Write one or two paragraphs about the main idea of the topic, as a summary. Add diagrams if necessary. -->

## Another concept section header

<!-- An optional section for you to write one or two paragraphs about another element of the topic.
Keep adding more sections to describe all elements of the topic until you've completed the article. -->

## See also

<!-- An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered
in this topic. -->

- [Page title](Page URL)
```

For guidelines on writing concept topics, see
[Content model](./../../CONTRIBUTING.md#concept).

## Task

```markdown
---
title: Start with a verb
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Task section header

<!-- Include prerequisite information or specific permissions information here.
Then write procedural steps following the instructions in
https://developers.google.com/style/procedures. -->

## Another task section header

<!-- An optional section for you to write one or two paragraphs about another element of the topic.
Keep adding more sections to describe all elements of the topic until you've completed the article. -->

## Further reading

<!-- An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered
in this topic. -->

- [Page title](Page URL)

```

For guidelines on writing task topics, see
[Content model](./../../CONTRIBUTING.md#task).

## Reference

```markdown
---
title: Use nouns to describe the topic
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Reference section header

<!-- Write one or two paragraphs about the main idea of the topic, as a summary.
Add bulleted lists and tables if necessary.
For instructions, refer to
https://github.com/axieinfinity/ronin-documentation/blob/main/docs/CONTRIBUTING.md#reference. -->

## Another reference section header

<!-- An optional section for you to write one or two paragraphs about another element of the topic.
Keep adding more sections to describe all elements of the topic until you've completed the article. -->

## Further reading

<!-- An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered
in this topic. -->

- [Page title](Page URL)
```

For guidelines on writing reference topics, see
[Content model](./../../CONTRIBUTING.md#reference).

## Troubleshooting

### Introductory topic

```markdown
## Troubleshooting

When working with <feature>, you might encounter the following issues:
```

### Troubleshooting task

```markdown
---
title: Start with a verb related to resolving the error
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Task section header

<!-- Write one or two paragraphs to clarify the audience, what the error is
and when it occurs. For example: "You might get an error that states
<error message>. This error occurs when ..."
Include prerequisite information or specific permissions information here.
Then write procedural steps following the instructions in
https://developers.google.com/style/procedures. -->

## Another task section header

<!-- An optional section for you to write one or two paragraphs about another element of the topic.
Keep adding more sections to describe all elements of the topic until you've completed the article. -->

## Further reading

<!-- An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered
in this topic. -->

- [Page title](Page URL)
```

### Troubleshooting reference

```markdown
---
title: Use nouns to describe the topic
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Reference section header

<!-- Write one or two paragraphs about the main idea of the topic, as a summary.
For instructions, refer to
https://github.com/axieinfinity/ronin-documentation/blob/main/docs/CONTRIBUTING.md#reference. -->

### Error message section header

<!-- Write the section title as the error message or its description.
Use the following structure to describe the error:

"You might get an error that states <error message>.

This error occurs when <situation>.

To resolve, <action>." -->

### Another error message section header

<!-- Keep adding sections until you've mentioned all errors. -->
```

For guidelines on writing troubleshooting topics, see
[Content model](./../../CONTRIBUTING.md#troubleshooting).

## Quickstart

```markdown
---
title: Quickstart title
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Introduction

<!-- Build on the description above by doing the following:
- Clarifying the audience.
- Clearly stating prerequisites and prior knowledge needed.
- Stating what the user accomplishes or builds. -->

## Step 1: Do this thing

<!-- In one sentence, describe what the user does in this step. -->
<!-- Steps should break down the tasks the user completes in sequential order. -->
<!-- Avoid replicating conceptual information that is covered elsewhere, provide inline links instead. Only include conceptual information unique to this use case. -->

### Task section

<!-- A step may require the user to perform several tasks - break those tasks down into chunks, allowing the user to scan quickly to find their place if they navigated away from this screen to perform the task. Write the steps of the task following the instructions in
https://developers.google.com/style/procedures. -->

### Another task section

<!-- Remove all of these comments when you're done. -->

## Step 2: Do the next thing

<!-- Rinse and repeat, adding steps and tasks until the tutorial is complete. -->
<!-- Remember to show code snippets in context. -->

## Next steps

<!-- Provide a quick recap of what has been accomplished in the quick start as a means of transitioning to the next step. Include two-three actionable next steps that the user take after completing the quickstart. Always link to a concept related to this product. -->
```

For guidelines on writing quickstarts, see
[Content model](./../../CONTRIBUTING.md#quickstart).

## Tutorial

```markdown
---
title: Start with a verb
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Introduction

<!-- The tutorial introduction should include the following in a short paragraph:

- Clarify audience.
- State prerequisites and prior knowledge needed.
- State what the user accomplishes or builds and the user's problem it solves.
- Link to an example of the project the user completes. -->

## Step 1: Do this thing

<!-- In one sentence, describe what the user does in this step. -->
<!-- Steps should break down the tasks the user will complete in sequential order. -->
<!-- Avoid replicating conceptual information that is covered elsewhere, provide inline links instead. Only include conceptual information unique to this use case. -->

### Task section

<!-- A step may require the user to perform several tasks - break those tasks down into chunks, allowing the user to scan quickly to find their place if they navigated away from this screen to perform the task. Write the steps of the task following the instructions in
https://developers.google.com/style/procedures. -->

### Another task section

<!-- Remove all of these comments when you're done. -->

## Step 2: Do the next thing

<!-- Rinse and repeat, adding steps and tasks until the tutorial is complete. -->
<!-- Remember to show code snippets in context. -->

## Further reading

<!-- An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered in
this tutorial. -->

* [Page title](Page URL)

```

For guidelines on writing tutorials, see
[Content model](./../../CONTRIBUTING.md#tutorial).
