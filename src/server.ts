import app from './app'

console.clear()

const port = process.env.PORT || '3333'
app.express.listen(port,
  () => console.log(`Server running on port ${port}`)
)
/*
"devDependencies": {
    "@babel/cli": "^7.10.3",
    "@babel/core": "^7.10.3",
    "@babel/node": "^7.10.3",
    "@babel/preset-env": "^7.10.3",
    "@babel/preset-typescript": "^7.10.1",
    "@types/bcryptjs": "^2.4.2",
    "@types/connect-flash": "0.0.35",
    "@types/cors": "^2.8.6",
    "@types/express": "^4.17.6",
    "@types/express-ejs-layouts": "^2.3.2",
    "@types/express-session": "^1.17.0",
    "@types/hapi__joi": "^17.1.0",
    "@types/helmet": "0.0.47",
    "@types/knex": "^0.16.1",
    "@types/multer": "^1.4.3",
    "@types/passport": "^1.0.3",
    "@types/passport-local": "^1.0.33",
    "@typescript-eslint/eslint-plugin": "^3.0.2",
    "@typescript-eslint/parser": "^3.0.2",
    "babel-plugin-module-resolver": "^4.0.0",
    "copyfiles": "^2.3.0",
    "eslint": "^7.1.0",
    "eslint-config-standard": "^14.1.1",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.1",
    "sqlite3": "^4.2.0",
    "ts-node-dev": "^1.0.0-pre.44",
    "tsconfig-paths": "^3.9.0",
    "typescript": "^3.9.3"
  },
  "dependencies": {
    "@hapi/joi": "^17.1.1",
    "bcryptjs": "^2.4.3",
    "connect-flash": "^0.1.1",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "ejs": "^3.1.3",
    "express": "^4.17.1",
    "express-ejs-layouts": "^2.5.0",
    "express-session": "^1.17.1",
    "helmet": "^3.22.0",
    "knex": "^0.21.1",
    "multer": "^1.4.2",
    "mysql2": "^2.1.0",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0"
*/
