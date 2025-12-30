---
title: Bootstrapping a Project
description: Step-by-step guide to initialize a new repository following our Documentation-First and Manifest-driven standards
---

# How-to: Bootstrap a New Project

Follow these steps to initialize a repository that adheres to our **Documentation-First** and **Manifest-driven** standards.

## 1. Create the Core Files
Start by initializing your git repository and creating the mandatory "Meta" files.

```bash
mkdir my-new-project && cd my-new-project
git init
touch MANIFEST.md README.md .gitignore
```

## 2. Populate the MANIFEST.md
Open MANIFEST.md and copy the [Standard Template](/reference/manifest-template/).

Define your Problem Statement.

Outline your V0, V1, and V2 phases.

Note: Do not start coding V1 until V0 is initialized.

## 3. Initialize V0 (The Context Engine)
We use Astro Starlight for all V0 documentation. This provides the LLM with the context it needs to assist in V1.


```bash
# From the project root
npm create astro@latest -- --template starlight
```
When prompted for the directory, use docs.

## 4. Connect to your AI Assistant
If you are using an AI-enabled IDE (like Cursor or VS Code with Gemini):

Open your project root.

Ensure the AI has indexed the MANIFEST.md and the docs/explanation folder.

Prompt the AI: "I am starting V1 of the project defined in MANIFEST.md. Please reference the architecture in docs/explanation to generate the base schema."

## 5. Verify the "Standard" Structure
Your final directory should look like this:

- /docs (Astro Starlight)

- MANIFEST.md (Strategic Intent)

- README.md (Setup Instructions)

- .gitignore


