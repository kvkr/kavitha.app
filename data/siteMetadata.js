const siteMetadata = {
  title: 'My portfolio',
  author: 'Kavitha Krishnappa',
  headerTitle: 'User Experience',
  description: 'My projects, work, portfolio, and scribblings',
  mastheadImage: '/static/images/avatar.png',
  mastheadTitle: 'SOLVING USER PROBLEMS...',
  mastheadDescription:
    'Passionate about building meaningful experiences, I believe in the craft of immersive user-centric process to design and develop great products & services.',
  language: 'en-us',
  siteUrl: 'https://kavitha.app',
  siteRepo: 'https://github.com/kvkr/kavitha.app',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'me@kavitha.app',
  github: 'https://github.com/kvkr',
  twitter: 'https://twitter.com/kavithak92',
  locale: 'en-US',
  analytics: {
    googleAnalyticsId: 'TODO', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {},
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
