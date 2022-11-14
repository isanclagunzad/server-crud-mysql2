const express = require('express');
const app = express();
const port = 8001;
const db = require('./models');
const cors = require('cors');

// middlewares
app.use(express.json());
app.use(cors());

// routers
const postsRouter = require('./routes/Posts');
app.use('/posts', postsRouter);

const commentsRouter = require('./routes/Comments');
app.use('/comments', commentsRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log('Server running on port ' + port);
  });
});
