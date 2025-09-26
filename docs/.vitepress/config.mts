import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JW",
  description: "Manual of Me",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' },
      { text: 'Blog', link: '/blog' }
    ],

    sidebar: {
      '/sdf': [
        {
          text: 'Navigation',
          items: [
            { text: 'About Me', link: '/about' },
            { text: 'Projects', link: '/projects' },
            { text: 'Blog', link: '/blog' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/majestic-Fire' }
    ],

    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2025 Jemson Wong'
    }
  }
})
