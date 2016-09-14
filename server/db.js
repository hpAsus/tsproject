// NEDB SETUP
// =====================================================================================================================
var Datastore = require('nedb');
var db = new Datastore({
    filename: 'data/users_nedb.json'
});
db.loadDatabase();


// EXPORTS
// =====================================================================================================================
module.exports = db;