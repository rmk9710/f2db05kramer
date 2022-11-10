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
exports.onion_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Onion();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Onion_type":"cost":12, "size":small, "collor":"yellow"}
    document.onion_cost = req.body.onion_cost;
    document.cost = req.body.size;
    document.size = req.body.color;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume delete form on DELETE.
exports.onion_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Onion delete DELETE ' + req.params.id);
};

// Handle Costume update form on PUT.
exports.onion_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Onion update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.onion_view_all_Page = async function(req, res) {
    try{
        theOnions = await Onion.find();
        res.render('onion', { title: 'Onion Search Results', results: theOnions });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};