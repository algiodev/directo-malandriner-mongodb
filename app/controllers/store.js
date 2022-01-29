const Store = require('../models/Store');

exports.getAll = async (req, res, next) => {
    try {
        let stores = await Store.find();
        return res.json(stores);
    } catch (error) {
        next(error);
    }
};

exports.getOne = async (req, res, next) => {
    try {
        let store = await Store
            .findOne({ _id: req.params.id })
            .orFail(new Error('ENTITY_NOT_EXISTS'));
        return res.json(store);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        await Store.create(req.body);
        res.json({ success: true });
    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        await Store
            .findOneAndUpdate({ _id: req.params.id }, req.body )
            .orFail(new Error('ENTITY_NOT_EXISTS'));

        res.json({ success: true });
    } catch (error) {
        next(error);
    }
};

exports.deleteOne = async (req, res, next) => {
    try {
        await Store
            .findOneAndDelete({ _id: req.params.id })
            .orFail(new Error('ENTITY_NOT_EXISTS'));
    } catch (error) {
        next(error);
    }
};

