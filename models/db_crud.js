const {Client}  = require('pg'); 
const conn_string = require('./db_config');

async function crud(req_body) {
    let id = parseInt(req_body.id);
    let name = req_body.name;
    let price = parseInt(req_body.price);
    let amount = parseInt(req_body.amount);
    let shop = req_body.shop;
    let btn = req_body.btn;
    let crud_result = false
    // Connect to database
    const client = new Client(conn_string);
    await client.connect(); 
    if (btn == "Update") {
        //query to update a row
        console.log("UPDATED");
    }
    else if (btn == "Delete") {
        // query to delete a row
        console.log("DELETED");
    }
    else {
        // query to insert a new row
        const query_string = {
            text: `INSERT INTO products VALUES ($1, $2, $3, $4, $5);`,
            values: [id, name, price, amount, shop],
        }
        let query_results = await client.query(query_string);
        console.log(`INSERTED ${id} ${name} ${price} ${amount} ${shop}`);
        console.log(query_results);
    }
}

module.exports = crud;