# Deploying Team Playbook to GitHub Pages

## Step 1: Prepare the Repository

1. **Add the GitHub Actions workflow**

Create `.github/workflows/deploy.yml` in your repository with the deployment workflow.

2. **Update `astro.config.mjs`**

Replace your current config with the version that includes proper base path:

```javascript
// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://kandala05.github.io",
  base: "/team-playbook",
  integrations: [
    starlight({
      title: "Team Playbook",
      description: "Documentation-First, AI-Augmented software development standards",
      // ... rest of config
    }),
  ],
});
```

3. **Add content files**

Place the documentation content in the correct structure:

```
src/content/docs/
├── explanation/
│   └── manifest-philosophy.md
├── reference/
│   └── manifest-template.md
├── how-to/
│   └── bootstrap.md
└── about.md
```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/kandala05/team-playbook`
2. Click **Settings**
3. Scroll to **Pages** in left sidebar
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Save

## Step 3: Push and Deploy

```bash
# Add all files
git add .

# Commit
git commit -m "Add deployment configuration and content"

# Push to main branch
git push origin main
```

The GitHub Action will automatically:
1. Install dependencies
2. Build the site
3. Deploy to GitHub Pages

## Step 4: Access Your Site

After the action completes (check the **Actions** tab), your site will be live at:

```
https://kandala05.github.io/team-playbook/
```

## Troubleshooting

### Build fails
- Check the **Actions** tab for error logs
- Ensure all content files have proper frontmatter
- Verify `package.json` includes all dependencies

### 404 errors on navigation
- Ensure `base: "/team-playbook"` is set in `astro.config.mjs`
- Check that all internal links use relative paths

### Content not updating
- Clear browser cache
- Wait 1-2 minutes for CDN propagation
- Verify the Action completed successfully

## Continuous Deployment

Every push to `main` branch will trigger automatic redeployment. The workflow:
1. Checks out code
2. Installs dependencies with pnpm
3. Runs `pnpm build`
4. Deploys `dist/` to GitHub Pages

## Local Preview of Production Build

Test the production build locally before pushing:

```bash
# Build production site
pnpm build

# Preview it
pnpm preview
```

This ensures the build will succeed on GitHub Pages.
