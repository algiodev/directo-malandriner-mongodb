const Videogame = require('../models/Videogame');

exports.getAll = async (req, res, next) => {
    try {
        let videogames = await Videogame
            .find()
            .populate('store', 'name');
        return res.json(videogames);
    } catch (error) {
        next(error);
    }
};

exports.getOne = async (req, res, next) => {
    try {
        let videogame = await Videogame
            .findOne({ _id: req.params.id })
            .populate('store')
            .orFail(new Error('ENTITY_NOT_EXISTS'));
        return res.json(videogame);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        await Videogame.create(req.body);
        res.json({ success: true });
    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        await Videogame
            .findOneAndUpdate( { _id: req.params.id }, req.body )
            .orFail(new Error('ENTITY_NOT_EXISTS'));
        res.json({ success: true });
    } catch (error) {
        next(error);
    }
};

exports.deleteOne = async (req, res, next) => {
    try {
        await Videogame
            .findOneAndDelete({ _id: req.params.id })
            .orFail(new Error('ENTITY_NOT_EXISTS'));
    } catch (error) {
        next(error);
    }
};

// alternativas para borrar
//  .findByIdAndRemove(req.params.id)                                   // buscar solo por el _id sin posibilidad de añadir más condiciones
//  .findOneAndUpdate({ _id: req.params.id }, { visible: false } )      // ejemplo de softdelete en pantuflas
