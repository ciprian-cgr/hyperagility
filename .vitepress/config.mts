import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "HyperAgility",
  description: "A Guide to Sanity in AI-Driven Software Development",
  
  // Use the root directory for pages
  srcDir: '.',
  
  themeConfig: {
    // Top navigation bar
    nav: [
      { text: 'Manifesto', link: '/' },
      { text: 'Get Involved', link: '/contact' }
    ],

    // Sidebar navigation (left side) is disabled to use the default outline.
    // sidebar: [],

    // Table of contents (right side)
    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    // Social links in header
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hyperagility' },
      { icon: 'x', link: 'https://x.com/hyperagility' },
      { icon: 'linkedin', link: 'https://linkedin.com/company/hyperagility' }
    ]
  }
})