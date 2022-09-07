import mysql from "serverless-mysql";

const pool = mysql({
  // config: {
  //   host: "localhost",
  //   user: "root",
  //   password: "root",
  //   port: 3306,
  //   database: "productsdb",
  // },
  config: {
    host: "sql3.freemysqlhosting.net",
    user: "sql3517593",
    password: "SsCLCeM3Eu",
    port: 3306,
    database: "sql3517593",
  },
})

export{ pool }