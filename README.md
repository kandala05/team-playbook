# Team Playbook Deployment Package

This package contains everything you need to deploy your Team Playbook to GitHub Pages and create a reference implementation.

## Files Included

### 1. Deployment Configuration

**`deploy.yml`**
- GitHub Actions workflow for automated deployment
- Place at: `.github/workflows/deploy.yml` in your repo
- Triggers on push to `main` branch
- Builds and deploys to GitHub Pages

**`astro.config.mjs`**
- Updated Astro configuration with proper base path
- Replaces your current `astro.config.mjs`
- Configured for `https://kandala05.github.io/team-playbook/`

### 2. Documentation Content

**`manifest-philosophy.md`**
- Goes to: `src/content/docs/explanation/manifest-philosophy.md`
- Explains the Documentation-First, AI-Augmented approach
- Core philosophy behind the playbook

**`manifest-template.md`**
- Goes to: `src/content/docs/reference/manifest-template.md`
- Detailed explanation of the MANIFEST.md template
- Includes examples and guidance

**`bootstrap-guide.md`**
- Goes to: `src/content/docs/how-to/bootstrap.md`
- Step-by-step guide to starting new projects
- Shows how to follow the playbook standards

### 3. Guides

**`DEPLOYMENT.md`**
- Instructions for deploying to GitHub Pages
- Troubleshooting tips
- Step-by-step process

**`REFERENCE_IMPLEMENTATION.md`**
- Plan for the reference implementation project
- Platform CLI concept that demonstrates playbook standards
- Can be used as template for creating the reference repo

## Quick Start: Deploy Your Playbook

### Step 1: Add Files to Your Repo

```bash
cd /path/to/team-playbook

# Create workflow directory
mkdir -p .github/workflows

# Copy deployment workflow
cp deploy.yml .github/workflows/deploy.yml

# Replace astro config
cp astro.config.mjs .

# Add content files
mkdir -p src/content/docs/explanation
mkdir -p src/content/docs/reference  
mkdir -p src/content/docs/how-to

cp manifest-philosophy.md src/content/docs/explanation/
cp manifest-template.md src/content/docs/reference/
cp bootstrap-guide.md src/content/docs/how-to/bootstrap.md
```

### Step 2: Enable GitHub Pages

1. Go to your repo: `https://github.com/kandala05/team-playbook`
2. Settings → Pages
3. Source: **GitHub Actions**
4. Save

### Step 3: Deploy

```bash
git add .
git commit -m "Add deployment configuration and content"
git push origin main
```

Your site will be live at: `https://kandala05.github.io/team-playbook/`

## Next Steps

### 1. Complete the Playbook Content

Add more sections based on your team's needs:
- Standards for database schemas
- CI/CD pipeline templates
- Code review guidelines
- Security practices

### 2. Create the Reference Implementation

Follow the plan in `REFERENCE_IMPLEMENTATION.md`:
1. Create new repo: `platform-cli`
2. Start with MANIFEST.md
3. Build V0 documentation
4. Implement following playbook standards

### 3. Integrate with Platform Site

Plan for how this fits in your domain structure:
```
platform.yourdomain.com/
├── /                     # Product site
├── /docs/               # Platform documentation
└── /playbook/           # This team playbook (internal)
```

## File Mapping Reference

| Source File | Destination in Repo |
|-------------|---------------------|
| `deploy.yml` | `.github/workflows/deploy.yml` |
| `astro.config.mjs` | `astro.config.mjs` (replace) |
| `manifest-philosophy.md` | `src/content/docs/explanation/manifest-philosophy.md` |
| `manifest-template.md` | `src/content/docs/reference/manifest-template.md` |
| `bootstrap-guide.md` | `src/content/docs/how-to/bootstrap.md` |

## Questions?

Refer to:
- `DEPLOYMENT.md` for deployment troubleshooting
- `REFERENCE_IMPLEMENTATION.md` for reference project planning
- Original playbook files for additional context

---

**Ready to deploy!** Follow Step 1-3 above to get your playbook live.
