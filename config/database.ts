// config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    connection: env('DATABASE_CLIENT') === 'postgres'
      ? {
          host: env('DATABASE_HOST', '127.0.0.1'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'strapidb'),
          user: env('DATABASE_USERNAME', 'strapi'),
          password: env('DATABASE_PASSWORD', 'strapi'),
          ssl: env.bool('DATABASE_SSL', false),
        }
      : {
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
    useNullAsDefault: true,
  },
});
