const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    description: { type: String },
    buy_date: { type: Date },
    stars: { type: Number, default: 0 },    // default, required, select...
    is_digital_format: { type: Boolean, select: false },
    platform: { type: [String] },           // windows, Linux, PS5, Vita, Spectrum, MSDoS...

    /*  store: {
        type: String,
        enum: ['gog', 'steam', 'epic', 'origin']
    }, */

    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },

    visible: { type: Boolean, default: true },

    cover: { type: String },
    comments: [{ comment: String, date: Date, visible: Boolean }]
}, {
    timestamps :{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Videogame', schema, 'videogames');
