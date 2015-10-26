/**
 * Created by Jean-Vital on 26/10/2015.
 */

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('gags.db');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS gags (title text, url text, dtc datetime default current_timestamp)");
});

db.close();