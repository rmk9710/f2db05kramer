var onion= require('../models/onionSchema');

// List of all Costumes

exports.costume_list = async function(req, res) {
    res.send('NOT IMPLEMENTED: Onion list');
};
// for a specific Costume.
exports.onion_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Onion detail: ' + req.params.id);
};

// Handle Costume create on POST.
exports.onion_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Onion create POST');
};

// Handle Costume delete form on DELETE.
exports.onion_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Onion delete DELETE ' + req.params.id);
};

// Handle Costume update form on PUT.
exports.onion_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Onion update PUT' + req.params.id);
};