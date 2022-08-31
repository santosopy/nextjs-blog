import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "productsdb",
  },
})

export{ pool }