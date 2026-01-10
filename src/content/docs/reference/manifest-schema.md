---
title: Manifest Schema
description: Complete JSON schema documentation for manifest.json
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

# Manifest Schema Reference

This document provides the complete JSON schema for the `manifest.json` file that every project generates for AI consumption.

## Overview

The manifest.json file is generated during build and deployed with your documentation site. It provides a structured index that AI assistants can parse to understand your project.

**Location:** `https://your-project.com/docs/manifest.json`

## Complete Schema

```json
{
  "name": "string",
  "version": "string",
  "description": "string",
  "repository": "string",
  "documentation": {
    "framework": "diataxis",
    "sections": {
      "explanation": { ... },
      "reference": { ... },
      "howto": { ... },
      "tutorials": { ... }
    }
  },
  "aiGuidance": {
    "primaryContext": ["string"],
    "codingStandards": "string",
    "patterns": "string"
  },
  "metadata": {
    "plane": "string",
    "capability": "string",
    "tags": ["string"],
    "lastUpdated": "ISO 8601 date"
  }
}
```

## Field Definitions

### Root Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Project identifier (e.g., `team-playbook`) |
| `version` | string | Yes | Semantic version (e.g., `1.0.0`) |
| `description` | string | Yes | Brief project description |
| `repository` | string | No | GitHub repository URL |

### Documentation Object

The `documentation` object describes your docs structure following the Diataxis framework.

```json
{
  "documentation": {
    "framework": "diataxis",
    "sections": {
      "explanation": {
        "description": "Conceptual understanding and philosophy",
        "files": [...]
      },
      "reference": {
        "description": "Templates and specifications",
        "files": [...]
      },
      "howto": {
        "description": "Step-by-step implementation guides",
        "files": [...]
      },
      "tutorials": {
        "description": "Learning-oriented walkthroughs",
        "files": [...]
      }
    }
  }
}
```

### File Entry Schema

Each file entry in a section follows this structure:

```json
{
  "path": "/explanation/manifest-philosophy/",
  "title": "The Manifest Philosophy",
  "summary": "Documentation-First, AI-Augmented workflow",
  "aiContext": "Read this first to understand the team's development philosophy"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `path` | string | Yes | URL path to the documentation page |
| `title` | string | Yes | Human-readable page title |
| `summary` | string | No | Brief description of content |
| `aiContext` | string | No | Guidance for AI on how to use this file |

### AI Guidance Object

The `aiGuidance` object tells AI assistants how to prioritize content.

```json
{
  "aiGuidance": {
    "primaryContext": [
      "/explanation/manifest-philosophy/",
      "/reference/manifest-template/"
    ],
    "codingStandards": "/reference/standards/",
    "patterns": "/explanation/patterns/"
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| `primaryContext` | array | Files AI should read first for project understanding |
| `codingStandards` | string | Path to coding standards documentation |
| `patterns` | string | Path to design patterns documentation |

### Metadata Object

The `metadata` object provides organizational context.

```json
{
  "metadata": {
    "plane": "developer-control-plane",
    "capability": "engineering-standards",
    "tags": ["platform-engineering", "documentation", "standards"],
    "lastUpdated": "2024-01-15T10:30:00Z"
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| `plane` | string | Platform plane this project belongs to |
| `capability` | string | What capability this project provides |
| `tags` | array | Searchable tags for discovery |
| `lastUpdated` | string | ISO 8601 timestamp of last generation |

## Full Example

```json
{
  "name": "team-playbook",
  "version": "1.0.0",
  "description": "Documentation-First, AI-Augmented software development standards",
  "repository": "https://github.com/kandala05/team-playbook",
  "documentation": {
    "framework": "diataxis",
    "sections": {
      "explanation": {
        "description": "Conceptual understanding and philosophy",
        "files": [
          {
            "path": "/explanation/manifest-philosophy/",
            "title": "The Manifest Philosophy",
            "summary": "Documentation-First, AI-Augmented workflow",
            "aiContext": "Read this first to understand the team's development philosophy"
          }
        ]
      },
      "reference": {
        "description": "Templates and specifications",
        "files": [
          {
            "path": "/reference/manifest-template/",
            "title": "MANIFEST.md Template",
            "summary": "Standard template for project manifests",
            "aiContext": "Use this template for all new projects"
          },
          {
            "path": "/reference/manifest-schema/",
            "title": "Manifest Schema",
            "summary": "JSON schema for manifest.json",
            "aiContext": "Reference for manifest.json structure"
          }
        ]
      },
      "howto": {
        "description": "Step-by-step implementation guides",
        "files": [
          {
            "path": "/how-to/bootstrap/",
            "title": "Bootstrap a New Project",
            "summary": "Creating a project following team standards",
            "aiContext": "Reference for project initialization workflow"
          }
        ]
      }
    }
  },
  "aiGuidance": {
    "primaryContext": [
      "/explanation/manifest-philosophy/",
      "/reference/manifest-template/"
    ],
    "codingStandards": "/reference/standards/",
    "patterns": "/explanation/patterns/"
  },
  "metadata": {
    "plane": "developer-control-plane",
    "capability": "engineering-standards",
    "tags": ["platform-engineering", "documentation", "standards"],
    "lastUpdated": "2024-01-15T10:30:00Z"
  }
}
```

## Validation

To validate your manifest.json:

```bash
# Check JSON syntax
cat public/manifest.json | jq .

# Verify required fields exist
cat public/manifest.json | jq '.name, .version, .documentation'
```

## Generation Script

See [`scripts/generate-manifest.js`](https://github.com/kandala05/team-playbook/blob/main/scripts/generate-manifest.js) for the reference implementation.

## Related

- [The Manifest Philosophy](/team-playbook/explanation/manifest-philosophy/) - Why we use manifest.json
- [MANIFEST.md Template](/team-playbook/reference/manifest-template/) - Project manifest template
- [Bootstrap Guide](/team-playbook/how-to/bootstrap/) - How to set up manifest generation
