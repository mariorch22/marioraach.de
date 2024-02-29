module.exports = ({ env }) => ({
  auth: {
    secret: 'DUcBBfvBY/reT1Iaz11zHg==',
  },
  apiToken: {
    salt: "4LOZpPq7XLA2aRDPxH44DA==",
  },
  transfer: {
    token: {
      salt: 'SmS6zWmvxCru2XG4a7OK+w==',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
