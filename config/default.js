const config = {
  email: {
    domain: 'xxx.com',
    mailgun: {
      public: process.env.MAILGUN_PUBLIC,
      private: process.env.MAILGUN_PRIVATE
    },
    from: {
      support: 'hello@xxx.com',
    },
    template: {
      folder: 'default',
    }
  },
  app: {
    secret: 'adsadadasdfwewe23f4fsfa3r2ra',
    port: 3000,
  },
  db: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    dialect: 'mysql',
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  },
  project: 'XXX',
  frontendBaseUrl: process.env.FRONTEND_BASE_URL,
  RESET_PASSWORD_EXPIRATION: 10, // minutes
};

module.exports = config;
