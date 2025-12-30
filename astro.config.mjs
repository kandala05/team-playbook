// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Philosophy',
					link: '/explanation/manifest-philosophy/',
				},
				{
					label: 'Reference',
					items: [
						{
							label: 'MANIFEST.md Template',
							link: '/reference/manifest-template/',
						},
					],
				},
				{
					label: 'Guides',
					items: [
						{
							label: 'Bootstrapping a Project',
							link: '/how-to/bootstrap/',
						},
					],
				},
			],
		}),
	],
});	