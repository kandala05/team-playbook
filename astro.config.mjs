// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com", // TODO: Update with your actual domain
  integrations: [
    starlight({
      title: "Team Playbook",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/phanidhar/team-playbook",
        },
      ],
      sidebar: [
        {
          label: "Philosophy",
          link: "/explanation/manifest-philosophy/",
        },
        {
          label: "Reference",
          items: [
            {
              label: "MANIFEST.md Template",
              link: "/reference/manifest-template/",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              label: "Bootstrapping a Project",
              link: "/how-to/bootstrap/",
            },
          ],
        },
      ],
    }),
  ],
});
