---
title: Templates
description: Markdown templates for Ronin documentation.
toc_min_heading_level: 2
toc_max_heading_level: 2
---

## Overview

This reference page contains a list of Markdown templates that you can use when contributing to the [Ronin chain documentation](https://docs.roninchain.com). Just copy any template into a new Markdown file as the first step in creating a new page and [opening a new pull request](./../../CONTRIBUTING.md#work-with-a-pull-request) (PR).

## Headers

In the templates, H2 header is a top-level header. Do not use H1 headers.

```markdown
---
title: Document title is set in metadata
---

## Section header

Content

### Sub-section header

Content
```

Don't skip levels (for example, don't use H2 then H4).

## Title metadata

All the templates contain the `title` front matter attribute. But sometimes
the title can get so long it gets truncated in the sidebar. To prevent that, you
can give the page a shorter, mode sidebar-friendly title by using the `sidebar_label`
front matter.

```markdown
title: Security hardening for your validator node
```

Example with a shorter title defined in the `sidebar_label` attribute:

```markdown
---
sidebar_label: Security hardening
title: Security hardening for your validator node
---
```

## Explanation

```markdown
---
title: Noun or noun phrase
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Overview

<!-- Summarize what this explanation is about. -->

## Explanation topic

<!-- Write one or two paragraphs about the main idea of the topic, as a summary. Add diagrams if necessary. Keep adding more sections to describe all elements of the topic until you've completed the article. -->

## See also

<!-- An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered
in this topic. -->

* [Page title](Page URL)
```

For guidelines on writing explanation topics, see
[Explanation guidelines](./../../CONTRIBUTING.md#explanation-guidelines).

## How-to guide

```markdown
---
title: Start with a verb
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Overview

<!-- Briefly describe the outcome of the how-to and optionally, what the user should be
able to do after completing the steps. -->

## Before you start

<!-- An optional section to include prerequisite information or specific permissions information. -->

## Task name

<!-- Write procedural steps following the instructions in
https://developers.google.com/style/procedures. -->

## See also

<!-- An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered
in this topic. -->

* [Page title](Page URL)
```

For guidelines on writing task topics, see
[How-to guide guidelines](./../../CONTRIBUTING.md#how-to-guide-guidelines).

## Reference

```markdown
---
title: Use nouns to describe the topic
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Overview

<!-- An optional section to briefly describe the main idea of the page. -->

## Reference entry

<!-- A table or other structured presentation of entries. For instructions, refer to
https://github.com/axieinfinity/ronin-documentation/blob/main/docs/CONTRIBUTING.md#reference. -->

## See also

<!-- An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered
in this topic. -->

* [Page title](Page URL)
```

For guidelines on writing reference topics, see
[Reference guidelines](./../../CONTRIBUTING.md#reference-guidelines).

## Troubleshooting

### Introductory topic

```markdown
## Troubleshooting

When working with <feature>, you might encounter the following issues:
```

### Troubleshooting how-to

```markdown
---
title: Start with a verb related to resolving the error
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Overview

<!-- An optional section to briefly describe the main idea of the page. -->

## Symptom name

<!-- Describe the symptom here. For example, give the text of the error message or describe the performance issue the user might experience: "You might get an error that states
{error message}. This error occurs when {situation}."
Include prerequisite information or specific permissions information here.
Then write procedural steps following the instructions in
https://developers.google.com/style/procedures. -->

## See also

<!-- An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered
in this topic. -->

* [Page title](Page URL)
```

### Troubleshooting reference

```markdown
---
title: Use nouns to describe the topic
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Overview

<!-- An optional section to summarize what the entries on the page have in common. -->

## Subset of errors

### Error message or error description

<!-- Write the section title as the error message or its description.
Use the following structure to describe the error:

"You might get an error that states {error message}.

This error occurs when {situation}.

To resolve, {action}." -->

<!-- Keep adding sections until you've mentioned all errors. -->
```

For guidelines on writing troubleshooting topics, see
[Troubleshooting guidelines](./../../CONTRIBUTING.md#troubleshooting-guidelines).

## Quickstart

```markdown
---
title: Quickstart title
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Overview

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

## Step 2: Do the next thing

<!-- Rinse and repeat, adding steps and tasks until the tutorial is complete. -->
<!-- Remember to show code snippets in context. -->

## Next steps

<!-- Provide a quick recap of what has been accomplished in the quickstart as a means of transitioning to the next step. Include two-three actionable next steps that the user take after completing the quickstart. Always link to a concept related to this product. -->
```

For guidelines on writing quickstarts, see
[Quickstart guidelines](./../../CONTRIBUTING.md#quickstart-guidelines).

## Tutorial

```markdown
---
title: Start with a verb
description: Write a brief intro to give readers a quick understanding of what's in the document so they can decide if it's relevant to them.
---

## Overview

<!-- The tutorial overview should include the following in a short paragraph:

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

## Step 2: Do the next thing

<!-- Rinse and repeat, adding steps and tasks until the tutorial is complete. -->
<!-- Remember to show code snippets in context. -->

## See also

<!-- An optional section that can contain links to other content that the user
can read to reinforce the understanding of the information covered in
this tutorial. -->

* [Page title](Page URL)

```

For guidelines on writing tutorials, see
[Tutorial guidelines](./../../CONTRIBUTING.md#tutorial-guidelines).
