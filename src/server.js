const express = require('express');
const cors = require('cors');

const initCommentRoutes = require('./modules/comments/comment.routes');
const initDatabase = require('./modules/database/database.entity');

const SERVER_PORT = 4000;

const startServer = async () => {
  const app = express();

  app.use(cors('*'));
  app.use(express.json());

  await initDatabase();
  initCommentRoutes(app);

  app.listen(SERVER_PORT, () => {
    console.log(`Server available on: http://localhost:${SERVER_PORT}`);
  });
};

startServer().then();
