var flats = require('../controllers/flatsController.js');


module.exports = function(app) {
    app.route('/flats')
    .get(flats.get_all_flats);
    app.route('/flats/:_id')
    .get(flats.get_a_flat);
}