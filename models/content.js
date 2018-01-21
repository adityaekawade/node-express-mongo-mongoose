/**
 * Created by Aditya Ekawade on 6/6/2017.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    author: {type: String, required: true}
});


module.exports = mongoose.model('Content', schema);

