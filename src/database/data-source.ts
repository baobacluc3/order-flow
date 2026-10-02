import 'dotenv/config';
import { DataSource } from 'typeorm';

// Used ONLY by the TypeORM CLI (migration:generate / run / revert).
// The running app builds its own connection in AppModule from ConfigService.
// It points at compiled files in dist/, so always `npm run build` first
// (the npm scripts below do that for you).
export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
  synchronize: false,
});
