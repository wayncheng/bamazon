'use strict';
(function(){
	var mysql = require('mysql');
	var inquirer = require('inquirer');
	var connection = mysql.createConnection({
    host     : 'localhost',
    port     : "3306",
    user     : 'root',
    password : 'batman',
    database : 'bamazon'
	});
	connection.connect(function(err) {
		if (err) { return console.err('err connecting: ' + err.stack); }
		// console.log('connected as id ' + connection.threadId);
	});

	inquirer
  .prompt([
		{
      type: "input",
      message: "Product ID?",
      name: "item_id"
    },
		{
      type: "input",
      message: "Quantity?",
      name: "quantity"
    }
  ])
  .then(function(r) {
		var product;

		connection.query("SELECT * FROM bamazon.products WHERE item_id = ?",[r.item_id], function (err, res) {
        if (err) throw err;
				// console.log(res[0]);
				// console.log('res[0].stock_quantity',res[0].stock_quantity);
				var product = res[0];
				var stock = product.stock_quantity;

				// If user requests more than available in stock...
				if (r.quantity > stock){
					console.log('No. Buy less.');
				}
				// If enough product in stock to fulfill order....
				else {
					var new_stock = stock - r.quantity;
					// Update Database
					connection.query("UPDATE bamazon.products SET stock_quantity = ? WHERE item_id = ?",[new_stock, product.item_id], function (err, res) {
						if (err) throw err;
						else {
							console.log('Thank you for your order!');
							var total = product.price * product.stock_quantity;
							console.log(`Your total is $${total}`);

						}
					})
				}
    })
		

	});
	
})();