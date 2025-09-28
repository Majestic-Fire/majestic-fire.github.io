import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "J W",
  description: "Manual of Me",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' },
      { text: 'Blog', link: '/blog' }
    ],

    sidebar: {
      '/': [
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
