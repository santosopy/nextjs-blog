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
    HOST: "7768zghy39a5.us-east-1.psdb.cloud",
    USERNAME: "gz22hfjpyfrp",
    PASSWORD: "pscale_pw_80Rvnv9V9K91TM2co5F7ljIE-Dqv5wTaF7l7jVatmIE",
    DATABASE: "nextdb"
  }
})

export { pool };
