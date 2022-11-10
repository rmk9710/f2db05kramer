var onion= require('../models/onionSchema');

// List of all Onions

exports.onion_list = async function(req, res) {
    res.send('NOT IMPLEMENTED: Onion list');
};
// for a specific Onion.
exports.onion_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Onion.finbByid(req.params.id)
        res.send(resuslt)
    } catch(error) {
        res.status(500)
        res.send('{"error": document for id $ {req.params.id} not found');
    }
};

// Handle Onion create on POST.
exports.onion_create_post = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Onion.findById( req.params.id)
 // Do updates of properties
 if(req.body.onion_type)
 toUpdate.onion_type = req.body.onion_type;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 if(req.body.size) toUpdate.color = req.body.color;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// Handle Onion delete form on DELETE.
exports.onion_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Onion delete DELETE ' + req.params.id);
};

// Handle Onion update form on PUT.
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