# OrderFlow (Stage 0)

NestJS + Postgres + Redis. Stage 0 = empty app, config validation, DB connection, migrations CLI, `/health`, CI.

## Run it
```bash
cp .env.example .env
docker compose up -d          # postgres + redis
npm install --legacy-peer-deps
npm run start:dev             # http://localhost:3000  and  /health
npm run migration:run         # nothing to run yet
```
Note: `--legacy-peer-deps` is needed because the freshly scaffolded Nest 12 template has a peer-dependency conflict that crashes plain `npm install` on some setups.
