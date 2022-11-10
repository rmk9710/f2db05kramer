const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
 costume_type: String,
 size: String,
 cost: Number
})
 
module.exports = mongoose.model("Costume",
costumeSchema)



// We can seed the collection if needed on

f2db05kramer start
async function recreateDB(){
  // De Costume.deleteMany();
  let instance1 = new
Onion({onion_cost:2.5,  size:'small',
color:"yellow"});
let everything
  await  instance1.save( function(err,doc) {
      if(err) return console.error(err);
      console.log("First object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB();}

f2db05kramer start
async function recreateDB(){
  // De Costume.deleteMany();
  let instance1 = new
Onion({onion_cost:15,  size:'large',
color:"white"});
let everything
  await  instance1.save( function(err,doc) {
      if(err) return console.error(err);
      console.log("First object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB();}

f2db05kramer start
async function recreateDB(){
  // De Costume.deleteMany();
  let instance1 = new
Onion({onion_cost:6,  size:'medium',
color:"yellow"});
let everything
  await  instance1.save( function(err,doc) {
      if(err) return console.error(err);
      console.log("First object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB();}

