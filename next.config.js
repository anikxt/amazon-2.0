module.exports = {
  images: {
    domains: [
      'links.papareact.com',
      'fakestoreapi.com',
      'upload.wikimedia.org',
    ],
  },

  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    HOST: process.env.HOST,
  },
};
