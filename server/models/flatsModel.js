var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

//on ne met pas _id pour que ce soit auto généré par mongoDB
//en MongoDB les id sont écrits '_id' 

var FlatSchema = new Schema({
    address: { type: String, default: null }, 
    id_poste: { type: String, default: 0 }, 
    latitude: { type: Number, default: 0 }, 
    longitude: { type: Number, default: 0 }, 
    flatName: { type: String, default: null }, 
    created_date: { type: Date, default: Date.now }, 
    photo: { type: String, default: "https://i.f1g.fr/media/eidos/805x453_crop/2017/07/13/XVM9b0f7480-670b-11e7-826b-3482b7d74d90-805x453.jpg" }
});

module.exports = mongoose.model('Flats', FlatSchema);


