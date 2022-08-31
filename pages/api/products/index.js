import { pool } from "config/db";
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProducts = (req, res) => {
  try {
    connection.query('SELECT * FROM product', function (err, rows, fields) {
      if (err) throw err
      res.status(200).json(rows)
    })
    return
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const result = await pool.query("INSERT INTO product SET ?", {
      name,
      description,
      price,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
