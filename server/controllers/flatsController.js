var mongoose = require('mongoose');
var Flats = mongoose.model('Flats'); //Flats = objet qui représente base de données (modèle)

//toujours essayer par get pour voir si API marche
exports.get_all_flats = function (req, res) { 
    Flats.find({}, function (err, flats) {    //'find' : module de mongoose ;  {} = toute la collection (all)
        if (err) { 
            res.send(err); 
        } 
        res.json(flats);      //renvoie l'objet flats sous format json - on spécifie à l'api que c'est du JSON
    }); 
}; 


exports.get_a_flat = function (req, res) { 
    Flats.findById(req.params._id, function (err, flats) { 
        if (err) 
            res.send(err); 
        res.json(flats); 
    }); 
}; 

