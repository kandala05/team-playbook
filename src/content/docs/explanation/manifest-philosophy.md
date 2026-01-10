---
title: The Manifest Philosophy
description: Our team's Documentation-First, AI-Augmented workflow philosophy
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

# The Manifest Philosophy

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│  Documentation  │ ──▶  │  manifest.json  │ ──▶  │  AI Assistant   │ ──▶  │ Code Generation │
│   (V0 Docs)     │      │  (Structured)   │      │   (Context)     │      │   (Aligned)     │
└─────────────────┘      └─────────────────┘      └─────────────────┘      └─────────────────┘
        │                        │                        │                        │
   Human-readable          Machine-readable         Understands intent      Matches architecture
   Diataxis structure      AI-consumable index      Prioritizes context     Follows patterns
```

Our team follows a **Documentation-First, AI-Augmented** workflow. Every project begins with a `MANIFEST.md` and a **V0 Documentation Site**.

## Why Documentation First?

Starting with documentation forces clarity:
1. **Problem Definition**: Articulate the problem before solving it
2. **Design Thinking**: Architecture decisions documented before implementation
3. **AI Context**: LLMs generate code that matches your intent
4. **Team Alignment**: Everyone shares the same mental model

## The Dual-User Theory
We write documentation for two distinct users:
1. **The Human (Developer/End-User):** Needs to understand the "How-to" and "Tutorials."
2. **The LLM (Assistant):** Needs the "Explanation" and "Reference" to generate V1+ code that aligns with our architectural intent.

## The Standard Structure
Every repository must contain:
* `MANIFEST.md`: The strategic intent.
* `docs/`: The V0 site (Astro/Starlight).
* `README.md`: Local setup instructions.

## The Documentation Manifest

Every V0 documentation site generates a machine-readable `manifest.json` file that serves as a **structured index for AI consumption**. This manifest is the bridge between human-readable documentation and AI-augmented development.

### What is manifest.json?

The documentation manifest is a JSON file generated during the build process that:

- **Catalogs all documentation** - Lists every explanation, reference, how-to, and tutorial
- **Provides AI context** - Tells AI assistants which files to prioritize
- **Enables discovery** - Allows automated tools to understand the documentation structure
- **Supports aggregation** - Multiple projects can combine their manifests for unified search

### Why It Matters

When you start a new project following this playbook, your AI assistant can:

1. **Fetch the manifest** - `GET https://your-project.com/docs/manifest.json`
2. **Understand the structure** - Know what documentation exists and where
3. **Read prioritized content** - Focus on files marked with `aiContext`
4. **Generate aligned code** - Create implementations that match documented architecture

### Example: This Playbook's Manifest

This playbook's manifest is available at:  
**[https://kandala05.github.io/team-playbook/manifest.json](https://kandala05.github.io/team-playbook/manifest.json)**

```json
{
  "name": "team-playbook",
  "documentation": {
    "framework": "diataxis",
    "sections": {
      "explanation": {
        "files": [
          {
            "path": "/explanation/manifest-philosophy/",
            "title": "The Manifest Philosophy",
            "aiContext": "Read this first to understand the team's development philosophy"
          }
        ]
      }
    }
  },
  "aiGuidance": {
    "primaryContext": [
      "/explanation/manifest-philosophy/",
      "/reference/manifest-template/"
    ]
  }
}
```

### How AI Assistants Use It

When you configure an AI assistant with your project, it can:

**Step 1: Discover Documentation**
```bash
curl https://your-project.com/docs/manifest.json
```

**Step 2: Read Primary Context**
```javascript
// AI fetches files listed in aiGuidance.primaryContext
const architectureDocs = await fetch('/explanation/architecture/')
const referenceSchemas = await fetch('/reference/data-models/')
```

**Step 3: Generate Code**
```
AI: "Based on the architecture in /explanation/architecture/, 
I'll generate a data model that follows the documented patterns..."
```

### Integration with Platform

As we build more projects (support-app, cell-router, etc.), each will generate its own manifest. These can be aggregated through a unified API:

```
GET https://platform.yourdomain.com/api/context

Returns:
{
  "projects": [
    {
      "name": "team-playbook",
      "manifest": { ... }
    },
    {
      "name": "support-app",
      "manifest": { ... }
    }
  ]
}
```

This enables AI assistants to have **complete platform context** across all projects.

### Generating Your Own Manifest

Every project following this playbook should include a `scripts/generate-manifest.js` that runs during the build:

```json
// package.json
{
  "scripts": {
    "build": "node scripts/generate-manifest.js && astro build"
  }
}
```

The script creates `public/manifest.json` which gets deployed with your documentation site.

See the [Bootstrap Guide](/team-playbook/how-to/bootstrap/) for implementation details, or the [Manifest Schema Reference](/team-playbook/reference/manifest-schema/) for the complete JSON schema.
