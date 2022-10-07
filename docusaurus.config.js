module.exports = {
  title: 'InboxSDK',
  tagline: 'Build apps inside of Gmail',
  url: 'https://inboxsdk.github.io',
  baseUrl: '/inboxsdk-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'InboxSDK', // Usually your GitHub org/user name.
  projectName: 'inboxsdk-docs', // Usually your repo name.
  trailingSlash: true,
  themeConfig: {
    algolia: {
      apiKey: '319308999ead35d0a17df976af4a951a',
      appId: 'inboxsdk',
      indexName: 'inboxsdk',
      searchParameters: {}, // Optional (if provided by Algolia)
    },
    navbar: {
      title: 'InboxSDK Documentation',
      logo: {
        href: "/",
        alt: 'InboxSDK Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/InboxSDK/InboxSDK',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'getting-started',
            },
            {
              label: 'API Reference',
              to: 'api-reference',
            },
            {
              label: 'Resources',
              to: 'resources',
            },
            {
              label: 'Changelog',
              to: 'changelog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/inboxsdk',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/inboxsdk/inboxsdk-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rewardly, Inc. Brought to you by <a href="www.streak.com">Streak</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', 
          sidebarCollapsible: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/InboxSDK/inboxsdk-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
