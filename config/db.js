import mysql from "serverless-mysql";

// const pool = mysql({
//   config: {
//     host: "localhost",
//     user: "root",
//     password: "root",
//     port: 3306,
//     database: "productsdb",
//   },
// })


const pool = mysql({
  config: {
    HOST: "us-east.connect.psdb.cloud",
    USERNAME: "csm73g36gr3zyzr2c9r9",
    PASSWORD: "pscale_pw_mP8g7HSpvAjrvuwkUytcD3tPTf9Uy9QNgbMtfTlk0uG",
    DATABASE: "productsdb",
  },
})

export{ pool }
