const config = {
  development: {
    backend: "http://localhost:4000",
    frontend: "http://localhost:3000",
    redditApp: "pDIeQvykXv_neg",
    redditRedirect: "http://localhost:3000/callback/reddit",
    youtubeKey: "AIzaSyBzE5hSoh6JZsLsepRXULe9yx2o-KcoJrs",
  },
  production: {
    backend: "https://reddex.app",
    frontend: "https://reddex.app",
    redditApp: "Rw_vFfmZPN4uYA",
    redditRedirect: "https://reddex.app/callback/reddit",
    youtubeKey: "AIzaSyBzE5hSoh6JZsLsepRXULe9yx2o-KcoJrs",
  },
};

export default config;
