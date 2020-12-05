var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function Insert_Data(blogid,b_title,b_blog,b_category,user_id){
	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { BlogID: blogid, title : b_title,blog : b_blog,category : b_category };
  dbo.collection("Blog").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  var myobj2 = { BlogID: blogid,UserID : user_id};
  dbo.collection("Blog_author").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
}