---
title: Manifest Template
description: Template for creating project manifest files following our documentation-first approach
---

# Project Manifest: [Project Name]

## 1. Executive Summary & Problem Statement
* **The Problem:** [Describe the pain point. Who is suffering? What is the manual toil?]
* **The Solution:** [How does this project solve it? Focus on the "North Star" vision.]

## 2. Core Personas
* **[Role A]:** [e.g., The Developer - seeks speed and low friction.]
* **[Role B]:** [e.g., The Platform Engineer - seeks structured data and reliability.]

## 3. Technology Stack & Principles
* **Core Stack:** [e.g., Next.js, SST Ion, Postgres, Drizzle]
* **Architecture Style:** [e.g., Event-driven, Documentation-first, Serverless]
* **Development Principle:** All features must be documented in V0 (Astro) before V1 implementation begins to provide LLM context.

## 4. The Roadmap (Phased Approach)

### **V0: The Context Engine (Documentation)**
* **Goal:** Create the "Source of Truth" for humans and AI using the Diátaxis framework.
* **Key Features:** Astro Starlight site, Architecture Explanations, and Reference schemas.

### **V1: The Structural Foundation**
* **Goal:** [Describe the MVP goal].
* **Key Features:** [List 3-4 primary features].

### **V2+: Evolution & Automation**
* **Goal:** [Describe long-term scaling or AI integration].
* **Key Features:** [List 3-4 advanced features].

## 5. AI Guidance
* **Context Location:** AI assistants should prioritize `docs/explanation/` for architectural intent and `src/db/schema.ts` for data structures.
* **Coding Style:** [e.g., Use functional components, prefer Server Actions over APIs].