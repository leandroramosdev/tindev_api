const express = require("express");
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/dev/list', DevController.index);
routes.post('/dev/insert', DevController.store);
routes.post('/dev/like/:devId', LikeController.store);
routes.post('/dev/dislike/:devId', DislikeController.store);

module.exports = routes;
