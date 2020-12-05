var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function Get_Data(){
	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("Blog").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
}