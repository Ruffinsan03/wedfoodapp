var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "fast_food",
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM inventory", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// function get_all_inventory(){
//   con.connect(function(err) {
//       if (err) throw err;
//       con.query("SELECT * FROM inventory", function (err, result, fields) {
//         if (err) throw err;
//           console.log(result);
//         });
//       });
// }


function get_all_inventory () {

  return new Promise((resolve, reject) => {
      con.query("SELECT * FROM inventory", function (err, result) {
          if (err) reject(err);
          // console.log(result);
          resolve(JSON.stringify(result));
      })

  });
}
get_all_inventory().then(result => {console.log(result)});






function set_new_item(item, count){  
    con.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO inventory (item_name, item_count) VALUES ('" + item+ "', '"+ count+"')";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
        });
    });
}
module.exports.getInv = get_all_inventory;
module.exports.setItem = set_new_item;