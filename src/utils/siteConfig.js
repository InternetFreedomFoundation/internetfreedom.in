
module.exports = {
  siteUrl:
    process.env.NODE_ENV === `production`
      ? process.env.SITE_URL || `https://internetfreedom.in`
      : `https://internetfreedom-in.pages.dev`, // Site domain. Do not include a trailing slash!

  postsPerPage: 3, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: `Internet Freedom Foundation`, // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta: `Internet Freedom Foundation defends online freedom, privacy and innovation in India`,
  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: `IFF`, // Used for App manifest e.g. Mobile Home Screen
  siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: `#e9e9e9`, // Used for Offline Manifest
  themeColor: `#15171A`, // Used for Offline Manifest
};
