module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://server.tv-melchingen.de/mysite/',
  app: {
    keys: env.array(["VFjFArrRpvHMnGj6cIo2+STECOOhJm2mUcsTyihTa5I="], ["qqW5mFZ6Tfo+wVPT9RBy4yEZPxjrr95Z+TI3JxabVWk="]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
