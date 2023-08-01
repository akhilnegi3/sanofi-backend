// ~/strapi-aws-s3/backend/config/middlewares.js

module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "snofi-media-upload.s3.us-east-1.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "snofi-media-upload.s3.us-east-1.amazonaws.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "1024mb", // modify form body
      jsonLimit: "524mb", // modify JSON body
      textLimit: "524mb", // modify text body
      formidable: {
        maxFileSize: 1000 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
