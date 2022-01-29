const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String },             // 'gog', 'steam', 'epic', 'origin'
    description: { type: String },
    url: { type: String }
}, {
    timestamps :{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Store', schema, 'stores');
