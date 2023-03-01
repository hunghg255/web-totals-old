// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const SnackPlayer = require('./remark-snackplayer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Web Totals',
  favicon: 'img/logo.png',
  url: 'https://web-totals.vercel.app',
  baseUrl: '/',
  organizationName: 'hunghg255', // Usually your GitHub org/user name.
  projectName: 'web-totals', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('esbuild-loader'),
      options: {
        loader: 'tsx',
        format: isServer ? 'cjs' : undefined,
        target: isServer ? 'node12' : 'es2017',
      },
    }),
  },

  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'vi'],
  // },
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
    {
      src: 'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd8ryO5qrZo8Exadq9qmt1wtm4_2FdZGEAKHDFEt_2BBlwwM4.js',
      defer: true,
    },
    { src: 'https://snack.expo.dev/embed.js', defer: true },
  ],
  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'issues',
        path: 'issues',
        routeBasePath: 'issues',
        sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'questions',
        path: 'questions',
        routeBasePath: 'questions',
        sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
    '@docusaurus/theme-live-codeblock',
    require.resolve('@cmfcmf/docusaurus-search-local'),
  ],
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/hunghg255/web-totals',
          remarkPlugins: [SnackPlayer],
        },
        blog: {
          blogTitle: 'Blogs',
          blogDescription: 'Blogs',
          blogSidebarTitle: 'Blogs',
          blogSidebarCount: 10, // 隐藏博文侧边栏
          showReadingTime: true,
          editUrl: 'https://github.com/hunghg255/web-totals',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/img/unicorn.png',
      navbar: {
        title: 'Web Totals',
        logo: {
          alt: 'Web Totals',
          src: '/img/logo.png',
        },
        items: [
          {
            type: 'doc',
            position: 'right',
            label: 'Docs',
            docId: 'intro',
          },
          { to: '/blog', label: 'Blog', position: 'right' },

          {
            to: '/issues',
            label: 'Issues',
            position: 'right',
            activeBaseRegex: `/issues`,
          },
          {
            to: '/questions',
            label: 'Questions',
            position: 'right',
            activeBaseRegex: `/questions`,
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/hunghg255/web-totals',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Contact',
            items: [
              {
                label: 'Facebook',
                href: 'https://facebook.com/hunghg255',
              },
              {
                label: 'Portfolio',
                href: 'https://hung.thedev.id',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hunghg255',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Web Quesstions`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
    }),
};

module.exports = config;
