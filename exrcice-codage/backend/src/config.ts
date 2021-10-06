export const config = () => ({
  db: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: process.env.NODE_ENV === 'production' ? false : true,
    logging: process.env.NODE_ENV === 'production' ? false : true,
    entities: ['dist/entities/*.entity.js', 'src/entities/*.entity.js'],
  },
});
