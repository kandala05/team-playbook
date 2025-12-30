# Team Playbook

A documentation-first approach to software development, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Philosophy

This playbook establishes our team's **Documentation-First, AI-Augmented** workflow:

- Every project begins with a `MANIFEST.md` and a V0 Documentation Site
- Documentation serves two audiences: humans (tutorials, how-tos) and LLMs (explanations, references)
- The docs act as a "context engine" for AI-assisted code generation

## Project Structure

```
.
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── assets/          # Images and other assets
│   ├── content/
│   │   └── docs/        # Documentation pages (.md/.mdx)
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18.20.8, ^20.3.0, or >=22.0.0
- pnpm (recommended)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Starts the dev server at `localhost:4321`.

### Build

```bash
pnpm build
```

Builds the production site to `./dist/`.

### Preview

```bash
pnpm preview
```

Preview the production build locally.

## Documentation Structure

The docs follow the [Diataxis](https://diataxis.fr/) framework:

- **Explanation** - Conceptual understanding (e.g., Manifest Philosophy)
- **Reference** - Structured information lookup (e.g., MANIFEST.md Template)
- **How-to** - Step-by-step guides (e.g., Bootstrapping a Project)
- **Guides** - User workflows and tutorials

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Starlight Documentation](https://starlight.astro.build)
