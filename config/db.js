import mysql from "serverless-mysql";

// const pool = mysql({
//   config: {
//     host: "localhost",
//     user: "root",
//     password: "root",
//     port: 3306,
//     database: "nextdb",
//   },
// })

const pool = mysql({
  config: {
    PLANETSCALE_DB_HOST: "y312s3i0b6z4.us-east-4.psdb.cloud",
    PLANETSCALE_DB_USERNAME: "d9ohwwhbytbc",
    PLANETSCALE_DB_PASSWORD: "pscale_pw_xBIZI6C12Tkq36mKhTsIKwqsrlNYeZYoDR83tsu7fio",
    PLANETSCALE_DB: "nextdb"
  }
})
