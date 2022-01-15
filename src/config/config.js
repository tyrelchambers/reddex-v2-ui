const config = {
  development: {
    backend: "http://api.localhost:4000",
    frontend: "http://localhost:3000",
    redditApp: "pDIeQvykXv_neg",
    redditRedirect: "http://localhost:3000/callback/reddit",
    youtubeKey: "AIzaSyBzE5hSoh6JZsLsepRXULe9yx2o-KcoJrs",
  },
  production: {
    backend: "https://api.reddex-staging.com",
    frontend: "https://reddex-staging.com",
    redditApp: "Rw_vFfmZPN4uYA",
    redditRedirect: "https://reddex-staging.com/callback/reddit",
    youtubeKey: "AIzaSyBzE5hSoh6JZsLsepRXULe9yx2o-KcoJrs",
  },
};

export default config;
