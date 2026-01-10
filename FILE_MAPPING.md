# File Mapping Guide

This document shows exactly where each file from the handoff package should be placed in your team-playbook repository.

---

## Handoff Package Structure

```
team-playbook-deploy/
├── README.md                          # Overview of the package
├── QUICK_START.md                     # 30-minute implementation guide
├── CLAUDE_CODE_CONTEXT.md             # Complete context for Claude Code
├── IMPLEMENTATION_CHECKLIST.md        # Progress tracking
├── DEPLOYMENT.md                      # Deployment instructions
├── UNIFIED_DOCS_ARCHITECTURE.md       # Architecture documentation
├── REFERENCE_IMPLEMENTATION.md        # Platform-CLI project plan
├── deploy.yml                         # GitHub Actions workflow
├── astro.config.mjs                   # Updated Astro configuration
├── manifest-philosophy.md             # Content file
├── manifest-template.md               # Content file
├── bootstrap-guide.md                 # Content file
├── unified-router.js                  # Cloudflare Worker (Phase 3)
└── manifest-template.json             # JSON template (Phase 3)
```

---

## Where Files Go in Repository

### 1. GitHub Actions Workflow

**Source**: `deploy.yml`  
**Destination**: `.github/workflows/deploy.yml`  
**Action**: Copy

```bash
mkdir -p .github/workflows
cp deploy.yml .github/workflows/
```

**Purpose**: Enables automatic deployment to GitHub Pages on push to main.

---

### 2. Astro Configuration

**Source**: `astro.config.mjs`  
**Destination**: `astro.config.mjs` (root)  
**Action**: Replace existing file

```bash
cp astro.config.mjs ./astro.config.mjs
```

**Purpose**: Configures site for GitHub Pages with proper base path and enhanced sidebar.

**Changes from original**:
- ✅ Adds `site: "https://kandala05.github.io"`
- ✅ Adds `base: "/team-playbook"`
- ✅ Expanded sidebar with all sections
- ✅ Better description and metadata

---

### 3. Documentation Content - Explanation

**Source**: `manifest-philosophy.md`  
**Destination**: `src/content/docs/explanation/manifest-philosophy.md`  
**Action**: Copy

```bash
mkdir -p src/content/docs/explanation
cp manifest-philosophy.md src/content/docs/explanation/
```

**Purpose**: Explains the Documentation-First, AI-Augmented philosophy.

**What it covers**:
- Dual-user theory (humans + LLMs)
- V0 deliverable requirement
- Diataxis framework
- Why documentation first

---

### 4. Documentation Content - Reference

**Source**: `manifest-template.md`  
**Destination**: `src/content/docs/reference/manifest-template.md`  
**Action**: Copy

```bash
mkdir -p src/content/docs/reference
cp manifest-template.md src/content/docs/reference/
```

**Purpose**: Comprehensive guide to the MANIFEST.md template.

**What it covers**:
- Complete template with all sections
- Explanation of each section
- Examples and best practices
- When to update the manifest

---

### 5. Documentation Content - How-To

**Source**: `bootstrap-guide.md`  
**Destination**: `src/content/docs/how-to/bootstrap.md`  
**Action**: Copy and rename

```bash
mkdir -p src/content/docs/how-to
cp bootstrap-guide.md src/content/docs/how-to/bootstrap.md
```

**Purpose**: Step-by-step guide for starting new projects.

**What it covers**:
- Creating MANIFEST.md
- Setting up V0 documentation
- Configuring AI assistants
- Project structure
- Deployment workflow

---

### 6. Manifest Generation Script

**Source**: Create manually (see QUICK_START.md or CLAUDE_CODE_CONTEXT.md)  
**Destination**: `scripts/generate-manifest.js`  
**Action**: Create new file

```bash
mkdir -p scripts
# Create the file - see QUICK_START.md for complete code
```

**Purpose**: Generates `manifest.json` during build for AI consumption.

---

### 7. Documentation Files (Keep in Repository Root)

These files provide context and instructions. Keep them in the repository root:

**Source** → **Destination** (all in root):
- `DEPLOYMENT.md` → `DEPLOYMENT.md`
- `UNIFIED_DOCS_ARCHITECTURE.md` → `UNIFIED_DOCS_ARCHITECTURE.md`
- `REFERENCE_IMPLEMENTATION.md` → `REFERENCE_IMPLEMENTATION.md`

```bash
cp DEPLOYMENT.md .
cp UNIFIED_DOCS_ARCHITECTURE.md .
cp REFERENCE_IMPLEMENTATION.md .
```

**Purpose**: 
- DEPLOYMENT.md: How to deploy and troubleshoot
- UNIFIED_DOCS_ARCHITECTURE.md: Overall documentation strategy
- REFERENCE_IMPLEMENTATION.md: Plan for platform-cli reference project

---

### 8. Context Files (For Reference - Don't Commit)

These files are for your use but don't need to be committed:

- `QUICK_START.md` - Your implementation guide
- `CLAUDE_CODE_CONTEXT.md` - Context for Claude Code
- `IMPLEMENTATION_CHECKLIST.md` - Progress tracking

Keep these locally or in a separate `/docs/meta/` folder if you want them tracked.

---

### 9. Phase 3 Files (Save for Later)

These are needed for unified documentation platform (Phase 3):

**Source** → **Destination** (new infrastructure repo):
- `unified-router.js` → Infrastructure repository
- `manifest-template.json` → Documentation template reference

```bash
# Don't add these to team-playbook yet
# They'll be used when setting up the unified platform
```

---

## Complete File Structure After Setup

```
team-playbook/                           # Your repository
├── .github/
│   └── workflows/
│       └── deploy.yml                   # ← From handoff package
├── public/
│   └── (generated during build)
├── scripts/
│   └── generate-manifest.js             # ← Create manually
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── config.ts
│   │   └── docs/
│   │       ├── index.mdx
│   │       ├── explanation/
│   │       │   └── manifest-philosophy.md    # ← From handoff
│   │       ├── reference/
│   │       │   └── manifest-template.md      # ← From handoff
│   │       └── how-to/
│   │           └── bootstrap.md              # ← From handoff
│   └── env.d.ts
├── astro.config.mjs                     # ← Replace with handoff version
├── package.json                         # ← Update build script
├── tsconfig.json
├── README.md
├── MANIFEST.md
├── DEPLOYMENT.md                        # ← From handoff
├── UNIFIED_DOCS_ARCHITECTURE.md         # ← From handoff
└── REFERENCE_IMPLEMENTATION.md          # ← From handoff
```

---

## Verification Checklist

After copying all files, verify:

### File Existence
```bash
# Check that all required files exist
test -f .github/workflows/deploy.yml && echo "✅ Workflow exists"
test -f scripts/generate-manifest.js && echo "✅ Manifest script exists"
test -f src/content/docs/explanation/manifest-philosophy.md && echo "✅ Philosophy exists"
test -f src/content/docs/reference/manifest-template.md && echo "✅ Template exists"
test -f src/content/docs/how-to/bootstrap.md && echo "✅ Bootstrap guide exists"
```

### Build Test
```bash
# Test that everything builds
pnpm build

# Should output:
# ✅ Generated manifest.json
# [Astro build output]

# Check generated files
test -f dist/manifest.json && echo "✅ Manifest generated"
test -d dist/explanation && echo "✅ Explanation pages built"
test -d dist/reference && echo "✅ Reference pages built"
test -d dist/how-to && echo "✅ How-to pages built"
```

### Content Verification
```bash
# Start preview server
pnpm preview

# Visit http://localhost:4321/team-playbook/ and check:
# ✅ Home page loads
# ✅ Sidebar shows all sections
# ✅ /explanation/manifest-philosophy/ loads
# ✅ /reference/manifest-template/ loads
# ✅ /how-to/bootstrap/ loads
# ✅ Navigation between pages works
```

---

## Quick Copy Commands

For fast setup, run these commands in order:

```bash
# Navigate to your repository
cd team-playbook

# Create directories
mkdir -p .github/workflows
mkdir -p scripts
mkdir -p src/content/docs/explanation
mkdir -p src/content/docs/reference
mkdir -p src/content/docs/how-to

# Copy workflow
cp /path/to/handoff/deploy.yml .github/workflows/

# Copy configuration
cp /path/to/handoff/astro.config.mjs .

# Copy content
cp /path/to/handoff/manifest-philosophy.md src/content/docs/explanation/
cp /path/to/handoff/manifest-template.md src/content/docs/reference/
cp /path/to/handoff/bootstrap-guide.md src/content/docs/how-to/bootstrap.md

# Copy documentation
cp /path/to/handoff/DEPLOYMENT.md .
cp /path/to/handoff/UNIFIED_DOCS_ARCHITECTURE.md .
cp /path/to/handoff/REFERENCE_IMPLEMENTATION.md .

# Create manifest script (copy from QUICK_START.md)
# Edit scripts/generate-manifest.js manually

# Update package.json build script
# Edit package.json manually
```

---

## What NOT to Copy

Don't copy these files into the repository:

- ❌ `README.md` from handoff (use repository's own README)
- ❌ `QUICK_START.md` (reference document only)
- ❌ `CLAUDE_CODE_CONTEXT.md` (reference document only)
- ❌ `IMPLEMENTATION_CHECKLIST.md` (tracking document only)
- ❌ `unified-router.js` (Phase 3 infrastructure)
- ❌ `manifest-template.json` (Phase 3 reference)

---

## After Setup

Once all files are in place:

1. **Test locally**: `pnpm build && pnpm preview`
2. **Commit changes**: `git add . && git commit -m "Add V0 documentation"`
3. **Push to GitHub**: `git push origin main`
4. **Enable GitHub Pages**: Settings → Pages → Source: GitHub Actions
5. **Verify deployment**: Visit `https://kandala05.github.io/team-playbook/`

---

**Ready to implement!** Use this guide alongside QUICK_START.md for a smooth setup.
