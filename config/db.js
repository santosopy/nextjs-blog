import mysql from "serverless-mysql";

// config: {
//   host: "localhost",
//   user: "root",
//   password: "root",
//   port: 3306,
//   database: "nextdb",
// },

const pool = mysql({
  config: {
    HOST: "xdsz6q0lo803.us-east-1.psdb.cloud",
    USERNAME: "1pi4vvdaonhd",
    PASSWORD: "pscale_pw_2PKPJP7BM8XxQMvp5GWfjIYvhiX7j332ZcHmULuup3w",
    DATABASE: "nextdb"
  }
})

export { pool };
