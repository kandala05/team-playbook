---
title: Configure AI Assistant Context
description: How to set up your AI coding assistant with project documentation context
---

# Configure AI Assistant Context

This guide shows you how to configure AI coding assistants (Claude, ChatGPT, Cursor, etc.) to use your project's documentation for context-aware code generation.

## Prerequisites

- A project following the [playbook standards](/team-playbook/how-to/bootstrap/)
- A deployed documentation site with `manifest.json`
- An AI coding assistant (Claude Code, Cursor, GitHub Copilot Chat, etc.)

---

## Step 1: Locate Your Manifest

Every project following this playbook exposes a manifest at:

```
https://your-docs-site.com/manifest.json
```

For example, this playbook's manifest:
```bash
curl https://kandala05.github.io/team-playbook/manifest.json | jq
```

The manifest tells the AI which documentation to prioritize.

---

## Step 2: Create a Context File

Create a `CLAUDE.md` (or similar) file in your project root that points to your documentation:

```markdown
# Project Context

## Documentation
This project follows the Documentation-First approach.

- **Docs Site**: https://your-project.github.io/docs/
- **Manifest**: https://your-project.github.io/docs/manifest.json

## Primary Context Files
Before generating code, read these files:
1. /explanation/architecture/ - System design decisions
2. /reference/data-models/ - Database schemas and types
3. /reference/api/ - API contracts

## Coding Standards
- Follow patterns documented in /explanation/patterns/
- Use TypeScript with strict mode
- Follow the error handling approach in /reference/error-handling/
```

---

## Step 3: Configure Your AI Assistant

### Claude Code

Claude Code automatically reads `CLAUDE.md` from your project root. Add documentation URLs:

```markdown
# CLAUDE.md

## Documentation Context
Fetch and read these before coding:
- https://your-project.github.io/docs/manifest.json

## Architecture
[Paste key architecture decisions or link to docs]

## Patterns
[Document coding patterns the AI should follow]
```

### Cursor

In Cursor, add context via `.cursorrules`:

```
# .cursorrules

You are working on [project-name].

Before generating code:
1. Check the manifest at: https://your-project.github.io/docs/manifest.json
2. Follow architecture documented at: /explanation/architecture/
3. Use patterns from: /explanation/patterns/

Coding standards:
- TypeScript strict mode
- Functional components for React
- Drizzle ORM for database access
```

### ChatGPT / Custom GPTs

When starting a conversation or creating a Custom GPT:

```
Context for this project:

Documentation: https://your-project.github.io/docs/
Manifest: https://your-project.github.io/docs/manifest.json

Before generating code, fetch the manifest and read the files listed
in aiGuidance.primaryContext. This ensures your code matches our
architecture and patterns.
```

---

## Step 4: Provide Context in Prompts

When asking for code generation, reference specific documentation:

### Good Prompt Example
```
Based on the architecture in /explanation/architecture/ and the
data models in /reference/data-models/, create a new API endpoint
for user preferences.

Follow the error handling patterns we use.
```

### Better Prompt Example
```
I need to add a user preferences feature.

Context:
- Read /explanation/architecture/ for system design
- Read /reference/api/ for existing API patterns
- Read /reference/data-models/ for our schema conventions

Generate:
1. Drizzle schema for user_preferences table
2. API route handler following our patterns
3. TypeScript types
```

---

## Step 5: Verify AI Understanding

After providing context, verify the AI understood:

```
Before we start coding, summarize:
1. What architecture pattern does this project use?
2. What ORM/database setup do we have?
3. What are the key coding conventions?
```

If the AI's summary doesn't match your documentation, provide clarification.

---

## Using manifest.json Programmatically

For advanced setups, you can fetch the manifest and feed specific docs to your AI:

```javascript
// Example: Fetch manifest and get primary context files
async function getAIContext(manifestUrl) {
  const manifest = await fetch(manifestUrl).then(r => r.json());

  // Get priority files for AI
  const contextFiles = manifest.aiGuidance.primaryContext;

  // Fetch each file's content
  const context = await Promise.all(
    contextFiles.map(async (path) => {
      const url = `${manifest.repository}/docs${path}`;
      const content = await fetch(url).then(r => r.text());
      return { path, content };
    })
  );

  return context;
}
```

---

## Platform-Wide Context

When working across multiple projects, use the aggregated context API (if available):

```bash
# Fetch context for all platform projects
curl https://platform.yourdomain.com/api/context | jq
```

This returns manifests from all projects, giving AI assistants complete platform awareness.

---

## Troubleshooting

### AI generates code that doesn't match patterns

1. Check that your manifest's `aiGuidance.primaryContext` points to the right files
2. Explicitly reference documentation in your prompts
3. Ask the AI to explain which documentation it's following

### AI can't access documentation URLs

1. Ensure your docs site is publicly accessible
2. Check CORS settings if fetching programmatically
3. Copy relevant documentation sections directly into context

### Context is too large

1. Use `aiGuidance.primaryContext` to prioritize key files
2. Summarize lengthy documentation
3. Create a condensed `AI_CONTEXT.md` with essential information

---

## Related

- [Bootstrap a New Project](/team-playbook/how-to/bootstrap/) - Initial project setup
- [Manifest Schema Reference](/team-playbook/reference/manifest-schema/) - manifest.json structure
- [The Manifest Philosophy](/team-playbook/explanation/manifest-philosophy/) - Why we use this approach
