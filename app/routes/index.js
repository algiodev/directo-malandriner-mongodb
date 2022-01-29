const Router = require('express').Router();

const gameController = require('../controllers/videogame');
const storeController = require('../controllers/store');

Router.get('/game', gameController.getAll);
Router.get('/game/:id', gameController.getOne);
Router.post('/game', gameController.create);
Router.put('/game/:id', gameController.update);
Router.delete('/game/:id', gameController.deleteOne);

Router.get('/store', storeController.getAll);
Router.get('/store/:id', storeController.getOne);
Router.post('/store', storeController.create);
Router.put('/store/:id', storeController.update);
Router.delete('/store/:id', storeController.deleteOne);

module.exports = Router;
