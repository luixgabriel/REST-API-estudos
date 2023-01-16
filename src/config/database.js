import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: process.env.usernameDB,
  password: process.env.passwordDB,
  database: 'school',
  define: {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  timezone: '-03:00',
  dialectOptions: {
    useUTC: false,
  },
};
