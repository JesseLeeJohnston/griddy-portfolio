// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Jesse Johnston Vancouver Product & UX Design",
  siteUrl: "https://www.jessejohnston.co",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ],
    },
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "post/**/*.md",
        typeName: "Post",
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        config: {
          "/blog/*": {
            changefreq: "weekly",
            priority: 0.5,
          },
        },
      },
    },
  ],
};
