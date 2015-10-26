/**
 * Created by Jean-Vital on 26/10/2015.
 */

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('gags.db');

db.serialize(function() {

    var stmt = db.prepare("INSERT INTO gags (title, url) VALUES (?, ?)");

    stmt.run("How you feel", "https://pbs.twimg.com/tweet_video/B2VQYdfIYAAR_Ag.mp4");
    stmt.run("When it works", "https://pbs.twimg.com/tweet_video/COEeMgVWUAAPuZO.mp4");
    stmt.run("How to prepare for this class", "http://img-9gag-fun.9cache.com/photo/a3L89M8_460sv.mp4");

    stmt.finalize();

    db.each("SELECT title, url, dtc FROM gags", function(err, row) {
        console.log(row.dtc + " - " + row.title + " - " + row.url);
    });
});

db.close();