// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://kandala05.github.io",
  base: "/team-playbook", // This matches your repo name
  integrations: [
    starlight({
      title: "Team Playbook",
      description: "Documentation-First, AI-Augmented software development standards",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/kandala05/team-playbook",
        },
      ],
      sidebar: [
        {
          label: "Philosophy",
          items: [
            {
              label: "Manifest Philosophy",
              link: "/explanation/manifest-philosophy/",
            },
            {
              label: "Documentation-First Approach",
              link: "/explanation/docs-first/",
            },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "MANIFEST.md Template",
              link: "/reference/manifest-template/",
            },
            {
              label: "Manifest Schema",
              link: "/reference/manifest-schema/",
            },
            {
              label: "Project Structure",
              link: "/reference/project-structure/",
            },
          ],
        },
        {
          label: "How-To Guides",
          items: [
            {
              label: "Bootstrap a New Project",
              link: "/how-to/bootstrap/",
            },
            {
              label: "Configure AI Assistant Context",
              link: "/how-to/ai-context/",
            },
          ],
        },
        {
          label: "About",
          link: "/about/",
        },
      ],
      customCss: [
        // You can add custom CSS here later
      ],
    }),
  ],
});
