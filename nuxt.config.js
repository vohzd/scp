module.exports = {
  head: {
    title: "scp",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "scp" },
      { hid: "identifier-url", name: "identifier-url", content: "https://www.scp.io" },
      { hid: "title", name: "title", content: "scp" },
      { hid: "description", name: "description", content: "music" },
      { hid: "keywords", name: "keywords", content: "scp, vohzd, music " },
      { hid: "author", name: "author", content: "vohzd" },
      { hid: "language", name: "language", content: "EN" },
      { hid: "robots", name: "robots", content: "All" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  loading: { color: '#b56d82' },
  env: {
    SERVER_ENDPOINT: process.env.SERVER_ENDPOINT ? process.env.SERVER_ENDPOINT : "http://localhost:1337"
  },
  build: {
    optimizeCSS: true
  },
  modules: [
    "@nuxtjs/axios"
  ],
  axios: {
    baseURL: "/",
    proxyHeaders: false,
    credentials: true
  },
}
