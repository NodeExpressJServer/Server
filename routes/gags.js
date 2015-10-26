var express = require('express');
var router = express.Router();

var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('model/dal/gags.db');


/* GET users listing. */
router.get('/', function(req, res) {

     db.serialize(function() {

         var rowTable = [];

         db.each("SELECT title, url, dtc FROM gags order by dtc asc", function(err, row) {

             var type;
             switch(row.title.substr(row.title.length - 3)) {
                 case "mp4" : type = "video/mp4"; break;
                 case "ebm" : type = "video/webm"; break;
                 case "ogg" : type = "video/ogg"; break;
             }

             rowTable.push({title:row.title, url:row.url, type:type});
         }, function() {
             res.render('gags', {
                 title: 'Express',
                 data: rowTable
             });
         });
     });
});


module.exports = router;
